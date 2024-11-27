<script defer lang="ts">
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	import { getPlaceById, savePlace, deletePlace, validatePlace } from '../../../../dao/placeDao';
	import { Place } from '../../../../classes/Place';
	import Breadcrumb from '../../../../components/Breadcrumb.svelte';
	import Alert from '../../../../components/Alert.svelte';
	import Nav from '../../../../components/Nav.svelte';

	let placeDisplayed: Place;
	placeDisplayed = new Place(0, new Date(), '', '', '', '', '', '', '', 1, '');
	let promise: Place;
	let placeId: string = '';
	let modeEditor: string;

	// DOM Elements
	let modal: HTMLElement | null;
	let message: string;

	onMount(() => {
		// Set editor to update mode
		modeEditor = 'Create';

		// Get Modal element
		modal = document.getElementById('popup');

		// Get query string from URL
		const urlParams = new URLSearchParams(window.location.search);
		placeId = urlParams.get('id') || '';
		modeEditor = urlParams.get('mode') || 'Create';
		// Load place from url param id if exists
		if (placeId != '') {
			placeDisplayed.id = parseInt(placeId);
			getPlace();
		}
	});

	/**
	 * Load place by id
	 */
	async function getPlace() {
		promise = await getPlaceById(placeDisplayed.id);

		if (Object.keys(promise).length == 0) {
			message = 'Place with id : ' + placeDisplayed.id + ', not found ! Sorry';
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
			message = 'Place with id : ' + placeDisplayed.id + ', found !';
		}
	}

	/**
	 * Create or Update place
	 */
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

		if (validatePlace(place)) {
			let response = await savePlace(place);
			if (modeEditor == 'Update' && response == 200) {
				message = 'Place ' + placeDisplayed.id + ' saved successfully ! Status : ' + response;
			} else {
				message = 'Error saving data !';
			}
		} else {
			message = 'Error, missing required data !';
		}
	}

	/**
	 * Delete place
	 */
	async function handleClickDeletePlace() {
		let response = await deletePlace(placeDisplayed.id);
		if (response == 200) {
			message = 'Place with id : ' + placeDisplayed.id + ' successfully deleted !';
		} else {
			message = 'Error when deleting place with id : ' + placeDisplayed.id + " ! Status : " + response;
		}
	}

	/**
	 * Reset form
	*/
	function resetForm() {
		placeDisplayed = new Place(0, new Date(), '', '', '', '', '', '', '', 1, '');
		message = "Empty form !";
	}

</script>

<Nav />
<div class="container">
	<Breadcrumb />
	<div id="controls" class="row">
		<div class="col-lg-2 col-md-6 mb-2">
			<label for="editor-mode" class="form-label">Select editor mode</label>
			<select class="form-select" aria-label="editor mode" bind:value={modeEditor} on:change={resetForm}>
				<option selected value="Update">Update</option>
				<option value="Create">Create</option>
				<option value="Delete">Delete</option>
			</select>
		</div>
		{#if modeEditor == 'Update' || modeEditor == 'Delete'}
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
				<button id="place-id-submit" type="submit" class="col-1 btn btn-primary" on:click={getPlace}
					>Get place</button
				>
			</div>
		{/if}
		<div id="reset-form" class="col-lg-2 col-md-6 mb-2">
			<button class="btn btn-warning" on:click={resetForm}>Reset</button>
		</div>
	</div>

	<div id="place-form" class="container-fluid mt-2">
		<div class="row">
			<div class="col-lg-3 col-sm-12 mb-3">
				<label for="name" class="form-label">Name</label>
				<input bind:value={placeDisplayed.name} type="text" class="form-control" id="name" />
			</div>
			<div class="col-lg-3 col-sm-12 mb-3">
				<label for="country" class="form-label">Country</label>
				<input bind:value={placeDisplayed.country} type="text" class="form-control" id="country" />
			</div>
			<div class="col-lg-3 col-sm-12 mb-3">
				<label for="city" class="form-label">City</label>
				<input bind:value={placeDisplayed.city} type="text" class="form-control" id="city" />
			</div>
		</div>
		<div class="row">
			<div class="col-lg-9 col-sm-12 mb-3">
				<label for="address" class="form-label">Address</label>
				<input bind:value={placeDisplayed.address} type="text" class="form-control" id="address" />
			</div>
		</div>

		<div class="row">
			<div class="col-lg-2 col-sm-12 mb-3">
				<label for="phone" class="form-label">Phone number</label>
				<input
					bind:value={placeDisplayed.phone_number}
					type="text"
					class="form-control"
					id="phone"
				/>
			</div>
			<div class="col-lg-3 col-sm-12 mb-3">
				<label for="email" class="form-label">Email</label>
				<input bind:value={placeDisplayed.email} type="text" class="form-control" id="email" />
			</div>
			<div class="col-lg-1 col-sm-12 mb-3">
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
			<div class="col-md-9 mb-3">
				<label for="description" class="form-label">Description</label>
				<textarea
					bind:value={placeDisplayed.description}
					class="form-control"
					id="description"
					rows="5"
				/>
			</div>
		</div>
		<div id="images" class="row">
			<div class="col-lg-5 col-md-12">
				<label for="image" class="form-label">Image url or string format Base 64</label>
				<textarea bind:value={placeDisplayed.image} class="form-control" id="image" rows="12" />
			</div>
			<div class="col-lg-4 col-md-12 preview-container">
				{#if !/(http(s?)):\/\//i.test(placeDisplayed.image)}
					<img
						class="img-fluid"
						src="data:image/jpg;base64, {placeDisplayed.image}"
						alt="preview"
						title="preview"
					/>
				{:else}
					<img class="img-fluid" src={placeDisplayed.image} alt="preview" title="preview" />
				{/if}
			</div>
		</div>
		<div class="row form-buttons">
			<button
				type="submit"
				class="col-lg-2 col-md-6 mt-3 btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#popup">{modeEditor} place</button
			>
		</div>
	</div>

	<!-- Modal Create / Update / Delete -->
	<div id="popup" class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{modeEditor} place</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<p>{modeEditor} these data ?</p>
					<ul>
						<li>ID : {placeDisplayed.id}</li>
						<li>NAME : {placeDisplayed.name}</li>
						<li>COUNTRY : {placeDisplayed.country}</li>
						<li>CITY : {placeDisplayed.city}</li>
					</ul>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					{#if modeEditor == 'Create' || modeEditor == 'Update'}
					<button
						type="button"
						class="btn btn-primary"
						data-bs-dismiss="modal"
						on:click={handleClickSavePlace}>Save</button
					>
					{:else}
					<button
						type="button"
						class="btn btn-danger"
						data-bs-dismiss="modal"
						on:click={handleClickDeletePlace}>Delete</button
					>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Alerte message -->
	<Alert {message} />
</div>

<style>
	.container {
		min-height: calc(100vh - 100px);
		margin-top: 80px;
	}

	label {
		margin-left: 5px;
		font-weight: bold;
	}

	#controls {
		margin-left: 3px;
	}

	#reset-form {
		display: flex;
		flex-direction: column;
		justify-content: end;
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
		padding: 5px;
		margin-top: 33px;
		min-height: 300px;
		height: 100%;
		border: 1px solid rgba(158, 158, 158, 0.35);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.preview-container > img {
		height: 100%;
	}

	.form-buttons {
		display: flex;
		align-items: center;
		justify-content: start;
		margin-top: 10px;
		margin-left: 3px;
	}
</style>
