<script defer lang="ts">
	import { onMount } from 'svelte';

	import {
		getRoomById,
		saveRoom,
		deleteRoom,
		validateRoom,
		getPlaceRooms
	} from '../../dao/RoomDao';
	import { Room } from '../../classes/Room';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	import Alert from '../../components/Alert.svelte';
	import Nav from '../../components/Nav.svelte';
	import { getPlaceById } from '../../dao/placeDao';
	import { ALT_PLACES_IMG } from '../../const/url';
		
	let roomDisplayed: Room;
	roomDisplayed = new Room(0, 0, new Date(), 0, '', 0, 0, false, '', '');
	let promise: Room;
	let roomId: string = '';
	let modeEditor: string;
	let isAvailable: number = 0;

	// DOM Elements
	let modal: HTMLElement | null;
	let message: string;
	let info: HTMLElement;

	onMount(() => {
		// Set editor to update mode
		modeEditor = 'Create';

		// Modal element
		modal = document.getElementById('popup');

		// Get query string from URL
		const urlParams = new URLSearchParams(window.location.search);
		roomId = urlParams.get('id') || '';
		modeEditor = urlParams.get('mode') || 'Create';
		// Load room from url param id if exists
		if (roomId != '') {
			roomDisplayed.id = parseInt(roomId);
			getRoom();
		}
	});

	/**
	 * Load room by id
	 */
	async function getRoom() {
		promise = await getRoomById(roomDisplayed.id);

		if (Object.keys(promise).length == 0) {
			message = 'Room with id : ' + roomDisplayed.id + ', not found ! Sorry';
			roomDisplayed = new Room(0, 0, new Date(), 0, '', 0, 0, false, '', '');
			hideInfo();
		} else {
			roomDisplayed = new Room(
				promise.id,
				promise.place_id,
				promise.created_at,
				promise.room_number,
				promise.room_type,
				promise.price_per_night,
				promise.guests_capacity,
				promise.is_available,
				promise.image,
				promise.description
			);
			message = 'Room id : ' + roomDisplayed.id + ', found !';
		}
	}

	/**
	 * Create or Update room
	 */
	async function handleClickSaveRoom() {
		let room = new Room(
			roomDisplayed.id,
			roomDisplayed.place_id,
			roomDisplayed.created_at,
			roomDisplayed.room_number,
			roomDisplayed.room_type,
			roomDisplayed.price_per_night,
			roomDisplayed.guests_capacity,
			roomDisplayed.is_available,
			roomDisplayed.image,
			roomDisplayed.description
		);

		if (validateRoom(room)) {
			let response = await saveRoom(room);
			if ((modeEditor == 'Update' || modeEditor == 'Create') && response == 200) {
				message = 'Room saved successfully !';
			} else {
				message = 'Error saving data !';
			}
		} else {
			message = 'Error, missing required data !';
		}
	}

	/**
	 * Delete room
	 */
	async function handleClickDeleteRoom() {
		let response = await deleteRoom(roomDisplayed.id);
		if (response == 200) {
			message = 'Room with id : ' + roomDisplayed.id + ' successfully deleted !';
		} else {
			message =
				'Error deleting room id : ' + roomDisplayed.id + ' !';
		}
	}

	/**
	 * Reset form
	 */
	function resetForm() {
		hideInfo();
		roomDisplayed = new Room(0, 0, new Date(), 0, '', 0, 0, false, '', '');
		message = 'Empty form !';
	}

	/**
	 * Convert form values to boolean
	 */
	function handleIsAvailableValue() {
		if (isAvailable == 0) {
			roomDisplayed.is_available = false;
		} else if (isAvailable == 1) {
			roomDisplayed.is_available = true;
		}
	}

	/**
	 * Place info display
	 */
	function showInfo() {
		if(roomDisplayed.place_id > 0) {
			info.style.transform = "translateX(0)";
			info.classList.replace("close", "open");
		} else {
			hideInfo();
		}
	}

	function hideInfo() {
		if (info.classList.contains("open")) {
			info.style.transform = "translateX(-100vw)";
			info.classList.replace("open", "close");
		}
	}
</script>

<Nav />
<div class="container">
	<Breadcrumb />
	<div class="row">
		<div class="col-md-12 col-sm-12">
			<div id="controls" class="row">
				<div class="col-lg-2 col-md-6 mb-2">
					<label for="editor-mode" class="form-label">Editor mode</label>
					<select
						class="form-select"
						aria-label="editor mode"
						bind:value={modeEditor}
						on:change={resetForm}
					>
						<option selected value="Update">Update</option>
						<option value="Create">Create</option>
						<option value="Delete">Delete</option>
					</select>
				</div>
				{#if modeEditor == 'Update' || modeEditor == 'Delete'}
					<div class="col-lg-2 col-md-6 mb-2">
						<label for="room-id" class="form-label">Room id</label>
						<input
							bind:value={roomDisplayed.id}
							type="number"
							min="1"
							max="9999"
							class="form-control"
							id="room-id"
						/>
					</div>
					<div class="col-lg-2 col-md-6 room-id-form-button mb-2">
						<button
							id="room-id-submit"
							type="submit"
							class="col-1 btn btn-primary"
							on:click={getRoom}>Get room</button
						>
					</div>
				{/if}
				<div id="reset-form" class="col-lg-2 col-md-6 mb-2">
					<button class="btn btn-warning" on:click={resetForm}>Reset</button>
				</div>
			</div>
			<div id="form-container">
				<div id="room-form" class="container-fluid mt-2">
					<div class="row">
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="place-id" class="form-label"
								>Place id <span class="required">*</span></label
							>
							<input
								bind:value={roomDisplayed.place_id}
								type="number"
								min="0"
								class="form-control"
								id="place-id"
							/>
						</div>
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="room-number" class="form-label"
								>Room number <span class="required">*</span></label
							>
							<input
								bind:value={roomDisplayed.room_number}
								type="number"
								min="0"
								max="999"
								class="form-control"
								id="room-number"
							/>
						</div>
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="room-type" class="form-label"
								>Room type <span class="required">*</span></label
							>
							<select
								class="form-select"
								aria-label="room type"
								bind:value={roomDisplayed.room_type}
							>
								<option value="solo">Solo - 1</option>
								<option value="duo">Duo - 2</option>
								<option value="trio">Trio - 3</option>
								<option value="quatro">Quatro - 4</option>
								<option value="group">Group - 4+</option>
							</select>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="price" class="form-label"
								>Price per night <span class="required">*</span></label
							>
							<input
								bind:value={roomDisplayed.price_per_night}
								type="number"
								min="0"
								class="form-control"
								id="price"
							/>
						</div>
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="available" class="form-label"
								>Available <span class="required">*</span></label
							>
							<select
								bind:value={isAvailable}
								on:change={handleIsAvailableValue}
								class="form-select"
								id="available"
							>
								<option value="0" selected>No</option>
								<option value="1">Yes</option>
							</select>
						</div>
						<div class="col-lg-4 col-sm-12 mb-3">
							<label for="guests" class="form-label"
								>Guests capacity <span class="required">*</span></label
							>
							<input
								bind:value={roomDisplayed.guests_capacity}
								type="number"
								class="form-control"
								id="guests"
								min="1"
							/>
						</div>
					</div>

					<div class="row"></div>
					<div class="row">
						<div class="col-md-12 mb-3">
							<label for="description" class="form-label"
								>Description <span class="required">*</span></label
							>
							<textarea
								bind:value={roomDisplayed.description}
								class="form-control"
								id="description"
								rows="5"
							/>
						</div>
					</div>
					<div id="images" class="row">
						<div class="col-lg-6 col-md-12">
							<label for="image" class="form-label">Image url, base 64</label>
							<textarea
								bind:value={roomDisplayed.image}
								class="form-control"
								id="image"
								rows="12"
							/>
						</div>
						<div class="col-lg-6 col-md-12 preview-container">
							{#if !/(http(s?)):\/\//i.test(roomDisplayed.image)}
								<img
									class="img-fluid"
									src="data:image/jpg;base64, {roomDisplayed.image}"
									alt="preview"
									title="preview"
								/>
							{:else}
								<img class="img-fluid" src={roomDisplayed.image} alt="preview" title="preview" />
							{/if}
						</div>
					</div>
					<div class="row form-buttons">
						<button
							id="submit-form"
							type="submit"
							class="col-lg-2 col-md-6 mt-3 btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#popup">{modeEditor} room</button
						>
					</div>
				</div>
			</div>

			<!-- Modal Create / Update / Delete -->
			<div id="popup" class="modal" tabindex="-1">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">{modeEditor} room</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<p>{modeEditor} these data ?</p>
							<ul>
								<li>Place id : {roomDisplayed.place_id}</li>
								<li>Room number : {roomDisplayed.room_number}</li>
								<li>Room type : {roomDisplayed.room_type}</li>
								<li>Guests capacity : {roomDisplayed.guests_capacity}</li>
								<li>Available : {roomDisplayed.is_available}</li>
							</ul>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							{#if modeEditor == 'Create' || modeEditor == 'Update'}
								<button
									type="button"
									class="btn btn-primary"
									data-bs-dismiss="modal"
									on:click={handleClickSaveRoom}>Save</button
								>
							{:else}
								<button
									type="button"
									class="btn btn-danger"
									data-bs-dismiss="modal"
									on:click={handleClickDeleteRoom}>Delete</button
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Alerte message -->
		<Alert {message} />
	</div>
</div>

<div id="info" class="close" bind:this={info}>
	<button id="btn-close-info" class="btn" on:click={hideInfo}><i class="fa-solid fa-xmark"></i></button>
	<div class="row">
		<div class="col-md-4 col-sm-12">
			{#if roomDisplayed.place_id > 0}
				{#await getPlaceById(roomDisplayed.place_id) then place}
					<div class="col-12 mb-2">
						<div class="place-img mb-2" style="background-image: url('{ALT_PLACES_IMG[0]}');">
							<h5 class="place-title">ID : {place.id} - {place.name}</h5>
						</div>
						<div class="place-body">
							<p><b>Country&nbsp;&nbsp;&nbsp;</b>{place.country}</p>
							<p><b>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> {place.city}</p>
							<p class="place-text mt-1">
								{place.description}
							</p>
						</div>
					</div>
				{/await}
			{/if}
		</div>
		<div class="col-md-8">
			<div class="room-infos row">
				{#if roomDisplayed.place_id > 0}
					{#await getPlaceRooms(roomDisplayed.place_id) then rooms}
						{#each rooms as room}
							<div class="col-md-3 col-sm-12">
								<div class="room-card-info">
									<p>Id : {room.id}</p>
									<p>Number : {room.room_number}</p>
									<p>Price : {room.price_per_night} €</p>
									<p>Type : {room.room_type}</p>
									<p>Capacity : {room.guests_capacity} person(s)</p>
								</div>
							</div>
						{/each}
					{/await}
				{/if}
			</div>
		</div>
	</div>
	<div id="toggle-info">
		<button id="btn-toggle-info" class="btn" on:click={showInfo}><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
	</div>
</div>

<style>
	.container {
		min-height: calc(100vh - 100px);
		margin-top: 80px;
	}

	#form-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#room-form {
		width: 50%;
	}

	label {
		margin-left: 5px;
		font-weight: bold;
	}

	#controls {
		display: flex;
		justify-content: center;
		margin-left: 3px;
		padding-bottom: 20px;
	}

	#reset-form {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	.room-id-form-button {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}

	#room-id-submit {
		height: 40px;
		width: 100%;
	}

	.preview-container {
		padding: 5px;
		margin-top: 32px;
		min-height: 300px;
		border: 1px solid rgba(158, 158, 158, 0.35);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.form-buttons {
		display: flex;
		align-items: center;
		justify-content: start;
		margin-top: 10px;
		margin-left: 3px;
	}

	#submit-form {
		width: auto;
	}

	.required {
		color: red;
	}

	/* Place */
	#toggle-info {
		z-index: 100;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		width: 50px;
		height: 50px;
		position: absolute;
		bottom: 0;
		right: -50px;
		border: 1px solid black;
		border-radius: 0 5px 0 0;
	}

	#btn-toggle-info {
		font-size: 20px;
	}

	#btn-close-info {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 15px;
		left: 15px;
		width: 40px;
		height: 40px;
		border: 1px solid black;
		border-radius: 20px;
		font-size: 20px;
		transition: 0.5s;
	}

	#btn-close-info:hover {
		transform: scale(0.95);
	}

	#info {
		z-index: 100;
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 45vh;
		background-color: white;
		padding: 15px 80px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		transform: translateX(-100vw);
		transition: 0.5s;
	}

	.room-infos {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		overflow-y: scroll;
	}

	.place-img {
		width: 100%;
		height: 200px;
		background-size: cover;
		background-position: center;
		background-image: url();
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.place-title {
		font-size: 16px;
		font-weight: bold;
		color: white;
		padding: 10px;
		background-color: rgba(51, 51, 51, 0.7);
	}

	.place-body > p {
		font-size: 14px;
		margin-bottom: 5px;
	}

	.place-text {
		width: 100%;
		height: auto;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		overflow: hidden;
	}

	/* Room card info */
	.room-card-info {
		padding: 10px;
		border: 1px solid rgb(151, 151, 151);
		border-radius: 5px;
		background-color: rgb(58, 58, 58);
	}

	.room-card-info > p {
		color: white;
		margin: 5px;
	}

	/* Media queries */
	@media (max-width: 768px) {
		#room-form {
			width: 100%;
		}

		#info {
			display: none;
		}
	}
</style>
