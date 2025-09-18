import { Module } from '@nestjs/common';
import { VendedoresController } from './vendedores.controller';
import { VendedoresService } from './vendedores.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VendedoresController],
  providers: [VendedoresService],
})
export class vendedoresModule {}
