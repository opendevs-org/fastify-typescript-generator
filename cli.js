#!/usr/bin/env node

const path = require('path');
const fastifyGenTs = require('./fastify-generator');
const { start, get } = require('prompt');

const options = [
    {
        description: "Fastify Plugin Structure with Mongoose and Swagger",
        defaultName: "fastify-plugin-mongoose-swagger",
        templateName: "plugin-structure-mongoose",
        dependencies: "dotenv fastify fastify-cors fastify-oas mongoose",
        devDependencies: "@types/cors @types/jest @types/node jest nodemon ts-jest ts-node typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint"
    }, {
        description: "Fastify Plugin Structure with TypeORM and Swagger",
        defaultName: "fastify-plugin-typeorm-swagger",
        templateName: "plugin-structure-typeorm",
        dependencies: "dotenv fastify fastify-cors fastify-oas fastify-plugin mongodb reflect-metadata typeorm",
        devDependencies: "@types/cors @types/jest @types/node jest nodemon ts-jest ts-node typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint"
    }, {
        description: "Fastify with Mongoose and Express Directory Structure",
        defaultName: "fastify-express-mongoose",
        templateName: "express-structure-mongoose",
        dependencies: "dotenv fastify fastify-cors mongoose",
        devDependencies: "@types/cors @types/jest @types/node jest nodemon ts-jest ts-node typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint"
    }, {
        description: "Fastify with TypeORM and Express Directory Structure",
        defaultName: "fastify-express-typeorm",
        templateName: "express-structure-typeorm",
        dependencies: "dotenv fastify fastify-cors fastify-plugin mongodb reflect-metadata typeorm",
        devDependencies: "@types/cors @types/jest @types/node jest nodemon ts-jest ts-node typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint"
    },
];
const schema = {
    properties: {
        option: {
            description: 'Select a options for the type of project',
            pattern: /^[1-4]{0,1}$/,
            message: 'Specify a number in range of 4 corresponding options',
            required: true
        },
        path: {
            description: '[OPTIONAL] Specify directory where create the files, if no path is provided, current directory will be used',
            message: '[OPTIONAL] Specify directory where create the files, if no path is provided, current directory will be used',
            default: './',
            required: false
        },
        projectName: {
            description: '[OPTIONAL] Specify project name',
            pattern: /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/,
            message: '[OPTIONAL] Specify project name',
            required: false
        }
    }
};


const getDest = (option, destFolder, projectName) => {
    return `${path.join(process.cwd(), destFolder)}/${projectName || option.defaultName}`;
}


const initiate = async (option, path, projectName) => {
    try {
        const destination = getDest(option, path, projectName);
        console.log(`Choose the number for corresponding option.\n${destination}`);
        await fastifyGenTs(option, destination);
        console.log('Project setup complete!');
    } catch (error) {
        console.error(error);
    }
};


console.log('\x1b[33m\x1b[40m%s\x1b[0m', 'Setting up new Fastify TypeScript project...\n');
console.log('\x1b[33m\x1b[40m%s\x1b[0m', `Available options:\n`);
options.map((el, index) => console.log(`${index + 1}. ${el.description} -> ${el.templateName}\n`));


start();


get(schema, (error, argv) => {
    if (error) {
        console.error(`Prompt error: ${error}`);
        throw error;
    } else {
        console.log(`Option Chosen:\n${options[argv.option].templateName}\nDirectory Chosen/Default:\n${argv.path}\nProject Name:\n${argv.projectName || options[argv.option].defaultName}`);
        console.log(`Starting Project creation...`);
        initiate(options[argv.option], argv.path, argv.projectName);
    }
});