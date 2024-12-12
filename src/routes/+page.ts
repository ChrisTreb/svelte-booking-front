import { BACKEND_API_URL } from '../const/url.js';
import type { Place } from '../classes/Place.js';
import { setRandPlaceImg } from '../dao/placeDao.js';

function getRandomInt(max : number) {
	return Math.floor(Math.random() * max);
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

	// Fetch some places, home page
	const rand = getRandomInt(500);
	const urlPlaces = BACKEND_API_URL + "place/id?firstId=" + rand + "&limit=6";
	let places : Place[] = [];

	const resPlaces = await fetch(urlPlaces);
	places = await resPlaces.json();

	places.forEach((place) => {
		setRandPlaceImg(place);
	})

	return { places };
}