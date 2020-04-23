import * as path from "path";
import {config} from '../config';
import {PageContent} from './page-content';
import {PluginBuilder} from '../plugin/plugin-builder';

export class PageBuilder {
    getPage(params): any {
        try {
            if (!params.page) {
                return require('./index/page');
            } else {
                return require(`./${params.page}/page`);
            }
        }
        catch (e) {
            return require('./404/page');
        }
    }

    private getGlobalPlugins() {
        const aux = [];

        const pluginBuilder = new PluginBuilder();

        // aux.push(pluginBuilder.build('top_menu', 'menu', {}));

        return aux;
    }

    build = (req, res) => {
        const page = this.getPage(req.params);
        const pageComponent: PageContent = new page.Page();

        const content = pageComponent.render();
        const plugins = this.getGlobalPlugins().concat(pageComponent.getPagePlugins());

        res.render(`index.ejs`, {
            indexPage: path.join(`web/${config.theme}/page.ejs`),
            content: content,
            folders: {
                templateFolder: `${__dirname}/web/${config.theme}`
            },
            plugins: plugins
        });
    }
}
