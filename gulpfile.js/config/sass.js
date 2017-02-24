var config = require('./')
,   argv   = require('yargs').argv;

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceDirectory + "sass/**/*.scss",
  dest: (argv.proto) ? config.prototypeAssets + 'css' : config.appAssets + 'css',
  settings: {
    indentedSyntax: false,
    sourceComments: false,
    errLogToConsole: true,
    includePaths: [
        './raw/bower/',
        './node_modules/'
    ],
    outputStyle: 'nested',
    imagePath: '../img' // Used by the image-url helper
  }
}
