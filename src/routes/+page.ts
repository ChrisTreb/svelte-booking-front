/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    const url = "http://192.168.1.33:8080/api/place/countries";
    let countries : string[] = [];

	const res = await fetch(url);
	countries = await res.json();

	countries.sort();

	return { countries };
}