import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { vendedoresModule } from './vendedores/vendedores.module';
import { CarnetsModule } from './carnets/carnets.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [vendedoresModule, CarnetsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
