export class AppUser {
    id! : number;
    created_at! : Date;
    lastname! : string;
    firstname! : string;
    email! : string;
    gender! : string;
    date_of_birth! : Date;
    address! : string;
    city! : string;
    country! : string;
    role! : string;
    image! : string;

    constructor(
        id : number,
        created_at : Date,
        lastname : string,
        firstname : string,
        email : string,
        gender : string,
        date_of_birth : Date,
        address : string,
        city : string,
        country : string,
        role : string,
        image : string
    ) {
        this.id = id;
        this.created_at = created_at;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
        this.address = address;
        this.city = city;
        this.country = country;
        this.role = role;
        this.image = image;
    }
}