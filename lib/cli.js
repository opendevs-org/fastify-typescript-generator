#!/usr/bin/env node

const path = require('path');
const fastifyGenTs = require('./fastify-generator');
const { prompt } = require('prompts');
const { say } = require('cfonts');
const { red, green, yellow, blue } = require('chalk');

const options = [
	{
		description: 'Fastify Plugin Structure with Mongoose and Swagger',
		defaultName: 'fastify-plugin-mongoose-swagger',
		templateName: 'plugin-structure-mongoose'
	}, {
		description: 'Fastify Plugin Structure with TypeORM and Swagger',
		defaultName: 'fastify-plugin-typeorm-swagger',
		templateName: 'plugin-structure-typeorm'
	}, {
		description: 'Fastify with Mongoose and Express Directory Structure',
		defaultName: 'fastify-express-mongoose',
		templateName: 'express-structure-mongoose'
	}, {
		description: 'Fastify with TypeORM and Express Directory Structure',
		defaultName: 'fastify-express-typeorm',
		templateName: 'express-structure-typeorm'
	},
];


const getDest = (option, destFolder, projectName) => {
	return `${path.join(process.cwd(), destFolder)}/${projectName || option.defaultName}`;
};


const initiate = async (option, p, projectName, git) => {
	try {
		const destination = getDest(option, p, projectName);
		await fastifyGenTs(option, destination, git);
		console.log(green(`Project setup complete! at ${path.resolve(destination)}`))
	} catch (error) {
		console.error(error);
	}
};


say('fastify typescript generator', {
	font: 'chrome',
	align: 'center',
	colors: ['system'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
});


say('opendevs', {
	font: 'chrome',
	align: 'right',
	colors: ['system'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	gradient: ['#fff', '#89d8d3'],
});


console.log(blue('Setting up new Fastify TypeScript project...\n'));


const onCancel = () => {
	console.log(red('Project creation failed!'));
};


(async () => {
	const questions = [
		{
			type: 'select',
			name: 'option',
			message: 'Select a option for the type of project',
			validate: value => value >= 1 && value <=4 ? true : 'Specify number in the range of 1 - 4',
			suggest: (input, choices) => choices.filter(i => i.value),
			choices: options.map((el, index) => ({ value: index, title: el.templateName, description: el.description })),
			fallback: {
				title: 'Using default',
				value: 1
			}
		},
		{
			type: 'text',
			name: 'projectName',
			message: 'Specify project name',
			validate: projectName => /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName) ? true : 'Invalid project name, please follow npm guidelines'
		},
		{
			type: 'text',
			name: 'path',
			message: '[OPTIONAL] Specify directory where you want to create the project, if no path is provided current directory will be used.',
			fallback: {
				title: 'Using default',
				value: './'
			}
		},
		{
			type: 'confirm',
			name: 'git',
			message: '[OPTIONAL] Initialize git',
			initial: true
		}
	];

	const answers = await prompt(questions, { onCancel });

	if (answers.option, answers.path, answers.projectName) {
		console.log(yellow('Starting Project creation...'));
		initiate(options[answers.option], answers.path, answers.projectName, answers.git);
	}


})();
