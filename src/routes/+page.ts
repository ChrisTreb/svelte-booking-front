import { BACKEND_URL } from '../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_URL + "place/countries";
    let countries : string[] = [];

	const res = await fetch(url);
	countries = await res.json();

	countries.sort();

	return { countries };
}