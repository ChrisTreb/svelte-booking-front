<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonPlaceEdit from '../../../components/ButtonPlaceEdit.svelte';
	import { EMOJI_STAR } from '../../../const/emoji';
	import type { Room } from '../../../classes/Room';
	import { getPlaceRooms } from '../../../dao/RoomDao';
	import RoomCard from '../../../components/RoomCard.svelte';
	import Nav from '../../../components/Nav.svelte';
	
	/** @type {import('./$types').PageData} */
	export let data: any;
	export let placeId: number = data.place.id;
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
				<ButtonPlaceEdit {placeId} />
				<h1>{data.place.name}</h1>
				<div class="row">
					<div class="col-lg-8 col-md-12 img-container">
						<img class="img-fluid img-place" src={data.place.image} alt="place" title={data.place.name} />
					</div>
					<div class="col-lg-4 col-md-12">
						<h5>Country</h5>
						<p>{data.place.country}</p>
						<h5>City</h5>
						<p>{data.place.city}</p>
						<h5>Rating</h5>
						<p>{data.place.rating} {EMOJI_STAR}</p>
					</div>
				</div>
				<h5>Address</h5>
				<p>{data.place.address}</p>
				<h5>Phone number</h5>
				<p>{data.place.phone_number}</p>
				<h5>Email</h5>
				<p>{data.place.email}</p>
				<h4>Description</h4>
				<p>{data.place.description}</p>
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

	h1 {
		max-width: 90%;
	}

	p {
		margin-bottom: 5px;
	}
</style>
