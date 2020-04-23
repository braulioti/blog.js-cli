import {config} from './config';
import * as path from 'path';
import {PageBuilder} from './page/page-builder';

const express = require('express');
const app = express();

app.use('/assets', express.static(`${__dirname}/../views/web/${config.theme}/assets`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

const pageBuilder = new PageBuilder();

app.get('/', function (req, res) { pageBuilder.build(req, res); });
app.get('/:page', function (req, res) { pageBuilder.build(req, res); });
app.get('/:page/:action', function (req, res) { pageBuilder.build(req, res); });
app.get('/:page/:action/:options', function (req, res) { pageBuilder.build(req, res); });

app.listen(config.server_port, function () {
    console.log(`Blog.js listening on port ${config.server_port}!`)
}).json
