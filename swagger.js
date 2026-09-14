import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'TP08 - PG Provincias',
        description: 'Documentación del TP08 - PG Provincia',
        version: '1.0.0'
    },
    host: 'localhost:3000',
    basePath: '/api/province',
    schemes: ['http'],

    definitions: {
        Provincia: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    description: 'Identificador de la provincia.'
                },
                name: {
                    type: 'string',
                    description: 'Nombre de la provincia.'
                },
                full_name: {
                    type: 'string',
                    description: 'Nombre completo de la provincia.'
                },
                latitude: {
                    type: 'integer',
                    description: 'Latitud de la provincia.'
                },
                longitude: {
                    type: 'integer',
                    description: 'Longitud de la provincia.'
                },
                display_order: {
                    type: 'integer',
                    description: 'Orden de visualización de la provincia.'
                }
            }
        }
    }
};

const outputFile = './swagger-output.json';

const endpointsFiles = ['./src/controllers/provinciasController.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);