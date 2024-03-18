const config = {
    entry: ['src/index.js'],
    project: ['src/**/*.js'],
    ignore: [],
    ignoreExportsUsedInFile: true,
    rules: {
        dependencies: 'off',
        unlisted: 'off',
        binaries: 'off',
    },
};

export default config;
