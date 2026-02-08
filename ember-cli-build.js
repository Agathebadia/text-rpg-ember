'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')(), // do NOT pass a path, default works
          require('autoprefixer')()
        ],
      },
    },
  });

  return app.toTree();
};
