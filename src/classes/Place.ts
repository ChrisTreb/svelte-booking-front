export class Place {
    id! : number;
    created_at! : Date;
    name! : string;
    address! : string;
    city! : string;
    country! : string;
    description! : string;
    phone_number! : string;
    email! : string;
    rating! : number;
    image! : string;

    constructor(
        id : number,
        created_at : Date,
        name : string,
        address : string,
        city : string,
        country : string,
        description : string,
        phone_number : string,
        email : string,
        rating : number,
        image : string,
    ) {
        this.id = id;
        this.created_at = created_at;
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.description = description;
        this.phone_number = phone_number;
        this.email = email;
        this.rating = rating;
        this.image = image;
    }
}