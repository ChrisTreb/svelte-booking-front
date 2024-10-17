<script defer>
	/** @type {import('./$types').PageData} */
	export let data;
	import { getCitiesByCountry } from '../dao/placeDao';
	import { EMOJI_STAR } from '../const/emoji';

	/** @type {string} */
	let selectedCountry;
	/** @type {string} */
	let selectedCity;

	/** @type {any} */
	let cities = [];
</script>

<div id="header">
	<div>
		<h2>Réservez vos vacances au meilleur prix</h2>
		<h1>Book App</h1>
		<h5>L'application de réservation la plus recommandée par les clients en 2024 *</h5>
		<p><i>* Selon des sondages auprès de joueurs assidus de Dark Souls 3 en janvier 2024</i></p>
	</div>
</div>

<div id="form" class="container mt-3">
	<form>
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-12">
				<label for="country" class="form-label">Pays</label>
				<select
					bind:value={selectedCountry}
					on:change={() => (cities = getCitiesByCountry(selectedCountry))}
					id="country-selector"
					class="form-select mb-3"
					aria-label="Select country"
				>
					{#each data.countries as country}
						<option value={country}>{country}</option>
					{/each}
				</select>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-12">
				<label for="city" class="form-label">Ville</label>
				<select
					value={selectedCity}
					id="city-selector"
					class="form-select mb-3"
					aria-label="Select city"
				>
					<option value="">No city</option>
					{#await getCitiesByCountry(selectedCountry) then cities}
						{#each cities as city}
							<option value={city}>{city}</option>
						{/each}
					{/await}
				</select>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-12 datepickers">
				<div>
					<label for="start-date" class="form-label">Date de début</label>
					<input type="date" class="form-control" id="start-date" />
				</div>
				<div>
					<label for="end-date" class="form-label">Date de fin</label>
					<input type="date" class="form-control" id="end-date" />
				</div>
			</div>
			<div class="col-lg-2 col-md-6 col-sm-12 validation-form">
				<button class="btn btn-primary submit" type="submit">Go {selectedCountry} !</button>
			</div>
		</div>
	</form>
</div>

<div class="container mt-3 mb-3">
	<h2>Les destinations tendances</h2>
	<div class="row">
		{#each data.places as place}
			<div class="col-lg-4 col-md-6 col-sm-12">
				<div class="card">
					<img src="{place.image}" title="place" alt="place" />
					<div class="card-body">
						<h5 class="card-title">{place.name}</h5>
						<h6>{place.rating} {EMOJI_STAR}</h6>
						<p>Pays : {place.country} - Ville : {place.city}</p>
						<p class="card-text">
							{place.description}
						</p>
						<a href="/place/{place.id}" class="btn btn-primary">Go {place.country}</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	#header {
		padding: 100px;
		margin-bottom: -50px;
		width: 100vw;
		height: 50vh;
		background-image: url(https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 4vw;
		font-weight: bold;
	}

	h2 {
		font-size: 3vw;
	}

	#header > div {
		color: white;
	}

	#form {
		padding: 10px;
		background-color: rgb(240, 223, 198);
		border-radius: 5px;
	}

	label {
		margin-left: 5px;
		font-weight: bold;
	}

	input {
		width: 100%;
	}

	.datepickers {
		display: flex;
	}

	.datepickers > div {
		width: 48%;
		margin-right: 2%;
	}

	.validation-form {
		padding: 20px;
		display: flex;
	}

	button.submit {
		width: 100%;
	}

	.card {
		height: 100%;
	}

	.card-text {
		width: 100%;
		height: auto;
	}
</style>
