module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@colors': './src/colors',
                        '@context': './src/context',
                        '@hooks': './src/hooks',
                        '@screens': './src/screens',
                        '@types': './src/types',
                        '@utils': './src/utils',
                    },
                },
            ],
        ],
    }
}
