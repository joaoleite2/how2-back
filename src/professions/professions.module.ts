import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProfessionsController],
  providers: [ProfessionsService],
  imports: [PrismaModule]
})
export class ProfessionsModule {}
