export class PluginBuilder {
    build = (position, plugin, options) => {
        const pluginContent = require(`./${plugin}/plugin`);
        const myPlugin = new pluginContent.Plugin();

        return {
            position: position,
            content: myPlugin.render(options)
        }
    }
}
