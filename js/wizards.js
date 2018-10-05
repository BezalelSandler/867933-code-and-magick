'use strict';

(function () {
  var setup = window.setup; // eslint :(
  var wizardsArr = [];
  window.wizards = {};

  var properties = {
    names: setup.mock.NAME.slice(),
    surnames: setup.mock.SURNAME.slice(),
    coats: setup.mock.COAT.slice(),
    eyes: setup.mock.EYE.slice()
  };

  window.wizards.generate = function () {
    for (var i = 0; i < 4; i++) {
      wizardsArr.push({
        name: function () {
          var name = properties.names[window.utils.randArrElement(properties.names)];
          var surname = properties.surnames[window.utils.randArrElement(properties.surnames)];
          window.utils.deleteDuplicates(name, properties.names);
          window.utils.deleteDuplicates(surname, properties.surnames);
          return name + ' ' + surname;
        },
        coatColor: function () {
          var coat = properties.coats[window.utils.randArrElement(properties.coats)];
          window.utils.deleteDuplicates(coat, properties.coats);
          return coat;
        },
        eyesColor: function () {
          var eye = properties.eyes[window.utils.randArrElement(properties.eyes)];
          window.utils.deleteDuplicates(eye, properties.eyes);
          return eye;
        }
      });
    }
  };

  window.wizards.render = function () {
    // Generate blocks from template
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    var simularListContainer = false;
    if (wizardTemplate) {
      var wizardNode = wizardTemplate.content;

      simularListContainer = document.createDocumentFragment();

      for (var i = 0; i < wizardsArr.length; i++) {
        wizardNode.querySelector('.setup-similar-label').innerHTML = wizardsArr[i].name();
        wizardNode.querySelector('.wizard-coat').setAttribute('fill', wizardsArr[i].coatColor());
        wizardNode.querySelector('.wizard-eyes').setAttribute('fill', wizardsArr[i].eyesColor());
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
