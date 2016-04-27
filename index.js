/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ahoy',

  included: function included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ahoy/ahoy.js');
    app.import('vendor/ember-cli-ahoy/shim.js', {
      type: 'vendor',
      exports: { 'ahoy': ['default'] }
    });
  },
};
