import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CursosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
