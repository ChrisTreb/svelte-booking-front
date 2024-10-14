import { BACKEND_URL } from "../const/url";
import type { Place } from "../classes/Place";

/** 
 * Get cities corresponding to a specific country 
*/
export async function getCitiesByCountry(country : string) {

    const url : string = BACKEND_URL +  "place/country/cities/" + country;
    let cities : string[] = [];
    
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
export async function getPlaceById(id : number) {

    const url : string = BACKEND_URL +  "place/" + id;
    let place : Place = {} as Place;
    
    const res = await fetch(url);

    if (res.ok) {
        place = await res.json();
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }

    console.log(place);

    return  place ;
}