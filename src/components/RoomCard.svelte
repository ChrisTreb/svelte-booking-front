<script>
	import { Room } from "../classes/Room";
	import { setRandRoomImg } from "../dao/RoomDao";

    /** @type { Room } */
    export let room;

    setRandRoomImg(room);
</script>

<div class="col-room col-lg-12 col-md-12 col-sm-12">
    <div class="card">
        <div class="room-img" style="background-image: url({room.image});">
            <h5 class="price">{room.price_per_night}€</h5>
            <h5 class="card-title">Room {room.room_type}</h5>
        </div>
        <div class="card-body">
            <p>Capacity : {room.guests_capacity} guest(s)</p>
            <a href="/room/{room.id}" class="btn btn-primary">Reserve</a>
        </div>
    </div>
</div>

<style>
    .col-room {
        margin-bottom: 20px;
    }

    .room-img {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p {
        margin: 0;
    }

    .price {
        width: 50px;
        height: 50px;
        margin: 10px;
        font-size: 16px;
        font-weight: bold;
        background-color: rgb(255, 226, 145);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
    }

    .card-title {
        background-color: rgba(0, 0, 0, 0.700);
        margin-bottom: 0;
        padding: 10px;
        color: white;
    }

    .btn {
        margin-top: 20px;
    }
</style>