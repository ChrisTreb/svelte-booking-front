<script lang="ts">
	import Nav from "../../../components/Nav.svelte";
	import type { Room } from "../../../classes/Room";
	import { getPlaceById } from "../../../dao/placeDao";
	
	/** @type {import('./$types').PageData} */
	export let data: any;

	let room: Room = data.room;
</script>

<Nav />
<div class="container">
	<div class="row">
		<div class="col-md-4 col-sm-12 place-col">
			{#await getPlaceById(room.place_id) then place}
				{place}
			{/await}
		</div>
		<div class="col-md-4 col-sm-12 room-col">
			{room}
		</div>
		<div class="col-md-4 col-sm-12 reservation-col"></div>
	</div>
</div>

<style>
    .container {
		margin-top: 80px;
		min-height: 90vh;
	}
</style>