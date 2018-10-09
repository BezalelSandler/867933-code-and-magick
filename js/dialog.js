'use strict';

(function () {
  var setup = window.setup;
  var utils = window.utils;

  var setupClose = setup.dom.querySelector('.setup-close');

  var coatColor = setup.dom.querySelector('.wizard-coat');
  var fireballWraper = setup.dom.querySelector('.setup-fireball-wrap');
  var wizardEyes = setup.dom.querySelector('.wizard-eyes');

  var setupForm = setup.dom.querySelector('.setup-wizard-form');
  var domInputName = setup.dom.querySelector('input[name=username]');

  setup.dom.classList.remove('hidden');

  // эвенты
  setupClose.addEventListener('click', utils.onSetupClick);
  setupClose.addEventListener('keydown', utils.onKeyDownEnter);

  setup.open.addEventListener('click', utils.onSetupClick);

  setup.open.addEventListener('keydown', utils.onKeyDownEnter);

  document.addEventListener('keydown', utils.onKeyDownESC);

  domInputName.addEventListener('focus', function () {
    document.removeEventListener('keydown', utils.onKeyDownESC);
  });

  domInputName.addEventListener('blur', function () {
    document.addEventListener('keydown', utils.onKeyDownESC);
  });

  coatColor.addEventListener('click', function () {
    var color = setup.mock.COAT[utils.randArrElement(setup.mock.COAT)];
    setup.dom.querySelector('input[name=coat-color]').value = color;
    coatColor.setAttribute('style', 'fill: ' + color);
  });

  fireballWraper.addEventListener('click', function () {
    var colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var color = colors[utils.randArrElement(colors)];
    setup.dom.querySelector('input[name=fireball-color]').value = color;
    fireballWraper.setAttribute('style', 'background-color: ' + color);
  });

  wizardEyes.addEventListener('click', function () {
    var color = setup.mock.EYE[utils.randArrElement(setup.mock.EYE)];
    setup.dom.querySelector('input[name=eyes-color]').value = color;
    wizardEyes.setAttribute('style', 'fill: ' + color);
  });

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm),
        function (response) {
        // onLoad
          if (response.status === 200) {
            window.utils.onSetupClick();
          }
        },
        function (error) {
          // onError
            alert(error); // eslint-disable-line
        });
    evt.preventDefault();
  });
})();
