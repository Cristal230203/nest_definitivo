import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarnetsService } from './carnets.service';
import { CreateCarnetDto } from './dto/create-carnet.dto';
import { UpdateCarnetDto } from './dto/update-carnet.dto';

@Controller('carnets')
export class CarnetsController {
  constructor(private readonly carnetsService: CarnetsService) {}

  @Post()
  create(@Body() CarnetDto:CreateCarnetDto) {
    return this.carnetsService.create (CarnetDto);
  }

  @Get()
  findAll() {
    return this.carnetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carnetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() Body:any) {
    return {
      "exito" : true,
      "mensaje" : "Actualizado correctamente",
      "id" : id,
      "data" : this.carnetsService.update(+id, Body)
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carnetsService.remove(+id);
  }
}
