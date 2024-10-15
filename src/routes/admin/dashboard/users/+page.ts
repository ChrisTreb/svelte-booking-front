import { type AppUser } from '../../../../classes/AppUser.js';
import { BACKEND_URL } from '../../../../const/url.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = BACKEND_URL + "user/id?firstId=1&lastId=12";
    let appUsers : AppUser[] = [];

	const res = await fetch(url);
	appUsers = await res.json();

	return { appUsers };
}