import { type Place } from '../../interfaces/Place.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = "http://192.168.1.33:8080/api/place";
    let places : Place[] = [];

	const res = await fetch(url);
	places = await res.json();

	return { places };
}