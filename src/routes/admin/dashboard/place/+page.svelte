<script defer lang="ts">
	/** @type {import('./$types').PageData} */
	import { getPlaceById, savePlace } from '../../../../dao/placeDao';
	import { Place } from '../../../../classes/Place';

	let placeId = 1;
	let placeCreatedAt = new Date();
	let placeName = '';
	let placeCountry = '';
	let placeCity = '';
	let placeAddress = '';
	let placePhoneNumber = '';
	let placeEmail = '';
	let placeDescription = '';
	let placeImage = '';
	let placeRating = 1;

	let placePromise;

	async function handleClickGetPlace() {
		placePromise = await getPlaceById(placeId);

		console.log(placePromise);

		placeName = placePromise.name;
		placeCreatedAt = placePromise.created_at;
		placeCountry = placePromise.country;
		placeCity = placePromise.city;
		placeAddress = placePromise.address;
		placePhoneNumber = placePromise.phone_number;
		placeEmail = placePromise.email;
		placeDescription = placePromise.description;
		placeImage = placePromise.image;
		placeRating = placePromise.rating;
	}

	async function handleClickSavePlace() {
		let place = new Place();
		place.id = placeId;
		place.name = placeName;
		place.created_at = placeCreatedAt;
		place.address = placeAddress;
		place.country = placeCountry;
		place.city = placeCity;
		place.phone_number = placePhoneNumber;
		place.email = placeEmail;
		place.description = placeDescription;
		place.image = placeImage;
		place.rating = placeRating;

		console.log('Place to save : \n' + JSON.stringify(place));

		let response = await savePlace(place);

		console.log(JSON.stringify(response));
	}
</script>

<div class="container">
	<h1>Modify places</h1>
	<div class="row">
		<div class="col-2">
			<label for="place-id" class="form-label">Select place by id</label>
			<input
				bind:value={placeId}
				type="number"
				min="1"
				max="9999"
				class="form-control"
				id="place-id"
			/>
		</div>
		<div class="col-2 place-id-form-button">
			<button
				id="place-id-submit"
				type="submit"
				class="col-1 btn btn-primary"
				on:click={handleClickGetPlace}>Get place</button
			>
		</div>
	</div>

	<div class="container-fluid mt-5">
		<div class="row">
			<div class="col-6 mb-3">
				<label for="name" class="form-label">Name</label>
				<input bind:value={placeName} type="text" class="form-control" id="name" />
			</div>
			<div class="col-6 mb-3">
				<label for="country" class="form-label">Country</label>
				<input bind:value={placeCountry} type="text" class="form-control" id="country" />
			</div>
		</div>
		<div class="row">
			<div class="col-6 mb-3">
				<label for="city" class="form-label">City</label>
				<input bind:value={placeCity} type="text" class="form-control" id="city" />
			</div>
			<div class=" col-6 mb-3">
				<label for="address" class="form-label">Address</label>
				<input bind:value={placeAddress} type="text" class="form-control" id="address" />
			</div>
		</div>

		<div class="row">
			<div class="col-4 mb-3">
				<label for="phone" class="form-label">Phone number</label>
				<input bind:value={placePhoneNumber} type="text" class="form-control" id="phone" />
			</div>
			<div class=" col-4 mb-3">
				<label for="email" class="form-label">Email</label>
				<input bind:value={placeEmail} type="text" class="form-control" id="email" />
			</div>
			<div class=" col-4 mb-3">
				<label for="rating" class="form-label">Rating</label>
				<input
					bind:value={placeRating}
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
			<textarea bind:value={placeDescription} class="form-control" id="description" rows="5" />
		</div>
		<div class="mb-3">
			<label for="image" class="form-label">Image string format Base 64</label>
			<textarea bind:value={placeImage} class="form-control" id="image" rows="5" />
		</div>
	</div>
	<button id="submit" type="submit" class="btn btn-primary" on:click={handleClickSavePlace}
		>Update place</button
	>
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
		width: 80%;
	}
</style>
