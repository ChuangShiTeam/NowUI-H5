module.exports = function(config) {

    config.module.loaders[2].loader = 'style!css?modules&localIdentName=[local]-[hash:base64:5]';

    return config;
}