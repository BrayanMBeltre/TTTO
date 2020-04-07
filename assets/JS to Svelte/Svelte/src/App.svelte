<script>
	export let name;
	let a = 0;
	let b = 0;
	let c = 1;
	let Arreglo = [
		{Hola:false,texto:"Esto"},
		{Hola:false,texto:"Es"},
		{Hola:false,texto:"una"},
		{Hola:false,texto:"prueba"}
	]
	function agregar(){
		Arreglo = Arreglo.concat({Hola:false,texto:""})
	}
	function eliminar(){
		Arreglo = Arreglo.filter(t => !t.Hola)
	}
	let canvas;
</script>
	<div>
		<input type="number" bind:value={a} min="0" max="100">
		<input type="range" bind:value={a} min="0" max="100">
	</div>
	<div>
		<input type="number" bind:value={b} min="0" max="100">
		<input type="range" bind:value={b} min="0" max="100">
	</div>
	<div>
		<input type="number" bind:value={c} min="1" max="100">
		<input type="range" bind:value={c} min="1" max="100">
	</div>
	<input type="password" placeholder="Ingrese aquí su contraseña">
	<p>
		({a} + {b}) * {c} = {(a+b)*c}
	</p>
	{#each Arreglo as arre}
	<div>
		<input type="checkbox" 
		bind:checked={arre.Hola}
		>
		<input placeholder="Ingrese algo"
		bind:value={arre.texto}>
	</div>
	{/each}
	<div>
		<button on:click={agregar}>
			Agregar otro
		</button>
	</div>
	<div>
		<button on:click={eliminar}>
			Eliminar los que están listos
		</button>
	</div>
	<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
