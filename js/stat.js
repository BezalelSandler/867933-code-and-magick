'use strict';

(function () {
  window.renderStatistics = function (ctx, names, times) {

    // Облако
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    // Облако
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    // Заголовок
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 240, 45);
    ctx.fillText('Список результатов:', 225, 65);

    function drawResults(name, time) {
      var xPosition = 150;
      var widthColumn = 40;
      var marginColumn = 50;
      var heightResults = scoreToPx(time);
      name.forEach(function (item, i) {
        var color = 'rgba(51, 51, 153, ' + getRandomAlpha() + ')';
        if (item === 'Вы') {
          color = 'rgba(255, 0, 0, 1)';
        }

        ctx.fillStyle = color;
        ctx.font = '16px PT Mono';

        // Имена
        ctx.fillText(name, xPosition, 265);
        ctx.fillStyle = color;

        // Графики
        ctx.fillRect(xPosition, 245, widthColumn, heightResults[i]);

        // счет
        ctx.font = '12px PT Mono';
        ctx.fillText(times[i].toFixed(0), xPosition + 5, heightResults[i] + 235);

        // сдвиг по Х
        xPosition += widthColumn + marginColumn;
      });
    }

    function scoreToPx(items) {
      // переводим время в высоту пикселей отрицательную, т.к. строим снизу вверх
      var yArea = 150; // высота области 100%
      var maxVal = Math.max.apply(null, times);
      var ratio = yArea / maxVal;
      var pixels = [];
      items.forEach(function (time, i) {
        pixels[i] = time * -ratio;
      });
      return pixels;
    }

    function getRandomAlpha() {
      // для получения случайной прозрачности от 0.4 до 1
      var rand = Math.round(Math.random() * 10) / 10;
      if (rand <= 0.4) {
        rand = rand += +0.6;
      }
      return rand;
    }
    drawResults(names, times);
  };
}());
