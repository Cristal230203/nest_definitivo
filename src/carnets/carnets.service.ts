import { HttpException, Injectable } from '@nestjs/common';
import { CreateCarnetDto } from './dto/create-carnet.dto';
import { UpdateCarnetDto } from './dto/update-carnet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarnetsService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(CarnetDto: CreateCarnetDto) {
    //validacion logica de negocio
    //el carnet ya existe?
    //si existe error
    let existe = await this.prisma.carnets .findFirst({
      where:{estado:CarnetDto.estado}
    })
if(existe){//error}
    throw new HttpException({
    "exito":false,
    "mensaje":"El carnet ya existe"
  }, 404); 
}else{//no existe el canet, se puede crear
   return await this.prisma.carnets.create({
      data: {
        estado: CarnetDto.estado
      }
    })
}
  
  }

  findAll() {
    return this.prisma.carnets.findMany({ 
      orderBy:{id:'asc'}
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
