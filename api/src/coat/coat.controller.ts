import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoatService } from './coat.service';
import { CreateCoatDto } from './dto/create-coat.dto';
import { UpdateCoatDto } from './dto/update-coat.dto';

@Controller('coat')
export class CoatController {
  constructor(private readonly coatService: CoatService) {}

  @Post()
  create(@Body() createCoatDto: CreateCoatDto) {
    return this.coatService.create(createCoatDto);
  }

  @Get()
  findAll() {
    return this.coatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoatDto: UpdateCoatDto) {
    return this.coatService.update(+id, updateCoatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coatService.remove(+id);
  }
}
