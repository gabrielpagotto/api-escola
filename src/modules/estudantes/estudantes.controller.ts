import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-aluno.dto';
import { EstudantesService } from './estudantes.service';

@Controller('estudantes')
export class EstudantesController {
  constructor(private readonly alunosService: EstudantesService) { }

  @Post()
  @UseInterceptors(FileInterceptor('imagemPerfil'))
  create(
    @UploadedFile() imagemPerfil: Express.Multer.File,
    @Body() createEstudanteDto: CreateEstudanteDto,
  ) {
    console.log(imagemPerfil);
    return this.alunosService.create(imagemPerfil, createEstudanteDto);
  }

  @Get()
  findAll() {
    return this.alunosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstudanteDto: UpdateEstudanteDto,
  ) {
    return this.alunosService.update(id, updateEstudanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(id);
  }
}
