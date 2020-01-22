module.exports = {
    // fichier d'entrée de l'application par défaut, 'src/index.js'
    entry: __dirname + "/src/app.ts",
    // fichier de sortie, par défaut 'dist/index.js'
    output: {
        // répertoire de destination, en valeur absolue
        path: __dirname + "/dist",
        // si non précisé, le nom est le nom du fichier d'entrée
        filename: "app.js"
    },

    // "production" | "development" | "none"
    mode: "development",

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },

};