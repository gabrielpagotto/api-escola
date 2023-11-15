import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { PrismaService } from './prisma/prisma.service';
import { StorageService } from './storage/storage.service';

@Module({
  imports: [CursosModule],
  controllers: [],
  providers: [PrismaService, StorageService],
})
export class AppModule { }
