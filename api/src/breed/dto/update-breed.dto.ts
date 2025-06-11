import { PartialType } from '@nestjs/mapped-types';
import { CreateBreedDto } from './create-breed.dto';

export class UpdateBreedDto extends PartialType(CreateBreedDto) {
    description: string;
    image: string;
    category: [];
    coat: [];
    use: [];
}
