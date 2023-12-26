export default{

    name: 'diciplina',
    title: 'Diciplina',
    type: 'document',
    fields: [
        {
            name: 'nome',
            title: 'Nome da Diciplina',
            type: 'string'
        },

        {
            name: 'professores',
            title: 'Professores',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'professor' }] }],
        }
    ]
}