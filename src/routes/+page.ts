import { BACKEND_API_URL, ALT_PLACES_IMG, getRandElFromArr } from '../const/url.js';
import type { Place } from '../classes/Place.js';

function getRandomInt(max : number) {
	return Math.floor(Math.random() * max);
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

	// Fetch countries list
    const urlCountries = BACKEND_API_URL + "place/countries";
    let countries : string[] = [];

	const resCountries = await fetch(urlCountries);
	countries = await resCountries.json();

	// Fetch some places, home page
	const rand = getRandomInt(500);
	const urlPlaces = BACKEND_API_URL + "place/id?firstId=" + rand + "&lastId=" + (rand + 2);
	let places : Place[] = [];

	const resPlaces = await fetch(urlPlaces);
	places = await resPlaces.json();

	places.forEach(place => {
		if (place.image == "" || place.image == null) {
			place.image = getRandElFromArr(ALT_PLACES_IMG);
		} else {
			place.image = "data:image/png;base64," +  place.image;
		}
	});

	return { countries, places };
}