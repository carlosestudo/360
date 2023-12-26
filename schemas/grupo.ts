export default {
    name: 'grupo',
    title: 'Grupo',
    type: 'document',
    fields: [
      {
        name: 'nome',
        title: 'Nome do Grupo',
        type: 'string'
      },
      {
        name: 'turma',
        title: 'Turma',
        type: 'reference',
        to: [{ type: 'turma' }]
      }
    ]
}
  