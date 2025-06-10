import {Breed} from "@prisma/client";

export class BreedEntity implements Breed {
    id: number;
    name: string;
    description: string;
    image: string;
    countryId: number;
    size: string;
    weight: string;
}
