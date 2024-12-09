import { type Place } from '../../classes/Place.js';
import { BACKEND_API_URL } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

	const defaultCountry = "France";

    const url = BACKEND_API_URL + "place/country/" + defaultCountry;
    let places : Place[] = [];

	const res = await fetch(url);
	places = await res.json();

	return { places };
}