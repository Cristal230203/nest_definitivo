import { Injectable } from '@nestjs/common';
import { CreateCarnetDto } from './dto/create-carnet.dto';
import { UpdateCarnetDto } from './dto/update-carnet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarnetsService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(createCarnetDto: CreateCarnetDto) {
    return 'This action adds a new carnet';
  }

  findAll() {
    return this.prisma.carnets.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} carnet`;
  }

  update(id: number, updateCarnetDto: UpdateCarnetDto) {
    return `This action updates a #${id} carnet`;
  }

  remove(id: number) {
    return `This action removes a #${id} carnet`;
  }
}
