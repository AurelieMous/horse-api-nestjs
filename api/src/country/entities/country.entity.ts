import {Country} from "@prisma/client";

export class CountryEntity {
    id: number;
    name: string;

    constructor(country: Country) {
        Object.assign(this, country);
    }
}
