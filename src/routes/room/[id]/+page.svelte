<script lang="ts">
	import Nav from '../../../components/Nav.svelte';
	import type { Room } from '../../../classes/Room';
	import { getPlaceById } from '../../../dao/placeDao';
	import { EMOJI_STAR } from '../../../const/emoji';
	import BtnPageTop from '../../../components/BtnPageTop.svelte';
		
	/** @type {import('./$types').PageData} */
	export let data: any;

	let room: Room = data.room;
	let placeId: number = room.place_id;

</script>

<Nav />
<div class="container">
	<div class="row">
		<div class="col-md-4 col-sm-12 place-col">
			<h2>Your destination</h2>
			{#await getPlaceById(room.place_id) then place}
				<div class="place-img" style="background-image: url('{place.image}');">
					<h6 class="rating">{place.rating} {EMOJI_STAR}</h6>
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
			<h2>Map location</h2>
			{#await import('../../../components/Map.svelte') then { default: Map }}
				<Map {placeId}/>
				<div id="map" style="width: 100%; height: 80vh; min-height: 80vh; z-index: 100;"></div>
			{/await}
		</div>
	</div>
</div>
<BtnPageTop />

<style>
	.container {
		margin-top: 80px;
		min-height: 80vh;
	}

	/* Place*/
	.place-img,
	.room-img {
		height: 40vh;
		background-position: center;
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	h2 {
		margin: 10px 0;
		padding: 10px;
		font-weight: bold;
		font-size: 1.6em;
		background-color: rgb(240, 223, 198);
		border-radius: 5px;
	}

	.place-img > h6,
	.room-img > h6 {
		text-align: center;
		width: 60px;
		color: white;
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
</style>
