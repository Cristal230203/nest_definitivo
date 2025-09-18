import { Injectable } from '@nestjs/common';
import { CreateVendedoresDto } from './dto/create-vendedores.dto';
import { UpdateCarnetDto } from 'src/carnets/dto/update-carnet.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class VendedoresService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(VendedoresDto: CreateVendedoresDto) {
return await this.prisma.vendedores.create({
data:{
    carnet: {connect: { id: VendedoresDto.carnet_id,}},
    name: VendedoresDto.name,
    lastname: VendedoresDto.lastname,
    contraseña: VendedoresDto.contraseña
}      
})

  
  }

  findAll() {
    return this.prisma.vendedores.findMany({ 
      orderBy:{id:'asc'}
     })
  }

  findOne(id: number) {
    return this.prisma.vendedores.findFirst({
      where:{id:id}

    })
  }

  async update(id: number, 
          Body: any) {
    return await this.prisma.vendedores.update({
      where: {id:id},
      data: Body
    });
  }

  async remove(id: number) {
    await this.prisma.vendedores.delete({
      where:{id:id}
    })
    return {
      "exito" : true,
      "mensaje": "Eliminado correctamente",
      "id":id
    }
  }
}


