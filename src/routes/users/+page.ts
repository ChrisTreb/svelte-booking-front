import { type AppUser } from '../../interfaces/AppUser.js';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = "http://192.168.1.33:8080/api/user";
    let appUsers : AppUser[] = [];

	const res = await fetch(url);
	appUsers = await res.json();

	return { appUsers };
}