module.exports = {
    presets: ["next/babel"],
    plugins: [
        "babel-plugin-transform-typescript-metadata",
        ["superjson-next"],
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
}