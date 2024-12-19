<script>
	import { onMount } from 'svelte';

	import PlaceFormComponent from '../../components/PlaceFormComponent.svelte';
	import PlaceCard from '../../components/PlaceCard.svelte';
	import { getPlaceFormResults } from '../../dao/placeDao';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	import Nav from '../../components/Nav.svelte';
	import PlacesPaginator from '../../components/PlacesPaginator.svelte';

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

<Nav />
<div class="container">
	<Breadcrumb />
	{#if country != ''}
		<div class="filter">
			<p class="query">
				<b
					>Results for country : {country}
					{#if city != ''}, city : {city}
					{/if}</b
				>
			</p>
			<a href="/places" target="_self" id="reset-btn" class="btn btn-warning">Reset</a>
		</div>
	{/if}

	<form>
		<div class="row">
			<PlaceFormComponent />
		</div>
	</form>

	<div id="places-container" class="row">
		{#if places != null && places != undefined}
			{#await places then places}
				<PlacesPaginator {places} itemsPerPage={6} />
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

	.filter {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		background-color: rgb(70, 70, 70);
		padding: 10px 15px;
		border-radius: 5px;
		margin-bottom: 15px;
	}

	.query {
		margin: 0;
	}

	#reset-btn {
		width: 100px;
		margin: 0 !important;
	}
</style>
