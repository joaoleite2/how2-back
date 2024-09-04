import { Module } from '@nestjs/common';
import { ProfessionsModule } from './professions/professions.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProfessionsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
