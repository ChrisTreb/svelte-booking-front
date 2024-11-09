import { Room } from "../classes/Room";
import { BACKEND_API_URL } from "../const/url";

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
 * Get rooms linked to a place id
 * @param id
 * @returns rooms[ ]
 */
export async function getPlaceRooms(id: number) {
    const url: string = BACKEND_API_URL + "room/place/" + id;
    let rooms: Room[] = [];

    const res = await fetch(url);

    if (res.ok) {
        rooms = await res.json();
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
export async function getRoom(id: number) {
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