const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },
    async create(request, response) {

        const { title, description, value } = request.body;

        const ongId = request.headers.autorizathion;

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ongId
        });

        return response.json({ result });
    }

}