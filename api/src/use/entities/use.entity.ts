import {Use} from "@prisma/client";

export class UseEntity {
    id: number;
    name: string;
    description: string;
    image: string;

    constructor(use: Use) {
        Object.assign(this, use);
    }
}
