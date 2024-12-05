import { type AppUser } from '../../classes/AppUser.js';
import { BACKEND_API_URL } from '../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_API_URL + "user/id?firstId=1&limit=12";
    let appUsers : AppUser[] = [];

	const res = await fetch(url);
	appUsers = await res.json();

	return { appUsers };
}