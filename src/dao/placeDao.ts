import { BACKEND_URL } from "../const/url";

export async function getCitiesByCountry(country : string) {

    const url : string = BACKEND_URL +  "place/country/cities/" + country;
    let cities : string[] = [];
    
    const res = await fetch(url);

    if (res.ok) {
        cities = await res.json();

        console.log(cities);
    } else {
        console.log("Error while calling endpoint : " + url + ", status : " + res.status);
    }

    return cities;
}