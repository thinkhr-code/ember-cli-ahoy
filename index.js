/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

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

  treeForVendor: function(vendorTree) {
    var trees = [];
    var ahoyPath = path.dirname(require.resolve('ahoy.js'));

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(ahoyPath, {
      destDir: 'ahoy.js',
      include: [new RegExp(/\.js$/)]
    }));

    return mergeTrees(trees);
  }
};
