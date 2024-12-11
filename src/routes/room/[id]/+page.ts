import { error } from "@sveltejs/kit";
import type { Room } from "../../../classes/Room";
import { BACKEND_API_URL } from "../../../const/url";
import { setRoomImg } from "../../../dao/RoomDao";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const url = BACKEND_API_URL + "room/" + params.id;

	const res = await fetch(url);
	const room : Room = await res.json();

	if (room) {
        setRoomImg(room);
		return { room };
	} else {
        error(404, 'Not found');
    }	
}