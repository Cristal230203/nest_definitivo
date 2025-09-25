import { HttpException, Injectable } from '@nestjs/common';
import { CreateVendedoresDto } from './dto/create-vendedores.dto';
import { UpdateCarnetDto } from 'src/carnets/dto/update-carnet.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class VendedoresService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(VendedoresDto: CreateVendedoresDto) {
//validaciones logica de enegocio
//aquella que se realiza con una o varias consultas a la bd
//determinar la existencia o no de un registro


//1. Validar que el nombre exista
//2. Validar que la contraseña no exista
//3. Si las dos anteriores condiciones se cumplen, crear el vendedor


//1. Validar que el nombre exista
let existeVendedor = await this.prisma.vendedores.findFirst({
  where: {name: VendedoresDto.name}
})
if (!existeVendedor){
throw new HttpException({
  status: 404,
  error: 'El vendedor no existe'
}, 404);
}


//2. Validar que la contraseña no exista
let existeContraseña = await this.prisma.vendedores.findFirst({
  where: {contraseña: VendedoresDto.contraseña}
})
if(existeContraseña){
throw new HttpException({
  status: 400,
  error: 'La contraseña ya existe'
}, 400);
}


//3. Si las dos anteriores condiciones se cumplen, crear el vendedor

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


