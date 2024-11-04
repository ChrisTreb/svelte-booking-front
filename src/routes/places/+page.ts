import { type Place } from '../../classes/Place.js';
import { ALT_PLACES_IMG, BACKEND_API_URL, getRandElFromArr } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_API_URL + "place/id?firstId=1&limit=3";
    let places : Place[] = [];

	const res = await fetch(url);
	places = await res.json();

	places.forEach(place => {
		if (place.image == "" || place.image == null) {
			place.image = getRandElFromArr(ALT_PLACES_IMG);
		} else {
			place.image = "data:image/png;base64," +  place.image;
		}
	});

	return { places };
}