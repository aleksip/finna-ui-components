const fs = require('fs');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

fs.readFile('source/pcss/components.pcss', (err, css) => {
  postcss([
    postcssImport,
    postcssPresetEnv({
      stage: 3,
      preserve: false,
      features: {
        'nesting-rules': true
      }
    })
  ])
    .process(
      css,
      {
        from: 'source/pcss/components.pcss',
        to: 'public/css/components.css',
        map: {
          inline: false
        }
      }
    )
    .then(result => {
      fs.writeFile('public/css/components.css', result.css, () => true);
      if (result.map) {
        fs.writeFile('public/css/components.css.map', result.map.toString(), () => true);
      }
    });
});
