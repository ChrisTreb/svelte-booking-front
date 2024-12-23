import { Link } from "../classes/Link";

export const BACKEND_URL: string = "http://ctrl-rasp.zapto.org:8080/";
export const BACKEND_API_URL: string = BACKEND_URL + "api/";

export const ALT_PLACES_IMG: string[] = [
    "/img/img_alt_places/1 (1).jpeg",
    "/img/img_alt_places/1 (2).jpeg",
    "/img/img_alt_places/1 (3).jpeg",
    "/img/img_alt_places/1 (4).jpeg",
    "/img/img_alt_places/1 (5).jpeg",
    "/img/img_alt_places/1 (6).jpeg",
    "/img/img_alt_places/1 (7).jpeg",
    "/img/img_alt_places/1 (8).jpeg",
    "/img/img_alt_places/1 (9).jpeg",
    "/img/img_alt_places/1 (10).jpeg",
    "/img/img_alt_places/1 (11).jpeg",
    "/img/img_alt_places/1 (12).jpeg",
    "/img/img_alt_places/1 (13).jpeg",
    "/img/img_alt_places/1 (14).jpeg",
    "/img/img_alt_places/1 (15).jpeg",
    "/img/img_alt_places/1 (16).jpeg",
    "/img/img_alt_places/1 (17).jpeg",
    "/img/img_alt_places/1 (18).jpeg",
    "/img/img_alt_places/1 (19).jpeg",
    "/img/img_alt_places/1 (20).jpeg",
    "/img/img_alt_places/1 (21).jpeg",
    "/img/img_alt_places/1 (22).jpeg",
    "/img/img_alt_places/1 (23).jpeg",
    "/img/img_alt_places/1 (24).jpeg",
    "/img/img_alt_places/1 (25).jpeg",
    "/img/img_alt_places/1 (26).jpeg",
    "/img/img_alt_places/1 (27).jpeg",
    "/img/img_alt_places/1 (28).jpeg",
    "/img/img_alt_places/1 (29).jpeg",
    "/img/img_alt_places/1 (30).jpeg",
    "/img/img_alt_places/1 (31).jpeg",
    "/img/img_alt_places/1 (32).jpeg"
];

export const DEFAULT_ROOM_IMG: string = "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const geocodingApiUrl = "https://api.opencagedata.com/geocode/v1/json?q=";

/**
 * Get random element from specific Array
 * @param array
 * @returns index
 */
export function getRandElFromArr(arr: string[]) {
    return arr[(Math.floor(Math.random() * arr.length))];
}

/**
 * Construct array from current url 
 * For breadcrumb component 
 */
export function getUrlParts() {
    const url: string = window.location.href;
    let cleanUrl: string = "";
    let arrUrl: string[] = [];
    const links: Link[] = [];

    cleanUrl = url.replace(/(^\w+:|^)\/\//, '');
    arrUrl = cleanUrl.split("/");

    for (let i: number = 0; i < arrUrl.length; i++) {
        if (i === 0) {
            links.push(new Link("HOME", "/"));
        }
        if (i > 0) {
            if (arrUrl[i].includes("?")) {
                links.push(new Link(removeParams(arrUrl[i]), "/" + removeParams(arrUrl[i])));
            } else {
                links.push(new Link(arrUrl[i].toUpperCase(), "/" + arrUrl[i]));
            }
        }
    }
    return links;
}

/**
 * Clean params from url 
 * Breadcrum use
 * @param part 
 * @returns string
 */
function removeParams (part: string ) {
    let tempArr: string[] = [];
    tempArr = part.split("?");
    return tempArr[0].toUpperCase();
}