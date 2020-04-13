<script>
	import Tablero from './Tablero.svelte';
	const title = "Tic Tac toe";
	import hola from './prueba.js';
	import Computadora from './Jugador.js';
	import Taablero from './Tablero.js';
</script>

<svelte:head>
	
	<title>{title}</title>
	
</svelte:head>
	
<h1>{title}</h1>
<Tablero/>

