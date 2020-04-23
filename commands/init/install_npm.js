const childProcess = require('child_process');

module.exports = function(projectName) {
    const chalk = require('chalk');
    const command = `cd ${projectName} && npm install`;

    childProcess.exec(command, {}, (error, stdout, stderr) => {
            if (error) {
                console.log(chalk.red('error when installing npm packages'));
                console.log(chalk.red(stderr));
            } else {
                console.log(chalk.green('npm packages successfully installed!'));
            }
        });
};
