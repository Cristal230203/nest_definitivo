import { Module } from '@nestjs/common';
import { CarnetsService } from './carnets.service';
import { CarnetsController } from './carnets.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [PrismaModule],
  controllers: [CarnetsController],
  providers: [CarnetsService],
})
export class CarnetsModule {}
