<script>
  import Square from "./Square.svelte";
  import tablero from './Tablero.js';
  import Computador from './Jugador.js';
  let Compu = new Computador();
  let squares = [null, null, null, null, null, null, null, null, null];
  let Tablero = new tablero(['','','','','','','','','']);

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
    Tablero.Insertar('x',i)
      squares[i] = "X"
      let MejorJugada = Compu.Movimiento_optimo(Tablero);
      squares[MejorJugada] = "O"
      Tablero.Insertar('o',MejorJugada)
      Tablero.TableroConsola();
      console.log(Compu.Movimiento_optimo(Tablero));
      console.log(Compu.nodes_map);
  	  console.log(Tablero.EstadoTablero());
      ganador = calcularGanador(squares);
    }
  }
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

<div class="tablero">
  {#each squares as square, i} <Square value={square} handleClick={() =>
  handleClick(i)} /> {/each}
</div>

