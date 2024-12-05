import type { AppUser } from '../classes/AppUser';
import { BACKEND_API_URL } from '../const/url';

/**
 * Get user by login
 * @param login
 * @returns appUser
 */
export async function checkIsLoginAlreadyUsed(login: string) {
	const url: string = BACKEND_API_URL + 'user/login/' + login;
	let user: unknown;

	const res = await fetch(url);

	if (res.ok) {
		user = await res.json();
	} else {
		console.log('Error while calling endpoint : ' + url + ', status : ' + res.status);
	}
	return user;
}

/**
 * Save user after signup
 */
export async function saveUser(user: AppUser) {

    const url: string = BACKEND_API_URL + "save-user";

    // Awaiting fetch which contains method, 
    // headers and content-type and body 
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    // Awaiting response 
    const resData: Response = response;
    console.log(resData);
    // Return response data  
    return resData.status;
}

/**
 * Validate user data
 */
export function validateUser(user: AppUser) {
    let validation: boolean = true;

    if (user.firstname == null || user.firstname == undefined || user.firstname == "") {
        validation = false;
    }
    if (user.address == null || user.address == undefined || user.address == "") {
        validation = false;
    }
    if (user.city == null || user.city == undefined || user.city == "") {
        validation = false;
    }
    if (user.country == null || user.country == undefined || user.country == "") {
        validation = false;
    }
    if (user.lastname == null || user.lastname == undefined || user.lastname == "") {
        validation = false;
    }
    if (user.gender == null || user.gender == undefined || user.gender == "") {
        validation = false;
    }
    if (user.login == null || user.login == undefined || user.login == "") {
        validation = false;
    }
    if (user.date_of_birth == null || user.date_of_birth == undefined) {
        validation = false;
    }
    if (user.password == null || user.password == undefined || user.password == "") {
        validation = false;
    }
    if (user.email == null || user.email == undefined || user.email == "") {
        validation = false;
    }
    return validation;
}
