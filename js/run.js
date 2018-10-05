'use strict';

(function () {
  var wizards = window.wizards;

  wizards.generate();

  var elements = wizards.render();
  if (elements) {
    wizards.renderSimular(elements);
  }
})();
