'use strict';

(function () {
  window.utils = {}; // без этого при инициализации объекта вызывается функция deleteDuplicates

  window.utils.deleteDuplicates = function (value, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      }
    }
  };

  window.utils.randArrElement = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  window.utils.onSetupClick = function () {
    var setupPopUpClasses = window.setup.dom.classList;
    setupPopUpClasses.forEach(function (itemClass) {
      if (itemClass === 'hidden') {
        setupPopUpClasses.remove('hidden');
      } else {
        setupPopUpClasses.add('hidden');
        window.setup.dom.style.left = window.setup.startCoordinates.x;
        window.setup.dom.style.top = window.setup.startCoordinates.y;
      }
    });
  };

  window.utils.onKeyDownESC = function (evt) {
    if (evt.keyCode === 27) {
      window.utils.onSetupClick();
    }
  };

  window.utils.onKeyDownEnter = function (evt) {
    if (evt.keyCode === 13) {
      window.utils.onSetupClick();
    }
  };
})();
