'use strict';

(function () {
  var blockSetup = document.querySelector('.setup');
  blockSetup.classList.remove('hidden');

  var setupClose = blockSetup.querySelector('.setup-close');

  // по заданию у класса setup-open position absolute и мышкой его не поймать, поставил обработчик на иконку
  var setupIcon = document.querySelector('.setup-open-icon');

  var coatColor = blockSetup.querySelector('.wizard-coat');
  var fireballWraper = blockSetup.querySelector('.setup-fireball-wrap');
  var wizardEyes = blockSetup.querySelector('.wizard-eyes');

  var domInputName = blockSetup.querySelector('input[name=username]');

  // Mock
  var NAME = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAME = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYE = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var properties = {
    names: NAME.slice(),
    surnames: SURNAME.slice(),
    coats: COAT.slice(),
    eyes: EYE.slice()
  };

  var wizards = [];

  var deleteDuplicates = function (value, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      }
    }
  };

  var randArrElement = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  var generateElements = function () {
    // Generate blocks from template
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    var simularListContainer = false;
    if (wizardTemplate) {
      var wizardNode = wizardTemplate.content;

      // не уверен что так правильно. Идея была такая создать createDocumentFragment, в него циклом напихать ноды из шаблона
      // и потом добавить разом в дом

      simularListContainer = document.createDocumentFragment();

      for (var i = 0; i < wizards.length; i++) {
        wizardNode.querySelector('.setup-similar-label').innerHTML = wizards[i].name();
        wizardNode.querySelector('.wizard-coat').setAttribute('fill', wizards[i].coatColor());
        wizardNode.querySelector('.wizard-eyes').setAttribute('fill', wizards[i].eyesColor());
        simularListContainer.appendChild(wizardNode.cloneNode(true));
      }
    }
    return simularListContainer;
  };

  var renderSimularWizards = function (simularListContainer) {
    var domSetupsimilar = document.querySelector('.setup-similar');
    domSetupsimilar.querySelector('.setup-similar-list').appendChild(simularListContainer);
    domSetupsimilar.classList.remove('hidden');
  };

  var generateWizards = function () {
    for (var i = 0; i < 4; i++) {
      wizards.push({
        name: function () {
          var name = properties.names[randArrElement(properties.names)];
          var surname = properties.surnames[randArrElement(properties.surnames)];
          deleteDuplicates(name, properties.names);
          deleteDuplicates(surname, properties.surnames);
          return name + ' ' + surname;
        },
        coatColor: function () {
          var coat = properties.coats[randArrElement(properties.coats)];
          deleteDuplicates(coat, properties.coats);
          return coat;
        },
        eyesColor: function () {
          var eye = properties.eyes[randArrElement(properties.eyes)];
          deleteDuplicates(eye, properties.eyes);
          return eye;
        }
      });
    }
  };

  var onSetupClick = function () {
    var setupPopUpClasses = blockSetup.classList;
    setupPopUpClasses.forEach(function (itemClass) {
      if (itemClass === 'hidden') {
        setupPopUpClasses.remove('hidden');
      } else {
        setupPopUpClasses.add('hidden');
      }
    });
  };

  var onKeyDownESC = function (evt) {
    if (evt.keyCode === 27) {
      onSetupClick();
    }
  };

  var onKeyDownEnter = function (evt) {
    if (evt.keyCode === 13) {
      onSetupClick();
    }
  };

  // запуск
  generateWizards();

  var elements = generateElements();
  if (elements) {
    renderSimularWizards(elements);
  }

  // эвенты
  setupClose.addEventListener('click', onSetupClick);
  setupClose.addEventListener('keydown', onKeyDownEnter);

  setupIcon.addEventListener('click', onSetupClick);

  setupIcon.addEventListener('keydown', onKeyDownEnter);

  document.addEventListener('keydown', onKeyDownESC);

  domInputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onKeyDownESC);
  });

  domInputName.addEventListener('blur', function () {
    document.addEventListener('keydown', onKeyDownESC);
  });

  coatColor.addEventListener('click', function () {
    var color = COAT[randArrElement(COAT)];
    blockSetup.querySelector('input[name=coat-color]').value = color;
    coatColor.setAttribute('style', 'fill: ' + color);
  });

  fireballWraper.addEventListener('click', function () {
    var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var color = colors[randArrElement(colors)];
    blockSetup.querySelector('input[name=fireball-color]').value = color;
    fireballWraper.setAttribute('style', 'background-color: ' + color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = EYE[randArrElement(EYE)];
    blockSetup.querySelector('input[name=eyes-color]').value = color;
    wizardEyes.setAttribute('style', 'fill: ' + color);
  });

})();


