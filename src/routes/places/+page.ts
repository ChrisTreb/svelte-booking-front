import { type Place } from '../../classes/Place.js';
import { BACKEND_API_URL } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

	const defaultCountry = "France";

    const url = BACKEND_API_URL + "place/country/" + defaultCountry;
    let places : Place[] = [];

	const res = await fetch(url);
	places = await res.json();
	
	// Sort by city
	places.sort((a, b) => {
		if (a.city < b.city) return -1;
		return a.city > b.city ? 1 : 0;
	});

	return { places };
}