var fs = require('fs');

module.exports = function(sourceFolder) {
    if (!fs.existsSync(sourceFolder)) {
        fs.mkdirSync(sourceFolder);
        fs.mkdirSync(`${sourceFolder}/src`);
        fs.mkdirSync(`${sourceFolder}/src/page`);
        fs.mkdirSync(`${sourceFolder}/src/page/404`);
        fs.mkdirSync(`${sourceFolder}/src/page/index`);
        fs.mkdirSync(`${sourceFolder}/src/plugin`);
        fs.mkdirSync(`${sourceFolder}/views`);
        fs.mkdirSync(`${sourceFolder}/views/admin`);
        fs.mkdirSync(`${sourceFolder}/views/web`);
        fs.mkdirSync(`${sourceFolder}/views/web/default`);
        fs.mkdirSync(`${sourceFolder}/views/web/default/assets`);
        fs.mkdirSync(`${sourceFolder}/views/web/default/assets/css`);
        fs.mkdirSync(`${sourceFolder}/views/web/default/assets/js`);
        fs.mkdirSync(`${sourceFolder}/views/web/default/assets/img`);
    }
};
