<script>
	import PlaceFormComponent from '../../components/PlaceFormComponent.svelte';

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

	<div id="places-container">
		{#each data.places as place}
			<div class="card">
				<p class="name">{place.name}</p>
				<p>Email : {place.email}</p>
				<p>Country : {place.country} - City : {place.city}</p>
				<p>Address : {place.address}</p>
				<p>Phone number : {place.phone_number}</p>
				<p>Rating : {place.rating}</p>
				<a href="/place/{place.id}" class="btn btn-primary">Go {place.country}</a>
			</div>
		{/each}
	</div>
</div>

<style>
    .container {
        margin-top: 80px;
    }

	#places-container {
		padding: 0 10%;
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		font-family: Arial, Helvetica, sans-serif;
		width: 50%;
		padding: 15px;
		border-radius: 5px;
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
	}

	.name {
		font-weight: bold;
	}
</style>
