import { IsString, IsUUID } from 'class-validator';

export class CreateEstudanteDto {
  @IsString()
  nome: string;
  @IsString()
  sobrenome: string;
  @IsUUID()
  cursoId: string;
}
