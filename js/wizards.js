'use strict';

(function () {
  window.wizards = {};
  var wizardsArr = [];

  window.wizards.generate = function () {
    window.backend.load(function (backendWizards) {
      wizardsArr = [];
      if (typeof backendWizards === 'object') {
        for (var i = 0; i < 4; i++) {
          var randI = window.utils.randArrElement(backendWizards);
          wizardsArr.push(
              {
                name: backendWizards[randI].name,
                coatColor: backendWizards[randI].colorCoat,
                eyesColor: backendWizards[randI].colorEyes,
                colorFireball: backendWizards[randI].colorFireball
              });
        }
      }
      var elements = window.wizards.render();
      if (elements) {
        window.wizards.renderSimular(elements);
      }
    },
    function (error) {
      // onError
      alert(error); // eslint-disable-line
    });
  };

  window.wizards.render = function () {
    // Generate blocks from template
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    var simularListContainer = false;
    if (wizardTemplate) {
      var wizardNode = wizardTemplate.content;

      simularListContainer = document.createDocumentFragment();
      for (var i = 0; i < wizardsArr.length; i++) {
        wizardNode.querySelector('.setup-similar-label').innerHTML = wizardsArr[i].name;
        wizardNode.querySelector('.wizard-coat').setAttribute('fill', wizardsArr[i].coatColor);
        wizardNode.querySelector('.wizard-eyes').setAttribute('fill', wizardsArr[i].eyesColor);
        simularListContainer.appendChild(wizardNode.cloneNode(true));
      }
    }
    return simularListContainer;
  };

  window.wizards.renderSimular = function (simularListContainer) {
    var domSetupsimilar = document.querySelector('.setup-similar');
    domSetupsimilar.querySelector('.setup-similar-list').appendChild(simularListContainer);
    domSetupsimilar.classList.remove('hidden');
  };
})();
