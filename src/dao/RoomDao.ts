import { Room } from "../classes/Room";
import { BACKEND_API_URL, BACKEND_URL } from "../const/url";

/**
 * Set room random image
 */
export function setRandRoomImg(room: Room) {
    if (room.image == null || room.image == "") {
        room.image = "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    } else if (!/(http(s?)):\/\//i.test(room.image)) {
        room.image = "data:image/png;base64, " + room.image;
    }
    return { room };
}

/**
 * Get rooms linked to a room id
 * @param id
 * @returns rooms[ ]
 */
export async function getPlaceRooms(id: number) {
    const url: string = BACKEND_API_URL + "room/place/" + id;
    let rooms: Room[] = [];

    const res = await fetch(url);

    if (res.ok) {
        rooms = await res.json();
        // Sort by city
        rooms.sort((a, b) => {
            if (a.price_per_night < b.price_per_night) return -1;
            return a.price_per_night > b.price_per_night ? 1 : 0;
        });
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }
    return rooms;
}

/**
 * Get specific room by id
 * @param id 
 * @returns Room
 */
export async function getRoomById(id: number) {
    const url: string = BACKEND_API_URL + "room/" + id;
    let room: Room = {} as Room;

    const res = await fetch(url);

    if (res.ok) {
        room = await res.json();
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }
    return room;
}

/**
 * Save room after edition
 */
export async function saveRoom(room: Room) {

    const url: string = BACKEND_API_URL + "save-room";

    // Awaiting fetch which contains method, 
    // headers and content-type and body 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(room)
    });

    // Awaiting response 
    const resData: Response = response;
    console.log(resData);
    // Return response data  
    return resData.status;
}

/**
 * Delete room by id
 */
export async function deleteRoom(id : number) {

    const url: string = BACKEND_URL + "rooms/" + id;

    // Awaiting fetch which contains method, 
    // headers and content-type
    const response = await fetch(url, { method: 'DELETE' });

    // Awaiting response.json() 
    const resData: Response = response;
    console.log(resData);
    // Return response data  
    return resData.status;
}

/**
 * Validate room data
 */
export function validateRoom(room: Room) {
    let validation: boolean = true;

    if (room.place_id <= 0 || room.place_id == undefined || room.place_id == null) {
        validation = false;
    }
    if (room.room_number <= 0 || room.room_number == undefined || room.room_number == null) {
        validation = false;
    }
    if (room.room_type == null || room.room_type == undefined || room.room_type == "") {
        validation = false;
    }
    if (room.price_per_night <= 0 || room.price_per_night == undefined || room.price_per_night == null) {
        validation = false;
    }
    if (room.guests_capacity <= 0 || room.guests_capacity == undefined || room.guests_capacity == null) {
        validation = false;
    }
    return validation;
}