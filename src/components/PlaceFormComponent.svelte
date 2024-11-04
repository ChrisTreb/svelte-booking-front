<script>
	import { getCountries, getCitiesByCountry } from '../dao/placeDao';

	/** @type {string} */
	let selectedCountry = "";
	/** @type {any} */
	let selectedCity = "";
	/** @type {any} */
	let cities = [];
</script>

<form>
	<div class="row">
		<div class="col-lg-3 col-md-6 col-sm-12">
			<label for="country" class="form-label">Pays</label>
			<select
				bind:value={selectedCountry}
				on:change={() => (selectedCity = "", cities = getCitiesByCountry(selectedCountry))}
				id="country-selector"
				class="form-select mb-3"
				aria-label="Select country"
			>
				<option selected value="">-- Select a country --</option>
				{#await getCountries() then countries}
					{#each countries as country}
						<option value={country}>{country}</option>
					{/each}
				{/await}
			</select>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-12">
			<label for="city" class="form-label">Ville</label>
			{#if selectedCountry != undefined && selectedCountry != null && selectedCountry != ""}
				{#await cities then cities}
					<select
						bind:value={selectedCity}			
						id="city-selector"
						class="form-select mb-3"
						aria-label="Select city"
					>
						<option selected value="">-- Select a city --</option>
						{#each cities as city}
							<option value={city}>{city}</option>
						{/each}
					</select>
				{/await }
			{:else}
				<div class="mt-1" style="display: flex; align-items: center;">
					<p>Please choose country first</p>
				</div>
			{/if}
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
			{#if selectedCountry != ""}
				<a href="/places?country={selectedCountry}&city={selectedCity}" target="_self"><div class="btn btn-primary">Go {selectedCountry} !</div></a>
				{:else}
				<button disabled="{selectedCountry == ''}" class="btn btn-warning">Select Country</button>
			{/if}
			
		</div>
	</div>
</form>

<style>
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

	a {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-primary, .btn-warning {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 50px;
	}
</style>
