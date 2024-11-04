<script>
	import PlaceFormComponent from '../../components/PlaceFormComponent.svelte';
	import PlaceCard from '../../components/PlaceCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<h1>Places</h1>

	<form>
		<div class="row">
			<PlaceFormComponent />
		</div>
	</form>

	<div id="places-container" class="row">
		{#each data.places as place}
			<PlaceCard {place} />
		{/each}
	</div>
</div>

<style>
    .container {
        margin-top: 80px;
    }

	#places-container {
		margin-top: 20px;
		display: flex;
		flex-wrap: wrap;
	}
</style>
