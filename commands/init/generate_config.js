const fs = require('fs');

module.exports = function(projectDirectory, serverPort) {
    const chalk = require('chalk');
    let dataFile = `export const config = {\n  "theme": "default",\n  "server_port": "${serverPort}"\n};`;
    let fileName = `${projectDirectory}/src/config.ts`;

    fs.writeFile(fileName, dataFile, function(err) {

        console.log(chalk.green(`${projectDirectory}/src/config.ts`));
    });
};

