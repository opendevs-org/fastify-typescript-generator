const path = require('path');
const { execSync } = require('child_process');
const ncp = require('ncp').ncp;
const { writeFile, mkdir } = require('fs').promises;
const { existsSync } = require('fs');


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
	const options = {cwd: destination};
	console.log('\x1b[31m\x1b[40m%s\x1b[0m', 'Installing dependencies...\n');
	execSync('npm i -s ' + config.dependencies, options);
	console.log('\x1b[32m\x1b[40m%s\x1b[0m', 'Dependencies installation done...\n');
	console.log('\x1b[31m\x1b[40m%s\x1b[0m', 'Installing dev dependencies...\n');
	execSync('npm i -D ' + config.devDependencies, options);
	console.log('\x1b[32m\x1b[40m%s\x1b[0m', 'Dependencies installation complete...\n');
};


const fastifyGenTs = async (config, destination) => {
	try {
		if (!existsSync(destination)) {
			await mkdir(destination, { recursive: true });
		}
		await copyProjectFiles(config, destination);
		await updatePackageJson(destination);
		downloadNodeModules(config, destination);
	} catch (err) {
		throw err;
	}
};


module.exports = fastifyGenTs;
