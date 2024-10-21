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