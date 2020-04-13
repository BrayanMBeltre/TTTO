<script>
  import Square from "./Square.svelte";
  import Computadora from './Jugador.js';
  let squares = [null, null, null, null, null, null, null, null, null];
 /*let Ultimate =[
    {Tablero1:[null, null, null, null, null, null, null, null, null]},
    {Tablero2:[null, null, null, null, null, null, null, null, null]},
    {Tablero3:[null, null, null, null, null, null, null, null, null]},
    {Tablero4:[null, null, null, null, null, null, null, null, null]},
    {Tablero5:[null, null, null, null, null, null, null, null, null]},
    {Tablero6:[null, null, null, null, null, null, null, null, null]},
    {Tablero7:[null, null, null, null, null, null, null, null, null]},
    {Tablero8:[null, null, null, null, null, null, null, null, null]},
    {Tablero9:[null, null, null, null, null, null, null, null, null]},
  ]*/
  let contador = 3;
  let xIsNext = true;
  $: status = "Próximo jugador: " + (xIsNext ? "X" : "O");

  let ganador = null;

  function handleClick(i) {
    if (!squares[i]) {
      //squares[i] = xIsNext ? "X" : "O";
      squares[i] = "X"
      xIsNext = !xIsNext;
      ganador = calcularGanador(squares);
    }
  }
  function Limpiar() {
    const contando = setInterval(() => {
      contador -= 1;

      if (contador <= 0) {
        squares = [null, null, null, null, null, null, null, null, null];
        xIsNext = true;
        ganador = null;
        clearInterval(contando);
        setTimeout(() => {}, 1000);
        contador = 3;
      }
    }, 1000);
    return null;
  }
  function calcularGanador(squares) {
    const ComboGanador = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < ComboGanador.length; i++) {
      const [a, b, c] = ComboGanador[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return `Ganador: ${squares[a]}`;
    }
    const empate = squares.every((square) => square !== null);
    return empate ? "Es un empate" : null;
  }

  function CalcularProximoMovimiento(){
    if(squares[0]== null && squares[1] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null){
      squares[1]="O";
    }    
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[6]="O"
      
      }    
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == "O" && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[3]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O") {
        squares[3]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[7]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[7]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {
        squares[8]="O"
      
      }
     else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {
        squares[3]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[5]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == "O" && squares[1] == "X") {
        squares[2]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == "O" && squares[7] == "O" && squares[8] == null && squares[1] == "X") {
        squares[8]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == "O" && squares[7] == "X" && squares[8] == "X" && squares[1] == "O") {
        squares[2]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {
        squares[3]="O"
      
      }
     else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == "O") {
        squares[7]="O"
      
      }
    //clicking top middle
    if(squares[1] == null && squares[2] == null && squares[4] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null){
      squares[2]="O"
    }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {

        squares[8]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {

        squares[3]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {

        squares[5]="O"
      
      }
     else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == null && squares[1] == null) {

        squares[8]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {

        squares[6]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {

        squares[3]="O"
      
      }
    //clicking bottom middle 
    if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[6]="O"
      
      }    
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == "O" && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[8]="O"
      
      }    
    else if(squares[0] == "X" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[3]="O"
      }    
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[8]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[0]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[5]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[5]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == "O") {
        squares[6]="O"
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {
        squares[3]="O"
      
      }
    //clicking middle right
    if(squares[0] == "X" && squares[1] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null) {
        squares[7]="O"
      
      }      
      else if(squares[0] == "X" && squares[2] == null && squares[3] == "O" && squares[4] == "O" && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == null) {
        squares[6]="O"
      }      
     else if(squares[0] == "X" && squares[4] == "O" && squares[2] == "X" && squares[3] == "X" && squares[4] == "O" && squares[5] == null && squares[6] == "O" && squares[7] == null && squares[8] == "O") {
        squares[7]="O"
      }       
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[6]="O"
      
      }   
      else if(squares[0] == "X" && squares[4] == "O" && squares[2] == "X" && squares[3] == "O" && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O") {
        squares[6]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[7]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O") {
        squares[0]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[7]="O"
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == "O" && squares[7] == "O" && squares[8] == null && squares[1] == "X") {
        squares[8]="O"
      
      }
  }
  
    
  //clicking bottom right  
   if(squares[0] == "X" && squares[1] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null){
     squares[7]="O"
    
   }   
   else if(squares[0] == "X" && squares[1] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "O" && squares[7] == "X" && squares[8] == null){
     squares[2]="O"
         
   }   
   else if(squares[4] == "O" && squares[1] == "O" && squares[0] == "X" && squares[6] == null && squares[7] == "X" && squares[2] == null && squares[5] == null && squares[8] == null){
      squares[5]="O"
    
    }   
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[6]="O"
      
      }   
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == "O" && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == "X") {
        squares[3]="O"
      
      }
   
   else if(squares[0] == "O" && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == "O") {
        squares[3]="O"
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[7]="O"
      
      }
   else if(squares[0] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == "O") {
        squares[2]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
        squares[7]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {
        squares[6]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {
        squares[3]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[5]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {
        squares[1]="O";
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == "O" && squares[7] == "O" && squares[8] == null && squares[1] == "X") {
        squares[2]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == null) {
        squares[5]="O"
      }
    
    //clicking bottom left
    if(squares[4] == "O" && squares[1] == "O" && squares[0] == "X" && squares[6] == null && squares[7] == null){
      squares[7]="O"
    
    }   
   else if(squares[4] == "O" && squares[1] == "O" && squares[0] == "X" && squares[6] == null && squares[7] == "X" && squares[2] == null && squares[5] == null && squares[8] == null){
      squares[5]="O"
    
      }   
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {

        squares[5]="O"
      }   
      else if(squares[0] == "X" && squares[4] == "O" && squares[2] == "X" && squares[3] == "O" && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O"){

        squares[5]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {

        squares[7]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O") {

        squares[0]="O"
      
      }
      /*else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {

        squares[2]="O"
      
      }*/
      
      else if(squares[0] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == "O") {

        squares[2]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {

        squares[7]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {

        squares[8]="O"
      
      }   
       else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {

        squares[3]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == null) {

        squares[3]="O"
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {

        squares[1]="O";
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {

        squares[3]="O"
      
      }
      else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == "O") {

        squares[7]="O"
      
      }
    
    //clicking middle left
   
  if(squares[0] == "X" && squares[1] == "O" && squares[4] == "O" && squares[3] == null && squares[7] == null) {
    squares[7]="O"
  
  }   
    else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "X") {
  
        squares[6]="O"
      
      }   
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "O" && squares[3] == null && squares[5] == "O" && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == "X") {
  
        squares[8]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
  
        squares[7]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == "X" && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == "X" && squares[8] == "O" && squares[1] == "O") {
  
        squares[0]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {
  
        squares[7]="O"
      
      }
   else if(squares[0] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == "O") {
  
        squares[2]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {
  
        squares[2]="O"
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == null) {
  
        squares[7]="O"
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {
  
        squares[1]="O";
      }
    
    //clicking top right
   
   if(squares[0] == null && squares[1] == null && squares[2] == null && squares[3] == null && squares[4] == "O" && squares[5] == null && squares[6] == null && squares[7] == null && squares[8] == null) {
     squares[1]="O";
   }   
   
   else if(squares[0] == "X" && squares[1] == "O" && squares[2] == null && squares[3] == "O" && squares[4] == "O" && squares[5] == "X" && squares[6] == "O" && squares[7] == "X" && squares[8] == null) {
     squares[8]="O"
         
   }   
   else if(squares[4] == "O" && squares[1] == "O" && squares[0] == "X" && squares[6] == null && squares[7] == "X" && squares[2] == null && squares[5] == null && squares[8] == null){
      squares[5]="O"
    
    }    
   else if(squares[0] == "X" && squares[1] == "O" && squares[4] == "O"){
     squares[7]="O"
    
   }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == null && squares[8] == null && squares[1] == "O") {

        squares[7]="O"
      
      }
   else if(squares[0] == "O" && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "X" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == "O") {

        squares[8]="O"
      
      }
    else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == "X" && squares[8] == null && squares[1] == null) {

        squares[3]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == null && squares[6] == "X" && squares[7] == null && squares[8] == null && squares[1] == null) {

        squares[5]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == null && squares[1] == null) {

        squares[1]="O";
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "O" && squares[5] == "X" && squares[6] == "X" && squares[7] == "O" && squares[8] == "O" && squares[1] == "X") {

        squares[0]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == null && squares[7] == "O" && squares[8] == null && squares[1] == null) {

        squares[1]="O";
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == null && squares[6] == "O" && squares[7] == "O" && squares[8] == null && squares[1] == "X") {

        squares[8]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == "O" && squares[7] == "X" && squares[8] == "X" && squares[1] == "O") {

        squares[0]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == "X" && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == "O") {

        squares[7]="O"
      
      }
   else if(squares[0] == null && squares[4] == "O" && squares[2] == null && squares[3] == null && squares[5] == "O" && squares[6] == null && squares[7] == null && squares[8] == "X" && squares[1] == null) {

        squares[3]="O"
      
      }
    
 //this is the ending bracket of the X function     
 // $("#buttonO").click(function(){
  //  $(".fields").text(null);
   // $("#mm").text("X");
 //});   
  
  
</script>

<style>
  h3 {
    color: red;
  }
  .tablero {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }
</style>

{#if ganador}
<h3>{ganador}</h3>
{Limpiar()}
<p>Reiniciando en {contador}</p>
{:else}
<h3>{status}</h3>
{/if}
<button on:click={CalcularProximoMovimiento}>
  Proximo movimiento
  
  </button>
<div class="tablero">
  {#each squares as square, i} <Square value={square} handleClick={() =>
  handleClick(i)} /> {/each}
</div>
