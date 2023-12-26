export default {
    name: 'curso',
    title: 'Curso',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome do Curso',
            type: 'string'
        },

        {
            name: 'disciplinas',
            title: 'Disciplinas',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'diciplina' }] }],
        }
          
    ]
    
}