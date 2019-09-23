const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra");


module.exports = override(
    module({
        rules: [
            {
                test: /\.css$/i,
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    }),
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A" }
    })
);