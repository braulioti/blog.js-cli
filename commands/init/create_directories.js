var fs = require('fs');

module.exports = function(sourceFolder) {
    if (!fs.existsSync(sourceFolder)) {
        fs.mkdirSync(sourceFolder);
        fs.mkdirSync(`${sourceFolder}/src`);
        fs.mkdirSync(`${sourceFolder}/src/page`);
        fs.mkdirSync(`${sourceFolder}/src/page/404`);
        fs.mkdirSync(`${sourceFolder}/src/page/index`);
        fs.mkdirSync(`${sourceFolder}/src/plugin`);
        fs.mkdirSync(`${sourceFolder}/src/views`);
        fs.mkdirSync(`${sourceFolder}/src/views/admin`);
        fs.mkdirSync(`${sourceFolder}/src/views/web`);
        fs.mkdirSync(`${sourceFolder}/src/views/web/default`);
        fs.mkdirSync(`${sourceFolder}/src/views/web/assets`);
        fs.mkdirSync(`${sourceFolder}/src/views/web/assets/css`);
        fs.mkdirSync(`${sourceFolder}/src/views/web/assets/js`);
        fs.mkdirSync(`${sourceFolder}/src/views/web/assets/img`);
    }
};
