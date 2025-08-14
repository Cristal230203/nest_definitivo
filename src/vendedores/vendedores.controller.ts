import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';


@Controller("vendedores")
export class VendedoresController {


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
  insertarVendedor(): string {
    return "Aqui se podrá crear los vendedores"
  }

    @Post (":id")
    insertarVendedorporId(@Param("id") id:string){
      return `Aqui se va a insertar el vendedor con id: ${id}`
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
