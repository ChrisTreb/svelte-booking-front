export class Room {
    id! : number;
    place_id! : number;
    created_at! : Date;
    room_number! : number;
    room_type! : string;
    price_per_night! : number;
    guests_capacity! : number;
    is_available! :  boolean;
    image! : string;

    constructor(
        id : number,
        place_id: number,
        created_at : Date,
        room_number : number,
        room_type : string,
        price_per_night : number,
        guests_capacity : number,
        is_available :  boolean,
        image : string
    ) {
        this.id = id;
        this.place_id = place_id;
        this.created_at = created_at;
        this.room_number = room_number;
        this.room_type = room_type;
        this.price_per_night = price_per_night;
        this.guests_capacity = guests_capacity;
        this.is_available = is_available;
        this.image = image;
    }
}