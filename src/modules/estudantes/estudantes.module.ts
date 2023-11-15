import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { EstudantesController } from './estudantes.controller';
import { EstudantesService } from './estudantes.service';

@Module({
  controllers: [EstudantesController],
  providers: [EstudantesService, PrismaService, StorageService],
})
export class EstudantesModule { }
