# API Escola

## Especificações do projeto

### Persistência de Objetos Usando Base Relacional
- Ferramenta: [PostgreSQL](https://www.postgresql.org)
- Linguagem: [NodeJS](https://nodejs.org/en)
- Framework ORM relacionado a linguagem: [Prisma](https://www.prisma.io)

### Persistência de Dados na Nuvem
- Serviço de banco de dados: [PostgreSQL da Railway](https://docs.railway.app/databases/postgresql)
- Serviço de armazenamento de arquivos:  [Cloud Storage para Firebase](https://firebase.google.com/docs/storage?hl=pt-br)

## Utilizando a API em nuvem

- https://api-escola-production.up.railway.app

### Rercursos

<table>
  <thead>
    <th>Método</th>
    <th>Path</th>
    <th>Descrição</th>
    <th>Recurso</th>
    <th>Tipo</th>
    <th>Campos</th>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/cursos</td>
      <td>Busca todos os cursos</td>
      <td>Cursos</td>
      <td>JSON</td>
      <td></td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/cursos/:id</td>
      <td>Busca um curso específico</td>
      <td>Cursos</td>
      <td>JSON</td>
      <td></td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/cursos</td>
      <td>Cria um novo curso</td>
      <td>Cursos</td>
      <td>JSON</td>
      <td><table><tr><td>nome</td><td>string</td></tr></table></td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>/cursos/:id</td>
      <td>Atualiza um curso</td>
      <td>Cursos</td>
      <td>JSON</td>
      <td><table><tr><td>nome</td><td>string</td></tr></table></td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/cursos/:id</td>
      <td>Deleta um curso</td>
      <td>Cursos</td>
      <td>JSON</td>
      <td></td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/estudantes</td>
      <td>Busca todos os estudantes</td>
      <td>Estudantes</td>
      <td>JSON</td>
      <td></td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/estudantes/:id</td>
      <td>Busca um estudante específico</td>
      <td>Estudantes</td>
      <td>JSON</td>
      <td></td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/estudantes</td>
      <td>Cria um novo estudante</td>
      <td>Estudantes</td>
      <td>FORM DATA</td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>nome</td>
              <td>string</td>
            </tr>
            <tr>
              <td>nome</td>
              <td>string</td>
            </tr>
            <tr>
              <td>sobrenome</td>
              <td>string</td>
            </tr>
            <tr>
              <td>cursoId</td>
              <td>uuid</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>/estudantes/:id</td>
      <td>Atualiza um estudante</td>
      <td>Estudantes</td>
      <td>JSON</td>
      <td>
        <table>
          <tbody>
            <tr>
              <td>nome</td>
              <td>string</td>
            </tr>
            <tr>
              <td>sobrenome</td>
              <td>string</td>
            </tr>
            <tr>
              <td>cursoId</td>
              <td>uuid</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/estudantes/:id</td>
      <td>Deleta um estudante</td>
      <td>Estudantes</td>
      <td>JSON</td>
      <td></td>
    </tr>
  </tbody>
</table>
