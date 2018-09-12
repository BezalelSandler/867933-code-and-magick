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

  var Wizards = [
  // очень много дубликатов кода получилось, не знаю как динамически сформировать этот оъект
  {
    name: NAME[randArrElement(NAME)] + ' ' + SURNAME[randArrElement(SURNAME)],
    coatColor: COAT[randArrElement(COAT)],
    eyesColor: EYE[randArrElement(EYE)]
  },
  {
    name: NAME[randArrElement(NAME)] + ' ' + SURNAME[randArrElement(SURNAME)],
    coatColor: COAT[randArrElement(COAT)],
    eyesColor: EYE[randArrElement(EYE)]
  },
  {
    name: NAME[randArrElement(NAME)] + ' ' + SURNAME[randArrElement(SURNAME)],
    coatColor: COAT[randArrElement(COAT)],
    eyesColor: EYE[randArrElement(EYE)]
  },
  {
    name: NAME[randArrElement(NAME)] + ' ' + SURNAME[randArrElement(SURNAME)],
    coatColor: COAT[randArrElement(COAT)],
    eyesColor: EYE[randArrElement(EYE)]
  }
  ];

  function randArrElement(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function generateElements() {
    // Generate blocks from template
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    if(wizardTemplate){
      var wizardNode = wizardTemplate.content;

      // не уверен что так правильно. Идея была такая создать createDocumentFragment, в него циклом напихать ноды из шаблона
      // и потом добавить разом в дом

      var simularListContainer = document.createDocumentFragment();

      for(var i=0; i<Wizards.length; i++){
        wizardNode.querySelector('.setup-similar-label').innerHTML = Wizards[i].name;
        wizardNode.querySelector('.wizard-coat').setAttribute('fill',Wizards[i].coatColor)
        wizardNode.querySelector('.wizard-eyes').setAttribute('fill',Wizards[i].eyesColor)
        simularListContainer.appendChild(wizardNode.cloneNode(true));
      }
      return simularListContainer;
    }
    else return false;
  }

  function renderSimularWizards(simularListContainer) {
    var simularList = document.querySelector('.setup-similar-list').appendChild(simularListContainer);
    document.querySelector('.setup-similar').classList.remove('hidden');
  }

  var elements = generateElements();
  if(elements){
    renderSimularWizards(elements);
  }

})();



