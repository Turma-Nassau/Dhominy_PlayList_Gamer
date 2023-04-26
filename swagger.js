const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "Radio de Rock",
        description: "API Radio de Rock"
    },
    host: "localhost:5555",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);
