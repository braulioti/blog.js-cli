module.exports = async function(projectName) {
    var fs = require('fs');
    var dir = `${projectName}`;

    const chalk = require('chalk');
    const clear = require('clear');
    const figlet = require('figlet');
    const inquirer = require('inquirer');

    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('Blog.js', { horizontalLayout: 'full' })
        )
    );

    console.log(chalk.blue('\nCreating a new Project\n'));

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);

        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter your name:',
                // default: argv._[0] || files.getCurrentDirectoryBase(),
                // validate: function( value ) {
                //     if (value.length) {
                //         return true;
                //     } else {
                //         return 'Please enter a name for the repository.';
                //     }
                // }
            },
            {
                type: 'list',
                name: 'visibility',
                message: 'Public or private:',
                choices: [ 'public', 'private' ],
                default: 'public'
            }
        ];

        const test = await inquirer.prompt(questions);
        console.log(test);
    }
};
