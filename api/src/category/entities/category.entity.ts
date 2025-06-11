import {Category} from "@prisma/client";


export class CategoryEntity {
    id: number;
    name: string;
    description: string;
    image: string;

    constructor(category: Category) {
        Object.assign(this, category);
    }
}
