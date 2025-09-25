import { Controller, Get, Post, Patch, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';
import { CreateVendedoresDto } from './dto/create-vendedores.dto';


@Controller("vendedores")
export class VendedoresController {
constructor(private readonly vendedoresService: VendedoresService){}

//endpoint:
//destino de la request
//se escribe como una funcion
//en una clase controlador

  @Get()
  consultarvendedores(): string {
    return "Aqui se podrán consultar todos los campos"
  }

  //Desde la request se va a capturar
  //el parametro id

    @Get (":id")
    consultarVendedorPorId(@Param("id") id:string){
    return `Aqui se va a consultar el vendedor con id: ${id}`
    }

    @Post()
    @UsePipes(new ValidationPipe( )  )
      create(@Body() VendedoresDto:CreateVendedoresDto ) {
        return this.vendedoresService.create (VendedoresDto);
      }

  @Patch ()
  actualizarVendedor(): string {
    return "Aqui se actualizaran los vendedores"
  }

    @Patch (":id")
    actualizarVendedorporId(@Param("id") id:string){
      return `Aqui se va a actualizar el vendedor con id: ${id}`
      }


  @Delete ()
  eliminarVendedor(): string {
    return "Aqui se eliminaran los vendedores"
  }

    @Delete (":id")
    eliminarVendedorporId(@Param("id") id:string){
      return `Aqui se va a eliminar el vendedor con id: ${id}`
      }
}
