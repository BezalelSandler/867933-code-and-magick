'use strict';

(function () {
  var blockSetup = document.querySelector('.setup');
  blockSetup.classList.remove('hidden');

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

  function deleteDuplicates(value, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      }
    }
  }

  function randArrElement(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function generateElements() {
    // Generate blocks from template
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    if (wizardTemplate) {
      var wizardNode = wizardTemplate.content;

      // не уверен что так правильно. Идея была такая создать createDocumentFragment, в него циклом напихать ноды из шаблона
      // и потом добавить разом в дом

      var simularListContainer = document.createDocumentFragment();

      for (var i = 0; i < wizards.length; i++) {
        wizardNode.querySelector('.setup-similar-label').innerHTML = wizards[i].name();
        wizardNode.querySelector('.wizard-coat').setAttribute('fill', wizards[i].coatColor());
        wizardNode.querySelector('.wizard-eyes').setAttribute('fill', wizards[i].eyesColor());
        simularListContainer.appendChild(wizardNode.cloneNode(true));
      }
      return simularListContainer;
    } else {
      return false;
    }
  }

  function renderSimularWizards(simularListContainer) {
    document.querySelector('.setup-similar-list').appendChild(simularListContainer);
    document.querySelector('.setup-similar').classList.remove('hidden');
  }

  // запуск
  var properties = {
    names: NAME.slice(),
    surnames: SURNAME.slice(),
    coats: COAT.slice(),
    eyes: EYE.slice()
  };
  var wizards = [];
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

  // Обработка событий, всплывающее окно
  var onSetupClick = function () {
    var setupPopUpClasses = document.querySelector('.setup').classList;
    setupPopUpClasses.forEach(function (itemClass) {
      if (itemClass === 'hidden') {
        setupPopUpClasses.remove('hidden');
      } else {
        setupPopUpClasses.add('hidden');
      }
    });
  };

  // точка входа
  var elements = generateElements();
  if (elements) {
    renderSimularWizards(elements);
  }

  var setupClose = document.querySelector('.setup-close');
  setupClose.setAttribute('tabindex', '0');

  // по заданию у класса setup-open position absolute и мышкой его не поймать, поставил обработчик на иконку
  var setupIcon = document.querySelector('.setup-open-icon');
  setupIcon.setAttribute('tabindex', '0');

  // Валидация, непонятно правда в каком месте тут валидация, разве что паттерн добавить, в html и так уже почти все есть для задания
  // в задании про setCustomValidity ничего не нашел, только максимальная и мин длинна имени, которая максимальная уже проставлена в html
  var inputName = document.querySelector('input[name=username]');
  inputName.setAttribute('minlength', '2');

  // генерация цветов мага по нажатию
  var coatColor = document.querySelector('.wizard-coat');
  var fireballWraper = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.wizard-eyes');


  // эвенты
  setupClose.addEventListener('click', onSetupClick);
  setupIcon.addEventListener('click', onSetupClick);

  setupIcon.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      onSetupClick();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      onSetupClick();
    }
  });

  coatColor.addEventListener('click', function () {
    var color = COAT[randArrElement(COAT)];
    document.querySelector('input[name=coat-color]').value = color;
    coatColor.setAttribute('style', 'fill: ' + color);
  });

  fireballWraper.addEventListener('click', function () {
    var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var color = colors[randArrElement(colors)];
    document.querySelector('input[name=fireball-color]').value = color;
    fireballWraper.setAttribute('style', 'background-color: ' + color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = EYE[randArrElement(EYE)];
    document.querySelector('input[name=eyes-color]').value = color;
    wizardEyes.setAttribute('style', 'fill: ' + color);
  });

})();


