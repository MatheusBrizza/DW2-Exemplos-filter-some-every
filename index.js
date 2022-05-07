// run `node index.js` in the terminal
// exemplos .filter()
const alunos = [
  {
    nome: 'Melissa',
    matricula: 2021222,
    idade: 26,
    turno: 'noite',
    notas: [
      {
        nome: 'DW2',
        nota: 10,
      },
    ],
    cursos: [
      {
        id: 1,
        nome: 'informatica',
        cargaHoraria: 120,
      },
    ],
  },
  {
    nome: 'Daniel',
    matricula: 2021222,
    idade: 18,
    turno: 'manha',
    notas: [
      {
        nome: 'DW2',
        nota: 6,
      },
    ],
    cursos: [],
  },
  {
    nome: 'Matheus',
    matricula: 2021222,
    idade: 18,
    turno: 'tarde',
    notas: [
      {
        nome: 'DW2',
        nota: 2,
      },
      {
        nome: 'LP2',
        nota: 10,
      },
    ],
    cursos: [],
  },
];

const alunosMaior18 = alunos.filter((aluno) => aluno.idade > 18);

const alunosManhaTarde = alunos.filter((aluno) => {
  const { turno } = aluno;
  const ehDaManha = turno === 'manha';
  const ehDaTarde = turno === 'tarde';
  return ehDaManha || ehDaTarde;
});

const alunosManhaTarde = alunos.filter(
  ({ turno }) => turno === 'tarde' || turno === 'manha'
);

function filtrarAlunosAprovados(alunosBancoDeDados, curso = 'DW2', media = 7) {
  const aprovados = alunosBancoDeDados.filter((aluno) => {
    const dw2 = aluno.notas.find((nota) => {
      const nome = nota.nome;
      return nome === curso;
    });
    const nota = dw2.nota;
    return nota >= media;
  });

  return aprovados;
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);

// exemplos .some()

const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    pessoas: ['mathias'],
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    pessoas: ['melissa'],
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    pessoas: ['mathias', 'melissa'],
  },
];

const resultado = taferas
  .filter((tarefa) => tarefa.concluida)
  .filter((tarefa) => tarefa.pessoas.some((pessoa) => pessoa === 'mathias'));

console.log(resultado);

// exemplos .every()

const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    pessoas: ['mathias'],
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    pessoas: ['melissa'],
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    pessoas: ['mathias', 'melissa'],
  },
];

const todasConcluidas = tarefas.every((tarefa) => tarefa.concluida === true);
console.log(todasConcluidas);
