export default {
    name: 'aluno',
    title: 'Aluno',
    type: 'document',
    fields: [
      {
        name: 'nome',
        title: 'Nome do Aluno',
        type: 'string'
      },
      
      {
        name: 'rna',
        title: 'RNA Aluno',
        type: 'number'
      },

      {
        name: 'email',
        title: 'Email do Aluno',
        type: 'string'
      },

      {
        name: 'curso',
        title: 'Curso',
        type: 'reference',
        to: [{type: 'curso'}]
      },

      {
        name: 'turma',
        title: 'Turma',
        type: 'reference',
        to: [{ type: 'turma' }]
      },

      {
        name: 'grupo',
        title: 'Grupo',
        type: 'reference',
        to: [{ type: 'grupo' }]
      }
    ]
  }
  