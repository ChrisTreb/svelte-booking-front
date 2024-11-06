<script>
	import { onMount } from 'svelte';

	import PlaceFormComponent from '../../components/PlaceFormComponent.svelte';
	import PlaceCard from '../../components/PlaceCard.svelte';
	import { getPlaceFormResults } from '../../dao/placeDao';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	
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
	<Breadcrumb/>
	<p>{#if country != ""} Query : {country} {/if} {#if city != ""}- {city} {/if}</p>

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
			{:else}
			<div class="loading-container">
				<h3>LOADING</h3>
				<p>Looking for results !</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		margin-top: 80px;
		width: 100vw;
		min-height: 100vh;
	}

	#places-container {
		min-height: 50vh;
		margin-top: 20px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	.loading-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
