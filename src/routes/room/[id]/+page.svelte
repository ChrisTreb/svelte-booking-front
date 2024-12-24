<script lang="ts">
	import Nav from '../../../components/Nav.svelte';
	import type { Room } from '../../../classes/Room';
	import { displayRatingStars, getPlaceById } from '../../../dao/placeDao';
	import BtnPageTop from '../../../components/BtnPageTop.svelte';
		
	/** @type {import('./$types').PageData} */
	export let data: any;

	let room: Room = data.room;
	let placeId: number = room.place_id;

</script>

<Nav />
<div class="container">
	<div class="row">
		<div id="booking" class="col-md-12 mt-3">
			<p>Great choice, <b>"book now"</b> to confirm your destination &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></p>
			<button id="btn-book" class="btn btn-primary"><i class="fa-solid fa-plane"></i> Book now</button>
		</div>
		<div class="col-md-4 col-sm-12 place-col">
			<h2>Your destination</h2>
			{#await getPlaceById(room.place_id) then place}
				<div class="place-img" style="background-image: url('{place.image}');">
					<h6 class="rating">{displayRatingStars(place.rating)}</h6>
					<h5>{place.name}</h5>
				</div>
				<div class="place-info">
					<p><b>Country&nbsp;&nbsp;&nbsp;</b>{place.country}</p>
					<p><b>City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> {place.city}</p>
					<p>
						<b>The place</b><br />{place.description}
					</p>
				</div>
			{/await}
		</div>
		<div class="col-md-4 col-sm-12 room-col">
			<h2>Your room</h2>
			<div class="room-img" style="background-image: url({room.image});">
				<h6>{room.price_per_night} €</h6>
				<h5>Room size : {room.room_type}</h5>
			</div>
			<div class="room-info">
				<p>
					<b>Guest(s) capacity</b><br />{room.guests_capacity} person(s)
				</p>
				<p>
					<b>The room</b><br />{room.description}
				</p>
			</div>
		</div>
		<div class="col-md-4 col-sm-12 reservation-col">
			<div class="map-container">
				<h2>Map location</h2>
				{#await import('../../../components/Map.svelte') then { default: Map }}
					<Map {placeId}/>
					<div id="map" style="width: 100%; height: 40vh; min-height: 40vh; z-index: 100;"></div>
				{/await}
			</div>
			<div class="services-container">
				<h2>Services</h2>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-wifi"></i></p>
					<p class="service-label">WIFI</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-tv"></i></p>
					<p class="service-label">TV HD</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-person-swimming"></i></p>
					<p class="service-label">Pool</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-square-parking"></i></p>
					<p class="service-label">Parking</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-martini-glass-citrus"></i></p>
					<p class="service-label">Bar</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-mug-hot"></i></p>
					<p class="service-label">Breakfast</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-utensils"></i></p>
					<p class="service-label">Restaurant</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-vault"></i></p>
					<p class="service-label">Vault</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-dog"></i></p>
					<p class="service-label">Pet</p>
				</div>
				<div class="service">
					<p class="service-icon"><i class="fa-solid fa-phone"></i></p>
					<p class="service-label">Phone</p>
				</div>
			</div>
		</div>
	</div>
</div>
<BtnPageTop />

<style>
	.container {
		margin-top: 80px;
		min-height: 80vh;
	}

	#booking {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 5px;
	}

	#btn-book {
		margin: 0;
	}

	/* Place*/
	.place-img,
	.room-img {
		height: 30vh;
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	h2 {
		width: 100%;
		margin: 10px 0;
		padding: 10px;
		font-weight: bold;
		font-size: 1.2em;
		background-color: rgb(240, 223, 198);
		border-radius: 5px;
	}

	.place-img > h6,
	.room-img > h6 {
		text-align: center;
		width: 80px;
		color: gold;
		font-weight: bold;
		padding: 5px;
		margin: 5px;
		background-color: rgba(51, 51, 51, 0.7);
		border-radius: 5px;
	}

	.place-img > h5,
	.room-img > h5 {
		padding: 10px;
		font-size: 20px;
		color: white;
		background-color: rgba(0, 0, 0, 0.7);
	}

	p {
		margin-bottom: 5px;
	}

	/* Services */
	.services-container {
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.service {
		width: 70px;
		height: 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #0B5ED7;
		color: white;
		border-radius: 5px;
		padding: 5px;
		margin: 5px;
	}

	.service-icon {
		font-size: 1.5em;
	}

	.service-label {
		font-weight: bold;
		font-size: 0.8em;
	}
</style>
