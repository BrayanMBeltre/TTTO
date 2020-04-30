<script>
	import Tablero2 from './Tablero.svelte';
	import Tablero2P from './TwoP.svelte';
	const title = "Tic Tac toe";
</script>

<svelte:head>
	
	<title>{title}</title>
	
</svelte:head>
<h1>{title}</h1>
<button onclick="">
	Modo 2 jugadores
</button>
<Tablero2/>

