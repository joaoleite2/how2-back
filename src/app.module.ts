import { Module } from '@nestjs/common';
import { ProfessionsModule } from './professions/professions.module';

@Module({
  imports: [ProfessionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
