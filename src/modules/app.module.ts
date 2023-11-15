import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { EstudantesModule } from './estudantes/estudantes.module';
import { PrismaService } from './prisma/prisma.service';
import { StorageService } from './storage/storage.service';

@Module({
  imports: [CursosModule, EstudantesModule],
  controllers: [],
  providers: [PrismaService, StorageService],
})
export class AppModule { }
