<script defer>
	import PlaceFormComponent from '../components/PlaceFormComponent.svelte';
	import PlaceCard from '../components/PlaceCard.svelte';
	import Nav from '../components/Nav.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Nav />
<div id="header">
	<div class="row header-row">
		<div class="col-md-8 col-sm-12 header-text">
			<div>
				<h2>Réservez vos vacances au meilleur prix</h2>
				<h1>Book App</h1>
				<h5>L'application de réservation la plus recommandée par les clients en 2024 *</h5>
				<p><i>* Selon des sondages auprès de joueurs assidus de Dark Souls 3 en janvier 2024</i></p>
			</div>
		</div>
		<div class="col-md-4 header-img"></div>
	</div>
</div>

<div id="form" class="container mt-3">
	<PlaceFormComponent />
</div>

<div class="container mt-3 mb-3">
	<h2>Les destinations tendances</h2>
	<div class="row">
		{#each data.places as place}
			<PlaceCard {place} />
		{/each}
	</div>
</div>

<style>
	#header {
		padding: 4vw 10vw;
		margin-bottom: -50px;
		width: 100vw;
		height: 80vh;
		background-image: url(https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
	}

	.header-row {
		height: 80%;
		width: 100%;
	}

	.header-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;
	}

	.header-text > div {
		background-color: rgba(0, 0, 0, 0.500);
		border-radius: 5px;
		padding: 25px;
	}

	.header-img {
		background-image: url(https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 5px;
	}

	h1 {
		font-size: 50px;
		font-weight: bold;
	}

	h2 {
		font-size: 35px;
	}

	#header > div {
		color: white;
	}

	#form {
		padding: 10px;
		background-color: rgb(240, 223, 198);
		border-radius: 5px;
	}

	@media (max-width: 768px) {
		h5, i {
			display: none;
		}

		.header-img {
			display: none;
		}
	}
</style>
