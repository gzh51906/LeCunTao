module.exports = function override(config, env) {
    // 修改配置
    // config.resolve.alias['@'] = path.join(__dirname,'./src/')

    // Object.assign(config.resolve.alias,{
    //     '@':path.join(__dirname,'./src/'),
    //     '@@':path.join(__dirname,'./src/components'),
    //     '~':path.join(__dirname,'./src/pages')
    // })
    return config;
}