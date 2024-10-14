<script defer>
	/** @type {import('./$types').PageData} */
    import { getPlaceById } from '../../../../dao/placeDao';
	import { Place } from '../../../../interfaces/Place';

    /** @type {number} */
    let placeId = 1;

    let disabled = false;
    let promise = Promise.resolve(new Place);

    function handleClick() {
        promise = getPlaceById(placeId);
        disabled = true;
    }

</script>


<div class="container">
	<h1>Modify places</h1>

	<form>
		<div class="mb-3">
			<label for="place-id" class="form-label">Place id</label>
			<input
                bind:value={ placeId }
				type="number"
                min="1"
                max="9999"
				class="form-control"
				id="place-id"
			/>
		</div>
		<button id="place-id-submit" type="submit" class="btn btn-primary" on:click={ handleClick } { disabled }>Submit</button>
	</form>

    {#await promise}
	    <p>...waiting</p>
    {:then place}
        {#if place != undefined}
            {place.name}
        {/if}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

</div>

<style>
	.container {
		margin-top: 100px;
	}
</style>
