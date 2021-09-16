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
                        '@components': './src/components',
                        '@context': './src/context',
                        '@hooks': './src/hooks',
                        '@screens': './src/screens',
                        '@customTypes': './src/types',
                        '@utils': './src/utils',
                        '@params': './src/params',
                        '@firebaseInit': './src/firebaseConfig',
                    },
                },
            ],
        ],
    }
}
