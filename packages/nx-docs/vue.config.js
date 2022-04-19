const { defineConfig } = require('@vue/cli-service')

const webpackDashBoard = require('webpack-dashboard')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: config => {

        const plugin = config.plugins;

        plugin.push(new webpackDashBoard())

    }
})