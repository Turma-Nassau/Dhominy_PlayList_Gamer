const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "Musicas para jogar",
        description: "API PlayList Gamer"
    },
    host: "localhost:3000",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);
