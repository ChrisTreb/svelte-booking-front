<script defer lang="ts">
	/** @type {import('./$types').PageData} */
	import { getPlaceById, savePlace, deletePlace } from '../../../../dao/placeDao';
	import { Place } from '../../../../classes/Place';

	let placeDisplayed: Place;
	placeDisplayed = new Place(0, new Date(), '', '', '', '', '', '', '', 1, '');
	let promise;
	let messageError = '';
	let messageSuccess = '';

	async function handleClickGetPlace() {
		promise = await getPlaceById(placeDisplayed.id);

		console.log('Promise : \n' + JSON.stringify(promise));

		if (Object.keys(promise).length == 0) {
			messageSuccess = '';
			messageError = 'Place with id : ' + placeDisplayed.id + ', not found ! Sorry';
			placeDisplayed = new Place(0, new Date(), '', '', '', '', '', '', '', 1, '');
		} else {
			placeDisplayed = new Place(
				promise.id,
				promise.created_at,
				promise.name,
				promise.address,
				promise.city,
				promise.country,
				promise.description,
				promise.phone_number,
				promise.email,
				promise.rating,
				promise.image
			);

			// Remove error value
			messageError = '';
			messageSuccess = 'Place with id : ' + placeDisplayed.id + ', found !';
		}
	}

	async function handleClickSavePlace() {
		let place = new Place(
			placeDisplayed.id,
			placeDisplayed.created_at,
			placeDisplayed.name,
			placeDisplayed.address,
			placeDisplayed.city,
			placeDisplayed.country,
			placeDisplayed.description,
			placeDisplayed.phone_number,
			placeDisplayed.email,
			placeDisplayed.rating,
			placeDisplayed.image
		);

		let response = await savePlace(place);
		console.log('Save response : ' + JSON.stringify(response));
		// TODO : Give user feedback
	}

	async function handleClickDeletePlace() {
		let response = await deletePlace(placeDisplayed.id);

		console.log('Delete response : ' + response);
	}
</script>

<div class="container">
	<h1>Place editor</h1>
	<div class="row">
		<div class="col-lg-2 col-md-6 mb-2">
			<label for="place-id" class="form-label">Select place by id</label>
			<input
				bind:value={placeDisplayed.id}
				type="number"
				min="1"
				max="9999"
				class="form-control"
				id="place-id"
			/>
		</div>
		<div class="col-lg-2 col-md-6 place-id-form-button mb-2">
			<button
				id="place-id-submit"
				type="submit"
				class="col-1 btn btn-primary"
				on:click={handleClickGetPlace}>Get place</button
			>
		</div>
		{#if messageError != ''}
			<div class="col-lg-8 col-md-12 mb-0 error-message alert alert-danger mt-3">
				{messageError}
			</div>
		{/if}
		{#if messageSuccess != ''}
			<div class="col-lg-8 col-md-12 mb-0 success-message alert alert-success mt-3">
				{messageSuccess}
			</div>
		{/if}
	</div>

	<div class="container-fluid mt-5">
		<div class="row">
			<div class="col-lg-6 col-sm-12 mb-3">
				<label for="name" class="form-label">Name</label>
				<input bind:value={placeDisplayed.name} type="text" class="form-control" id="name" />
			</div>
			<div class="col-lg-6 col-sm-12 mb-3">
				<label for="country" class="form-label">Country</label>
				<input bind:value={placeDisplayed.country} type="text" class="form-control" id="country" />
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-sm-12 mb-3">
				<label for="city" class="form-label">City</label>
				<input bind:value={placeDisplayed.city} type="text" class="form-control" id="city" />
			</div>
			<div class="col-lg-6 col-sm-12 mb-3">
				<label for="address" class="form-label">Address</label>
				<input bind:value={placeDisplayed.address} type="text" class="form-control" id="address" />
			</div>
		</div>

		<div class="row">
			<div class="col-lg-4 col-sm-12 mb-3">
				<label for="phone" class="form-label">Phone number</label>
				<input
					bind:value={placeDisplayed.phone_number}
					type="text"
					class="form-control"
					id="phone"
				/>
			</div>
			<div class="col-lg-4 col-sm-12 mb-3">
				<label for="email" class="form-label">Email</label>
				<input bind:value={placeDisplayed.email} type="text" class="form-control" id="email" />
			</div>
			<div class="col-lg-4 col-sm-12 mb-3">
				<label for="rating" class="form-label">Rating</label>
				<input
					bind:value={placeDisplayed.rating}
					type="number"
					min="1"
					max="5"
					class="form-control"
					id="rating"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 mb-3">
				<label for="description" class="form-label">Description</label>
				<textarea
					bind:value={placeDisplayed.description}
					class="form-control"
					id="description"
					rows="5"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-12">
				<label for="image" class="form-label">Image string format Base 64</label>
				<textarea bind:value={placeDisplayed.image} class="form-control" id="image" rows="10" />
			</div>
			<div class="col-lg-6 col-md-12 preview-container">
				<img
					class="img-fluid"
					src="data:image/jpg;base64, {placeDisplayed.image}"
					alt="preview"
					title="preview"
				/>
			</div>
		</div>
		<div class="row form-buttons">
			<button
				id="submit"
				type="submit"
				class="col-lg-2 col-md-6 mt-3 btn btn-primary"
				on:click={handleClickSavePlace}>Update place</button
			>
			{#if placeDisplayed.name != '' && placeDisplayed.name != undefined && placeDisplayed.name != null}
				<button
					id="submit"
					type="submit"
					class="col-lg-2 col-md-6 mt-3 btn btn-danger"
					on:click={handleClickDeletePlace}>Delete place</button
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		min-height: calc(100vh - 100px);
		margin-top: 100px;
	}

	.place-id-form-button {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	#place-id-submit {
		height: 40px;
		width: 100%;
	}

	.preview-container {
		margin-top: 33px;
		min-height: 250px;
		height: 100%;
		border: 1px solid rgba(158, 158, 158, 0.35);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preview-container > img {
		height: 100%;
		max-width: 60%;
	}

	.form-buttons {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
