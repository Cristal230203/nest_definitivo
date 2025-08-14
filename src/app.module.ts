import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { vendedoresModule } from './vendedores/vendedores.module';

@Module({
  imports: [vendedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
