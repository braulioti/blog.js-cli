const fs = require('fs');

const dependencies = [
    { dependency: '@types/ejs', version: '^3.0.1' },
    { dependency: 'ejs', version: '^3.0.1' },
    { dependency: 'express', version: '^4.17.1' },
    { dependency: 'nodemon', version: '^2.0.2' },
    { dependency: 'pg', version: '7.15.0' },
    { dependency: 'sequelize', version: '5.1.0' },
    { dependency: 'sequelize-typescript', version: '1.0.0' },
    { dependency: 'winston', version: '^3.2.1' }
];

const devDependencies = [
    { dependency: 'ejs-ts', version: '^1.0.0' },
    { dependency: 'ts-node', version: '5.0.1' },
    { dependency: 'typescript', version: '3.7.5' }
];

module.exports = function(projectDirectory, projectName, version, description, author) {
    const chalk = require('chalk');
    let dataFile = `{\n`;
    dataFile += `  "name": "${projectName}",\n`;
    dataFile += `  "version": "${version}",\n`;
    dataFile += `  "description": "${description}",\n`;
    dataFile += `  "main": "main.js",\n`;
    dataFile += `  "keywords": [],\n`;
    dataFile += `  "author": "${author}",\n`;
    dataFile += `  "license": "ISC",\n`;

    dataFile += `  "dependencies": {\n`;
    dependencies.forEach((dependency, index) => {
        dataFile += `    "${dependency.dependency}": "${dependency.version}"`;
        if (index !== (dependencies.length - 1)) {
            dataFile += `,\n`;
        } else {
            dataFile += `\n`;
        }
    });
    dataFile += `  },\n`;

    dataFile += `  "devDependencies": {\n`;
    devDependencies.forEach((dependency, index) => {
        dataFile += `    "${dependency.dependency}": "${dependency.version}"`;
        if (index !== (devDependencies.length - 1)) {
            dataFile += `,\n`;
        } else {
            dataFile += `\n`;
        }
    });
    dataFile += `  }\n`;

    dataFile += `}\n`;

    let fileName = `${projectDirectory}/package.json`;

    fs.writeFile(fileName, dataFile, function(err) {

        console.log(chalk.green(fileName));
    });
};

