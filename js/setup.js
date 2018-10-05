'use strict';

(function () {

  window.setup = {};
  window.setup.dom = document.querySelector('.setup');
  window.setup.open = document.querySelector('.setup-open-icon');

  window.setup.mock = {
    NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    SURNAME: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYE: ['black', 'red', 'blue', 'yellow', 'green']
  };

  window.setup.startCoordinates = {
    x: window.setup.dom.style.left, // eslint :(
    y: window.setup.dom.style.top
  };

  // перенес из index.html первого задания
  window.fireballSize = 22;
  window.wizardSpeed = 3;
  window.wizardWidth = 70;

  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };

  window.getWizardHeight = function (width) {
    return width * 1.337;
  };

  window.getWizardX = function (width) {
    return width / 2.222;
  };

  window.getWizardY = function (height) {
    return height / 2.906;
  };

})();


