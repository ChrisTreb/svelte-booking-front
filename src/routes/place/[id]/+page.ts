import { type Place } from '../../../classes/Place.js';
import { BACKEND_API_URL } from '../../../const/url.js';
import { setRandPlaceImg } from '../../../dao/placeDao.js';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    const url = BACKEND_API_URL + "place/" + params.id;

	const res = await fetch(url);
	const place : Place = await res.json();

	if (place) {
        setRandPlaceImg(place);
		return { place };
	} else {
        error(404, 'Not found');
    }	
}