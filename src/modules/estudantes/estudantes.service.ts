import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-aluno.dto';

@Injectable()
export class EstudantesService {
  constructor(private db: PrismaService, private storage: StorageService) { }

  async create(
    imagemPerfil: Express.Multer.File,
    createEstudanteDto: CreateEstudanteDto,
  ) {
    if (!imagemPerfil) {
      throw new BadRequestException('Imagem de perfil não informada');
    }
    if (
      !(await this.db.curso.findFirst({
        where: { id: createEstudanteDto.cursoId },
      }))
    ) {
      throw new NotFoundException('Curso não encontrado');
    }
    const urlImagemPerfil = await this.storage.uploadFileAndGetUrl(
      imagemPerfil,
    );
    return await this.db.estudante.create({
      data: { ...createEstudanteDto, urlImagemPerfil },
    });
  }

  async findAll() {
    return await this.db.estudante.findMany();
  }

  async findOne(id: string) {
    const estudante = await this.db.estudante.findFirst({
      where: { id },
      include: { curso: true },
    });
    if (!estudante) {
      throw new NotFoundException('Estudante não encontrado');
    }
    return estudante;
  }

  async update(id: string, updateEstudanteDto: UpdateEstudanteDto) {
    if (!(await this.db.curso.findFirst({ where: { id } }))) {
      throw new NotFoundException('Estudante não encontrado');
    }
    return await this.db.curso.update({
      where: { id },
      data: { ...updateEstudanteDto },
    });
  }

  async remove(id: string) {
    const curso = await this.db.estudante.findFirst({
      where: { id },
    });
    if (!curso) {
      throw new NotFoundException('Estudante não encontrado');
    }
    return await this.db.estudante.delete({ where: { id } });
  }
}
