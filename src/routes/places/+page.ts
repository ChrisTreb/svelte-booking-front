import { type Place } from '../../interfaces/Place.js';
import { BACKEND_URL } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_URL + "place";
    let places : Place[] = [];

	const res = await fetch(url);
	places = await res.json();

	return { places };
}