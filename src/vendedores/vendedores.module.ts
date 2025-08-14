import { Module } from '@nestjs/common';
import { VendedoresController } from './vendedores.controller';

@Module({
  imports: [],
  controllers: [VendedoresController],
  providers: [],
})
export class vendedoresModule {}
