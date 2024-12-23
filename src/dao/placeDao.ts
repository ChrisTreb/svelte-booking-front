import { BACKEND_URL, BACKEND_API_URL, getRandElFromArr, ALT_PLACES_IMG, geocodingApiUrl } from "../const/url";
import type { Place } from "../classes/Place";
import { GEOCODING_API_KEY } from "../const/api_key";

/**
 * Set place random image
 */
export function setRandPlaceImg(place: Place) {
    if (place.image == null) {
        place.image = getRandElFromArr(ALT_PLACES_IMG);
    } else if (!/(http(s?)):\/\//i.test(place.image)) {
        place.image = "data:image/png;base64, " + place.image;
    }
    return { place };
}

/**
 * Get all countries available in DB
 */
export async function getCountries() {
    // Fetch countries list
    const urlCountries = BACKEND_API_URL + "place/countries";
    let countries : string[] = [];

	const resCountries = await fetch(urlCountries);
	countries = await resCountries.json();

    return countries;
}

/** 
 * Get cities corresponding to a specific country 
*/
export async function getCitiesByCountry(country: string) {

    let cities: string[] = [];

    if (country != "" && country != null && country != undefined) {
        const url: string = BACKEND_API_URL + "place/country/cities/" + country;
        const res = await fetch(url);

        if (res.ok) {
            cities = await res.json();
            // console.log(cities);
        } else {
            console.log("Error while calling endpoint : " + url + ", status : " + res.status);
        }
    }
    return cities;
}

/** 
 * Get available destinations from form filter
*/
export async function getPlaceFormResults(country : string, city : string) {
    let places: Place[] = [];
    let url: string = "";
    let res: Response;

    if (city != "" && city != null && city != undefined) {
        url = BACKEND_API_URL + "place/city/" + city;
        res = await fetch(url);

        if (res.ok) {
            places = await res.json();
        } else {
            console.log("Error while calling endpoint : " + url + ", status : " + res.status);
        }
    } else {
        url = BACKEND_API_URL + "place/country/" + country;
        res = await fetch(url);

        if (res.ok) {
            places = await res.json();
        } else {
            console.log("Error while calling endpoint : " + url + ", status : " + res.status);
        }
    }

    places.forEach((place) => {
        setRandPlaceImg(place);
    });
    
    return places;
}

/**
 * Get place by Id
 */
export async function getPlaceById(id: number) {

    const url: string = BACKEND_API_URL + "place/" + id;
    let place: Place = {} as Place;

    const res = await fetch(url);

    if (res.ok) {
        place = await res.json();
        
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }
    // Set an image if image is null
    setRandPlaceImg(place);

    return place;
}

/**
 * Save place after edition
 */
export async function savePlace(place: Place) {

    const url: string = BACKEND_API_URL + "save-place";

    // Awaiting fetch which contains method, 
    // headers and content-type and body 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(place)
    });

    // Awaiting response 
    const resData: Response = response;
    console.log(resData);
    // Return response data  
    return resData.status;
}

/**
 * Delete place by id
 */
export async function deletePlace(id : number) {

    const url: string = BACKEND_URL + "places/" + id;

    // Awaiting fetch which contains method, 
    // headers and content-type
    const response = await fetch(url, { method: 'DELETE' });

    // Awaiting response.json() 
    const resData: Response = response;
    console.log(resData);
    // Return response data  
    return resData.status;
}

/**
 * Get place GPS coordinates
 * @param room 
 */
export async function getPlaceCoordinates(placeId: number) {

	const place = await getPlaceById(placeId);
    let data;

	if (place) {
		const res: Response = await fetch(geocodingApiUrl 
            + place.city + "+" 
            + place.country 
            + "&key=" 
            + GEOCODING_API_KEY, {
            method: 'GET'
        });

        data = await res.json();
        // console.log(data.results[0].geometry);
        return data.results[0].geometry;
	}
}

/**
 * Display rating stars
 */
export function displayRatingStars(rating: number) {
    let stars: string = "";
    for (let i = 0; i < rating; i++) {
        stars += "★";
    }
    return stars;
}

/**
 * Validate place data
 */
export function validatePlace(place: Place) {
    let validation: boolean = true;

    if (place.name == null || place.name == undefined || place.name == "") {
        validation = false;
    }
    if (place.address == null || place.address == undefined || place.address == "") {
        validation = false;
    }
    if (place.city == null || place.city == undefined || place.city == "") {
        validation = false;
    }
    if (place.country == null || place.country == undefined || place.country == "") {
        validation = false;
    }
    if (place.description == null || place.description == undefined || place.description == "") {
        validation = false;
    }
    if (place.phone_number == null || place.phone_number == undefined || place.phone_number == "") {
        validation = false;
    }
    if (place.email == null || place.email == undefined || place.email == "") {
        validation = false;
    }
    return validation;
}