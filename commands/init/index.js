module.exports = async function(projectName) {
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

    const questions = [
        {
            type: 'input',
            name: 'serverPort',
            message: 'Server Port (default 3000):'
        },
        {
            type: 'input',
            name: 'projectName',
            message: 'Project Name:'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Project Description:'
        },
        {
            type: 'input',
            name: 'version',
            message: 'Version (default 1.0.0):'
        },
        {
            type: 'input',
            name: 'author',
            message: 'Author:'
        }
    //     {
    //         type: 'input',
    //         name: 'name',
    //         message: 'Enter your name:',
    //         // default: argv._[0] || files.getCurrentDirectoryBase(),
    //         // validate: function( value ) {
    //         //     if (value.length) {
    //         //         return true;
    //         //     } else {
    //         //         return 'Please enter a name for the repository.';
    //         //     }
    //         // }
    //     },
    //     {
    //         type: 'list',
    //         name: 'visibility',
    //         message: 'Public or private:',
    //         choices: [ 'public', 'private' ],
    //         default: 'public'
    //     }
    ];

    const answers = await inquirer.prompt(questions);

    if (!answers.serverPort || !answers.serverPort === '') {
        answers.serverPort = 3000;
    }
    if (!answers.version || !answers.version === '') {
        answers.version = '1.0.0';
    }

    console.log('\n');
    require('./create_directories')(dir);
    require('./generate_config')(dir, answers.serverPort);
    require('./generate_package_json')(dir, answers.projectName, answers.version, answers.projectDescription,
        answers.author);
};
