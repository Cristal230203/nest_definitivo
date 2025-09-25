import { IsNotEmpty } from "class-validator";

export class CreateVendedoresDto {
//Validaciones con class validator:
  @IsNotEmpty({message: 'El carnet no debe ir vacio'})
  carnet_id: number;

  @IsNotEmpty({message: 'El nombre no debe ir vacio'})
  name: string;

    @IsNotEmpty({message: 'El apellido no debe ir vacio'})
  lastname: string;
  
    @IsNotEmpty({message: 'La contraseña no debe ir vacio'})
  contraseña: string;
    
}

