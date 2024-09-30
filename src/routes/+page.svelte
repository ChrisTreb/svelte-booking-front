<script>
	/** @type {import('./$types').PageData} */
    export let data;
</script>

<div id="header">
	<div>
		<h2>Réservez vos vacances à meilleurs prix</h2>
		<h1>Book App</h1>
		<p>L'application de réservation la plus recommandée par les clients en 2024</p>
	</div>
</div>

<div class="container mt-3">
	<form>
		<div class="row">
			<div class="col-3">
				<label for="country" class="form-label">Country</label>
				<select class="form-select mb-3" aria-label="Select country">
					{#each data.countries as country }
					<option value={country}>{country}</option>
					{/each}
				</select>
			</div>
			<div class="col-3">
				<label for="city" class="form-label">City</label>
				<input type="text" class="form-control" id="city" />
			</div>
			<div class="col-4 datepickers">
				<div>
					<label for="start-date" class="form-label">Start date</label>
					<input type="date" class="form-control" id="start-date" />
				</div>
				<div>
					<label for="end-date" class="form-label">End date</label>
					<input type="date" class="form-control" id="end-date" />
				</div>
			</div>
			<div class="col-2 validation-form">
				<button class="btn btn-primary" type="submit">Search</button>
			</div>
		</div>
	</form>
</div>

<style>
	#header {
		padding: 100px;
		width: 100vw;
		height: 50vh;
		background-image: url(https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
	}

	#header > div {
		color: white;
	}

	input {
		width: 100%;
	}

	.datepickers {
		display: flex;
	}

	.datepickers > div {
		width: 48%;
		margin: 1%;
	}

	.validation-form {
		padding: 10px;
		display: flex;
	}
</style>
