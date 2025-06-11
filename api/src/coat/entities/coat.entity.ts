import {Coat} from "@prisma/client";

export class CoatEntity {
    id: number;
    name: string;
    description: string;
    image: string;

    constructor(coat: Coat) {
        Object.assign(this, coat);
    }
}
