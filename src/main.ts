import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,//Lanza excepcion si del cliente (body) llegan atribuos no etsipuados en el DTO
      forbidNonWhitelisted: true,//Ignora atributos no relacionados en el DTO: Validados
      transform: true,//Transforma los tipos de datos a la clase que se esta usando (DTO)
      })
  );
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
