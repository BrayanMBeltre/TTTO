<script>
  import Square from "./Square.svelte";
  let squares = [null, null, null, null, null, null, null, null, null];
  let contador = 0;
  let xIsNext = true;
  $: status = "Próximo jugador: " + (xIsNext ? "X" : "0");

  let ganador = "";

  function handleClick(i) {
    if (!squares[i]) {
      squares[i] = xIsNext ? "X" : "O";
      xIsNext = !xIsNext;
      ganador = calcularGanador(squares);
    }
  }
  function Limpiar() {
    const contando = setInterval(() => {
      contador += 1;

      if (contador >= 3) {
        squares = [null, null, null, null, null, null, null, null, null];
        xIsNext = true;
        ganador = "";
        clearInterval(contando);
        setTimeout(() => {}, 1000);
        contador = 0;
      }
    }, 1000);
    return "Reiniciando...";
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
<!--  <button on:click={Limpiar}>
    Limpiar tablero
</button>-->
{:else}
<h3>{status}</h3>
{/if}

<div class="tablero">
  {#each squares as square, i} <Square value={square} handleClick={() =>
  handleClick(i)} /> {/each}
</div>
