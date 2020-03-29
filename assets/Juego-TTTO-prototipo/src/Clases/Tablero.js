class Tablero {//Esta es la clase Tablero, se utiliza para definir el tablero en el cual se jugarán las partidas
  //Constructor de Tablero
  constructor(Estado = ["", "", "", "", "", "", "", "", ""]) {
    this.Estado = Estado;
  }
  //Esta función se utilizará para imprimir un tablero en la consola del navegador
  TableroConsola() {
    let Formato = "";
    this.Estado.forEach((cell, index) => {
      Formato += cell ? ` ${cell}|` : "   |";
      if ((index + 1) % 3 == 0) {
        Formato = Formato.slice(0, -1);
        if (index < 8)
          Formato +=
            "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n";
      }
    });
    console.log("%c" + Formato, "color:#6d4e42;font-size:16px");
  }
  //Pregunta si el tablero está vacío.
  TableroVacio() {
    return this.Estado.every(cell => !cell);
  }
  //Pregunta si el tablero esta lleno.
  TableroLleno() {
    return this.Estado.every(cell => cell);
  }
  //Introduce un nuevo símbolo, ya sea X o O en el tablero
  Insertar(Simbolo, posicion){
    if(posicion > 8||this.Estado[posicion]) return false;
    this.Estado[posicion]=Simbolo;
    return true;
    
  }
  MovimientosDisponibles(){
      const Mov = [];
      this.Estado.forEach((cell,index)=>{
          if(!cell) Mov.push(index);
      });
      return Mov;
  }

  EstadoTablero() {
    //Si el tablero está vacío retorna Falso
    if (this.TableroVacio()) return false;
    //Se verificará si se ha ganado horizontalmente
    if (
      this.Estado[0] == this.Estado[1] &&
      this.Estado[0] == this.Estado[2] &&
      this.Estado[0]
    ) {
      return { Ganador: this.Estado[0], dirección: "H", Columna: 1 };
    }

    if (
      this.Estado[3] == this.Estado[4] &&
      this.Estado[3] == this.Estado[5] &&
      this.Estado[3]
    ) {
      return { Ganador: this.Estado[3], dirección: "H", Columna: 2 };
    }

    if (
      this.Estado[6] == this.Estado[7] &&
      this.Estado[6] == this.Estado[8] &&
      this.Estado[6]
    ) {
      return { Ganador: this.Estado[3], dirección: "H", Columna: 3 };
    }
    //Se verificará si se ha ganado verticalemente
    if (
      this.Estado[0] == this.Estado[3] &&
      this.Estado[0] == this.Estado[6] &&
      this.Estado[0]
    ) {
      return { Ganador: this.Estado[0], dirección: "V", Columna: 1 };
    }

    if (
      this.Estado[1] == this.Estado[4] &&
      this.Estado[1] == this.Estado[7] &&
      this.Estado[1]
    ) {
      return { Ganador: this.Estado[3], dirección: "V", Columna: 2 };
    }

    if (
      this.Estado[2] == this.Estado[4] &&
      this.Estado[5] == this.Estado[8] &&
      this.Estado[2]
    ) {
      return { Ganador: this.Estado[3], dirección: "V", Columna: 3 };
    }
    //Se verificará si se ha ganado de manera diagonal
    if (
      this.Estado[0] == this.Estado[4] &&
      this.Estado[0] == this.Estado[8] &&
      this.Estado[0]
    ) {
      return { Ganador: this.Estado[0], dirección: "D", Columna: 1 };
    }

    if (
      this.Estado[2] == this.Estado[4] &&
      this.Estado[2] == this.Estado[6] &&
      this.Estado[3]
    ) {
      return { Ganador: this.Estado[3], dirección: "H", Columna: 2 };
    }
    //En caso de que no haya ganador, pero el tablero esté lleno, será un empate.
    if (this.TableroLleno()) {
      return { Ganador: "Empate" };
    }
    return false;
  }
}

//Se exporta la clase para ser utilizada en otra parte.
export default Tablero;