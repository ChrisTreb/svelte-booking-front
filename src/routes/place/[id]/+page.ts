import { type Place } from '../../../classes/Place.js';
import { ALT_PLACES_IMG, BACKEND_API_URL, getRandElFromArr } from '../../../const/url.js';

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const url = BACKEND_API_URL + "place/" + params.id;

	const res = await fetch(url);
	const place : Place = await res.json();

	if (place) {
        if (place.image == null) {
            place.image = getRandElFromArr(ALT_PLACES_IMG);
        } else {
            place.image = "data:image/png;base64, " + place.image;
        }


		return { place };
	} else {
        error(404, 'Not found');
    }	
}