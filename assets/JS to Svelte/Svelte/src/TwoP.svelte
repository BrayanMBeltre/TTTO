<script>
    //Se importan las clases necesarias para el funcionamiento del programa
    import Square from "./Square.svelte";
    import tablero from './Tablero.js';
    import Computador from './Jugador.js';
    let Compu = new Computador();
    let squares = [null, null, null, null, null, null, null, null, null];
    let Tablero = new tablero(['','','','','','','','','']);
    let contador = 3;
    let xIsNext = true;
    $: status = "Próximo jugador: " + (xIsNext ? "X" : "O");
    let ganador = null;
  //Esta función se ejecutará cada vez que el jugador presione un botón siempre y cuando no se haya jugado previamente en este.
    function handleClick(i) {
      if (!squares[i]) {
        //------> Esto es para modo 2 jugadores, revisar luego <------- squares[i] = xIsNext ? "X" : "O";

        //Se le asigna el valor a la posición en el que el jugador jugó.
        squares[i] = xIsNext ? "X" : "O";
        
        xIsNext = !xIsNext;

        //En esta variable se almacenará al jugador que ganó.
        ganador = calcularGanador(squares);
  
        //A partir de aquí es para visualizar en la consola el estado del juego, este puede ser eliminado sin problema.
        /***********************************************/
        Tablero.TableroConsola();
        console.log(Compu.Movimiento_optimo(Tablero));
        console.log(Compu.nodes_map);
        console.log(Tablero.EstadoTablero());
        /***********************************************/
        }
      }
    
    //Limpia el tablero una vez que la partida finalice.
    function Limpiar() {
      const contando = setInterval(() => {
        contador -= 1;
  
        if (contador <= 0) {
          squares = [null, null, null, null, null, null, null, null, null];
          Tablero = new tablero();
          //xIsNext = true;
          ganador = null;
          clearInterval(contando);
          setTimeout(() => {}, 1000);
          contador = 3;
        }
      }, 1000);
      return "";
    }
    //Esta función se utilizará para determinar al ganador de la partida.
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
      //-----------------------> No comprendo bien cómo funciona este código, revisar más adelante. <-------------------
      for (let i = 0; i < ComboGanador.length; i++) {
        const [a, b, c] = ComboGanador[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          return `Ganador: ${squares[a]}`;
      }
      const empate = squares.every((square) => square !== null);
      return empate ? "Es un empate" : null;
    }
  //A partir de aquí empieza el apartado visual de la página web.
  </script>
  
  <style>
    h3 {
      color: red;
    }
    .tablero {
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      align-self: center;
    }
  </style>
  
  {#if ganador}
  <h3>{ganador}</h3>
  {Limpiar()}
  <p>Reiniciando en {contador}</p>
  {:else}
  <h3>{status}</h3>
  {/if}
  
  <div class="tablero">
    {#each squares as square, i} <Square value={square} handleClick={() =>
    handleClick(i)} /> {/each}
  </div>
  
  