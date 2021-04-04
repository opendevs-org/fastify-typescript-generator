const path = require('path');
const { execSync } = require('child_process');
const ncp = require('ncp').ncp;
const { writeFile, mkdir } = require('fs').promises;
const { existsSync } = require('fs');
const { green, yellow } = require('chalk');

const copyProjectFiles = (config, destination) => {
	const prjFolder = `./templates/${config.templateName}`;
	const source = path.join(__dirname, prjFolder);
	return new Promise((resolve, reject) => {
		ncp.limit = 16;
		ncp(source, destination, { stopOnErr: true }, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});
	});
};


const updatePackageJson = async (destination) => {
	try {
		const pathName = `${destination}/package.json`;
		let data = require(pathName);
		data.name = path.basename(destination);
		data = JSON.stringify(data, null, 2);
		await writeFile(pathName, data);
	} catch (err) {
		throw err;
	}
};


const downloadNodeModules = (config, destination) => {
	const options = { cwd: destination, stdio: 'inherit' }
	console.log(yellow('Installing dependencies...\n'))
	execSync('npm install', options)
	console.log(green('Dependencies installation done...\n'))
};

const setupGit = (destination) => {
	const options = { cwd: destination, stdio: 'inherit' }
	console.log(yellow('Initializing git...\n'))
	execSync('git init', options)
}

const fastifyGenTs = async (config, destination, git) => {
	try {
		if (!existsSync(destination)) {
			await mkdir(destination, { recursive: true });
		}
		await copyProjectFiles(config, destination);
		await updatePackageJson(destination);
		git && setupGit(destination);
		downloadNodeModules(config, destination);
	} catch (err) {
		throw err;
	}
};


module.exports = fastifyGenTs;
