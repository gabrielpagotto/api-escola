import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

@Module({
  controllers: [CursosController],
  providers: [PrismaService, CursosService],
})
export class CursosModule { }
