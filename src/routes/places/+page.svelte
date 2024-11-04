<script>
	import PlaceFormComponent from '../../components/PlaceFormComponent.svelte';
	import PlaceCard from '../../components/PlaceCard.svelte';
	import { getPlaceFormResults } from '../../dao/placeDao';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {string} */
	let country = '';
	let city = '';

	/** @type {any} */
	let places;

	onMount(() => {
		// Get query string from URL
		const urlParams = new URLSearchParams(window.location.search);
		country = urlParams.get('country') || '';
		city = urlParams.get('city') || '';

		if (country != '') {
			places = getPlaceFormResults(country, city);
		} else {
			places = data.places;
		}
	});
</script>

<div class="container">
	<h1>Places</h1>
	<p>Query : {country} - {city}</p>

	<form>
		<div class="row">
			<PlaceFormComponent />
		</div>
	</form>

	<div id="places-container" class="row">
		{#if places != null && places != undefined}
			{#await places then places}
				{#each places as place}
					<PlaceCard {place} />
				{/each}
			{/await}
		{/if}
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
