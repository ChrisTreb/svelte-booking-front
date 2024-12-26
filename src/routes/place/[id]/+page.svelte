<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonPlaceEdit from '../../../components/ButtonPlaceEdit.svelte';
	import type { Room } from '../../../classes/Room';
	import { getPlaceRooms } from '../../../dao/RoomDao';
	import RoomCard from '../../../components/RoomCard.svelte';
	import Nav from '../../../components/Nav.svelte';
	import { displayRatingStars } from '../../../dao/placeDao';
	import Services from '../../../components/Services.svelte';
	
	/** @type {import('./$types').PageData} */
	export let data: any;
	export let placeId: number = data.place.id;
	export let place: any = data.place;
	export let rooms: Promise<Room[]>;

	onMount(() => {
		rooms = getPlaceRooms(placeId);
	});
</script>

<Nav />
<div class="container">
	<div class="main-row row">
		<div class="col-lg-8 col-md-12">
			<div class="place-content">
				<ButtonPlaceEdit {place} />
				<h1>{data.place.name}</h1>
				<div class="row">
					<div class="col-lg-8 col-md-12 img-container">
						<p class="rating">{displayRatingStars(place.rating)}</p>
						<img class="img-fluid img-place" src={data.place.image} alt="place" title={data.place.name} />
					</div>
					<div class="col-lg-4 col-md-12">
						<p><i class="fa-solid fa-flag"></i> {data.place.country}</p>
						<p><i class="fa-solid fa-city"></i> {data.place.city}</p>
						<p><i class="fa-solid fa-address-book"></i> {data.place.address}</p>
						<p><i class="fa-solid fa-phone"></i> {data.place.phone_number}</p>
						<p><i class="fa-solid fa-envelope"></i> {data.place.email}</p>
					</div>
				</div>
				<p>{data.place.description}</p>
				<Services />
			</div>
		</div>

		<div class="col-lg-4 col-md-12">
			<div class="place-rooms">
				<h3>Available rooms</h3>
				{#await rooms then rooms}
					{#if rooms}
						{#each rooms as room}
							<RoomCard {room} />
						{/each}
					{/if}
				{/await}
			</div>
		</div>
	</div>
</div>

<style>
	.main-row {
		min-height: 80vh;
	}

	.container {
		margin-top: 80px;
		min-height: 90vh;
	}

	.place-rooms, .place-content {
		position: relative;
		height: 100%;
		padding: 15px 25px;
	}

	.place-rooms {
		max-height: 90vh;
		overflow-y: scroll;
		scrollbar-width: thin;
	}

	.place-content {
		border: 1px solid rgba(158, 158, 158, 0.35);
		border-radius: 5px;
	}

	.img-container {
		margin-bottom: 20px;
	}

	.img-place {
		border-radius: 5px;
	}

	.rating {
		position: absolute;
		text-align: center;
		width: 80px;
		padding: 5px 10px;
		background-color: rgba(51, 51, 51, 0.7);
		border-radius: 5px;
		color: gold;
	}

	h1 {
		max-width: 90%;
	}

	p {
		margin-bottom: 5px;
	}
</style>
