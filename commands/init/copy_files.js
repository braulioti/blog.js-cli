var fs = require('fs');

const files = [
    'tsconfig.json',
    '.gitignore',
    'src/main.ts',
    'src/page/page-builder.ts',
    'src/page/page-content.ts',
    'src/page/404/page.ts',
    'src/page/index/page.ts',
    'src/plugin/plugin-builder.ts',
    'src/plugin/plugin-content.ts',
    'views/index.ejs',
    'views/web/default/footer.ejs',
    'views/web/default/header.ejs',
    'views/web/default/page.ejs',
    'views/web/default/assets/css/style.css'
];

module.exports = function(projectDirectory) {
    function copy(source, dest) {
        const chalk = require('chalk');

        fs.copyFile(source, dest, (err) => {
            if (err) throw err;
            console.log(chalk.green(dest));
        });
    }

    files.forEach(fileName => {
       copy(`${fileName}_`, `${projectDirectory}/${fileName}`);
    });
};
