(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['sinon'],
      __esModule: true,
    };
  }

  define('sinon', [], vendorModule);
})();
