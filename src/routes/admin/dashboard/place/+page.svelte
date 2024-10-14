<script defer>
	/** @type {import('./$types').PageData} */
    import { getPlaceById } from '../../../../dao/placeDao';
	import { Place } from '../../../../classes/Place';

    /** @type {number} */
    let placeId = 1;

    let disabled = false;
    let promise = Promise.resolve(new Place);

    function handleClick() {
        promise = getPlaceById(placeId);
    }

</script>


<div class="container">
	<h1>Modify places</h1>
	<form class="row">
		<div class="col-3 mb-3">
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
		<button id="place-id-submit" type="submit" class="col-1 btn btn-primary" on:click={ handleClick }>Get place</button>
	</form>

    
    {#await promise}
	    <p>...waiting</p>
    {:then place}
            {#if place.id != undefined}
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input
                                value="{place.name}"
                                type="text"
                                class="form-control"
                                id="name"
                            />
                        </div>
                        <div class="col-6 mb-3">
                            <label for="country" class="form-label">Country</label>
                            <input
                                value="{place.country}"
                                type="text"
                                class="form-control"
                                id="country"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="city" class="form-label">City</label>
                            <input
                                value="{place.city}"
                                type="text"
                                class="form-control"
                                id="city"
                            />
                        </div>
                        <div class=" col-6 mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input
                                value="{place.address}"
                                type="text"
                                class="form-control"
                                id="address"
                            />
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-4 mb-3">
                            <label for="phone" class="form-label">Phone number</label>
                            <input
                                value="{place.phone_number}"
                                type="text"
                                class="form-control"
                                id="phone"
                            />
                        </div>
                        <div class=" col-4 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input
                                value="{place.email}"
                                type="text"
                                class="form-control"
                                id="email"
                            />
                        </div>
                        <div class=" col-4 mb-3">
                            <label for="rating" class="form-label">Rating</label>
                            <input
                                value="{place.rating}"
                                type="number"
                                min="1"
                                max="5"
                                class="form-control"
                                id="rating"
                            />
                        </div>
                    </div>
                    
                
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea
                            value="{place.description}"
                            class="form-control"
                            id="description"
                            rows="5"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label">Image string format Base 64</label>
                        <textarea
                            value="{place.image}"
                            class="form-control"
                            id="image"
                            rows="5"
                        />
                    </div>
                </div>
                <button id="submit" type="submit" class="btn btn-primary" on:click={ () => console.log("Sending") }>Change</button>
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
