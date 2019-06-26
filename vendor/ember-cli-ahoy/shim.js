/* eslint-env node */
/* globals ahoy */

define('ahoy', [], function() {
  "use strict";

  let factory;

  if (typeof ahoy !== 'undefined') {
    factory = ahoy;
  }

  return {
    __esModule: true,

    'default': factory
  };
});
