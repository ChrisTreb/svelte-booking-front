<script>
	import { getCountries, getCitiesByCountry } from '../dao/placeDao';

	/** @type {any[] | null | undefined} */
	let countries = [];
	/** @type {string} */
	let selectedCountry;
	/** @type {any} */
	let selectedCity;
	/** @type {any} */
	let cities = [];
</script>

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
				{#await getCountries() then countries}
					{#each countries as country}
						<option value={country}>{country}</option>
					{/each}
				{/await}
			</select>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-12">
			<label for="city" class="form-label">Ville</label>
			{#if selectedCountry != undefined && selectedCountry != null}
				<select
					value={selectedCity}
					id="city-selector"
					class="form-select mb-3"
					aria-label="Select city"
				>
					{#await getCitiesByCountry(selectedCountry) then cities}
						{#each cities as city}
							<option value={city}>{city}</option>
						{/each}
					{/await}
				</select>
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
			<button class="btn btn-primary submit" type="submit">Go !</button>
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

	button.submit {
		width: 100%;
	}
</style>
