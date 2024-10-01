import { type AppUser } from '../../interfaces/AppUser.js';
import { BACKEND_URL } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_URL + "user";
    let appUsers : AppUser[] = [];

	const res = await fetch(url);
	appUsers = await res.json();

	return { appUsers };
}