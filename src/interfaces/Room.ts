export interface Place {
    id : number;
    place_id : number;
    created_at : Date;
    room_number: number;
    room_type: string;
    price_per_night : number;
    guests_capacity : number;
    is_available :  boolean;
    image : string;
}