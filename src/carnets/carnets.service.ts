import { Injectable } from '@nestjs/common';
import { CreateCarnetDto } from './dto/create-carnet.dto';
import { UpdateCarnetDto } from './dto/update-carnet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarnetsService {
  constructor(
    private prisma: PrismaService
  ) {}

  create(Body:any) {
    return this.prisma.carnets.create({
      data:Body
    })
  }

  findAll() {
    return this.prisma.carnets.findMany({ 
      orderBy:{id:'desc'}
     })
  }

  findOne(id: number) {
    return this.prisma.carnets.findFirst({
      where:{id:id}

    })
  }

  async update(id: number, 
          Body: any) {
    return await this.prisma.carnets.update({
      where: {id:id},
      data: Body
    });
  }

  async remove(id: number) {
    await this.prisma.carnets.delete({
      where:{id:id}
    })
    return {
      "exito" : true,
      "mensaje": "Eliminado correctamente",
      "id":id
    }
  }
}
