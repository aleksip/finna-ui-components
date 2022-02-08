// Copies assets from node_modules to vendor directories under the public directory.

const fs = require("fs-extra");

// CSS
fs.copySync('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'public/css/vendor/fontawesome-free/all.min.css');
fs.copySync('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/fonts');
fs.copySync('node_modules/jquery-ui-dist/images', 'public/css/vendor/jquery-ui/images');
fs.copySync('node_modules/jquery-ui-dist/jquery-ui.min.css', 'public/css/vendor/jquery-ui/jquery-ui.min.css');

// JavaScript
fs.copySync('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'public/js/vendor/bootstrap.bundle.min.js');
fs.copySync('node_modules/jquery/dist/jquery.min.js', 'public/js/vendor/jquery.min.js');
fs.copySync('node_modules/jquery-ui-dist/jquery-ui.min.js', 'public/js/vendor/jquery-ui.min.js');
