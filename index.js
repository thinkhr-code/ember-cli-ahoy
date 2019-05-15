/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-ahoy',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var vendor = this.treePaths.vendor;
    var ahoyPath = vendor + '/ahoy.js/ahoy.js';
    var shimPath = 'vendor/ember-cli-ahoy/shim.js';
    var context = this;

    [ahoyPath, shimPath].forEach(function(path) {
      if (context.import) {
        context.import(path);
      } else {
        app.import(path);
      }
    });
  },

  treeForVendor: function (defaultTree) {
    var ahoyPath = path.dirname(require.resolve('ahoy.js'));
    var browserVendorLib = new Funnel(ahoyPath, {
      destDir: 'ahoy.js',
      include: [new RegExp(/\.js$/)]
    });

    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return new mergeTrees([defaultTree, browserVendorLib]);
  }
};
