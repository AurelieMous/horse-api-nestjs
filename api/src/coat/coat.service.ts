import { Injectable } from '@nestjs/common';
import { CreateCoatDto } from './dto/create-coat.dto';
import { UpdateCoatDto } from './dto/update-coat.dto';

@Injectable()
export class CoatService {
  create(createCoatDto: CreateCoatDto) {
    return 'This action adds a new coat';
  }

  findAll() {
    return `This action returns all coat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coat`;
  }

  update(id: number, updateCoatDto: UpdateCoatDto) {
    return `This action updates a #${id} coat`;
  }

  remove(id: number) {
    return `This action removes a #${id} coat`;
  }
}
