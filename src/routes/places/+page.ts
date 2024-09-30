import { type Place } from '../../interfaces/Place.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = "https://slippery-zebra-39.telebit.io/places";
    let places : Place[] = [];

	const res = await fetch(url);
	const data = await res.json();

    places = data._embedded.places;

	return { places };
}