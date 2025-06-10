import { PartialType } from '@nestjs/mapped-types';
import { CreateCoatDto } from './create-coat.dto';

export class UpdateCoatDto extends PartialType(CreateCoatDto) {}
