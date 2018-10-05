'use strict';

(function () {
  var dialogBox = document.querySelector('.setup');
  var dialogHandler = dialogBox.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinates = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (mouseEvt) {
      mouseEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoordinates.x - mouseEvt.clientX,
        y: startCoordinates.y - mouseEvt.clientY
      };

      startCoordinates = {
        x: mouseEvt.x,
        y: mouseEvt.y
      };

      dialogBox.style.left = (dialogBox.offsetLeft - shift.x) + 'px';
      dialogBox.style.top = (dialogBox.offsetTop - shift.y) + 'px';

    };

    var onMouseUp = function (mouseEvt) {
      var onClickPreventDefault = function (evtM) {
        evtM.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };

      if (dragged) {
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

      mouseEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
