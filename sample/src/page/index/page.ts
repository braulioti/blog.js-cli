import {PageContent} from '../page-content';

export class Page extends PageContent {
    render(options?: any) {
        return '<h1>Welcome to BlogJS!!</h1>';
    }

    getPagePlugins() {
        return [];
    }
}
