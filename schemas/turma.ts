export default {
  name: 'turma',
  title: 'Turma',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome da Turma',
      type: 'string'
    },

    {
      name: 'curso',
      title: 'Curso',
      type: 'reference',
      to: [{type: 'curso'}]
    }
  ]
}
