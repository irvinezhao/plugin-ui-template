module.exports = {
    devServer: {
        open: true,
        port: 3000,
        proxy: {

        }
    },
    runtimeCompiler: true,
    publicPath: "",
    chainWebpack: config => {
        if (process.env.PLUGIN === "plugin") {
            const img = config.module.rule("images");
            img.uses.clear();
            img
                .use("url-loader")
                .loader("url-loader")
                .options({ limit: 1000000 });

            const svg = config.module.rule("svg");
            svg.uses.clear();
            svg.uses.clear();
            svg
                .use("url-loader")
                .loader("url-loader")
                .options({ limit: 1000000 });
        }

        config.when(process.env.PLUGIN === "plugin", config => {
            config
                .entry("app")
                .clear()
                .add("./src/main-plugin.js"); //作为插件时
        });
    },
    productionSourceMap: process.env.PLUGIN !== "plugin",
    configureWebpack: config => {
        if (process.env.PLUGIN === "plugin") {
            // Do Something
        }
        
    }
}