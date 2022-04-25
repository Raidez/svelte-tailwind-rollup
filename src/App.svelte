<script>
	export let name;
</script>

<main class="text-center p-4 max-w-md mx-auto">
	<h1 class="text-orange-700 uppercase text-6xl font-thin">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
