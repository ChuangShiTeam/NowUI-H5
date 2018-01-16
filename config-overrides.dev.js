module.exports = function(config) {

    config.module.loaders[2].loader = 'style!css?modules';

    return config;
}