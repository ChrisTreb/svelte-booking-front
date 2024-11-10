<script>
	import { Room } from "../classes/Room";
	import { setRandRoomImg } from "../dao/RoomDao";

    /** @type { Room } */
    export let room;

    setRandRoomImg(room);
</script>

<div class="col-room col-lg-12 col-md-12 col-sm-12">
    <div class="card">
        <img src={room.image} title="place" alt="place"/>
        <div class="card-body">
            <h5 class="card-title">Room {room.room_type}</h5>
            <p>Capacity : {room.guests_capacity} guest(s)</p>
            <p>Price per night : {room.price_per_night} €</p>
            <a href="/room/{room.id}" class="btn btn-primary">Reserve</a>
        </div>
    </div>
</div>

<style>
    .col-room {
        margin-bottom: 20px;
    }

    p {
        margin: 0;
    }

    .btn {
        margin-top: 20px;
    }
</style>