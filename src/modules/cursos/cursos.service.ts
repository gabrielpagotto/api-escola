import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursosService {
  constructor(private db: PrismaService) { }

  async create(createCursoDto: CreateCursoDto) {
    if (
      await this.db.curso.findFirst({ where: { nome: createCursoDto.nome } })
    ) {
      throw new BadRequestException('Curso com este nome já existe');
    }
    return await this.db.curso.create({ data: { ...createCursoDto } });
  }

  async findAll() {
    return await this.db.curso.findMany();
  }

  async findOne(id: string) {
    const curso = await this.db.curso.findFirst({ where: { id } });
    if (!curso) {
      throw new NotFoundException('Curso não encontrado');
    }
    return curso;
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    if (!(await this.db.curso.findFirst({ where: { id } }))) {
      throw new NotFoundException('Curso não encontrado');
    }
    return await this.db.curso.update({
      where: { id },
      data: { ...updateCursoDto },
    });
  }

  async remove(id: string) {
    const curso = await this.db.curso.findFirst({
      where: { id },
      include: { estudantes: true },
    });
    if (!curso) {
      throw new NotFoundException('Curso não encontrado');
    }
    if (curso.estudantes.length > 0) {
      throw new BadRequestException(
        'Curso não pode ser deletado pois possui alunos.',
      );
    }
    return await this.db.curso.delete({ where: { id } });
  }
}
