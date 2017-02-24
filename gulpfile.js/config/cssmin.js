var config = require('./')

module.exports = {
  src: [config.appAssets + 'css/*.css', '!' + config.appAssets + 'css/maps', '!' + config.appAssets + 'css/*.min.css'],
  dest: config.appAssets + 'css/'
}