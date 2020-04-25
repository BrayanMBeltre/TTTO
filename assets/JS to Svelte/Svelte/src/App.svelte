<script>
	import Tablero2 from './Tablero.svelte';
	const title = "Tic Tac toe";
	import tablero from './Tablero.js';
	import Computador from './Jugador.js';
	import square from './Square.svelte';
</script>

<svelte:head>
	
	<title>{title}</title>
	
</svelte:head>
<h1>{title}</h1>
<Tablero2/>

