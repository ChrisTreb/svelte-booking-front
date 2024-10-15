import { BACKEND_URL } from "../const/url";
import type { Place } from "../classes/Place";

/** 
 * Get cities corresponding to a specific country 
*/
export async function getCitiesByCountry(country: string) {

    const url: string = BACKEND_URL + "place/country/cities/" + country;
    let cities: string[] = [];

    const res = await fetch(url);

    if (res.ok) {
        cities = await res.json();
        //console.log(cities);
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }

    return cities;
}

/**
 * Get place by Id
 */
export async function getPlaceById(id: number) {

    const url: string = BACKEND_URL + "place/" + id;
    let place: Place = {} as Place;

    const res = await fetch(url);

    if (res.ok) {
        place = await res.json();
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }
    return place;
}

/**
 * Save place after edition
 */
export async function savePlace(place: Place) {

    const url: string = BACKEND_URL + "save-place";

    // Awaiting fetch which contains method, 
    // headers and content-type and body 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(place)
    });

    // Awaiting response.json() 
    const resData: object = await response.json();

    // Return response data  
    return resData;
}

/**
 * Delete place by id
 */
export async function deletePlace(id : number) {

    const url: string = BACKEND_URL + "delete-place/" + id;

    // Awaiting fetch which contains method, 
    // headers and content-type
    const response = await fetch(url, { method: 'DELETE' });

    // Awaiting response.json() 
    const resData: string = await response.text();

    // Return response data  
    return resData;
}