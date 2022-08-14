window.addEventListener('load', function () {
  function isSimpleNum(n) {
    var res = '';
    var isComposite = false;
    var err = false;
    var sqrt = Math.sqrt(n);

    // Ошибка если число <= 1 или 0 и больше 1000 
    if (n <= 1 || n >= 1000) {
      err = true;
    }

    // Проверка проостое или составное число
    if (n === 2 || n === 3) {
      res = 'Простое';
    } else if (n % 2 === 0 || n % 3 === 0) {
      res = 'Составное';
    } else {
      for (let i = 5; i <= sqrt; i += 6) {
        if (n % i === 0) {
          isComposite = true;
          break;
        }
      }

      if (!isComposite) {
        for (let i = 7; i <= sqrt; i += 6) {
          if (n % i === 0) {
            isComposite = true;
            break;
          }
        }
      }

      if (isComposite) {
        res = 'Составное';
      } else {
        res = 'Простое';
      }
    }

    if (err) {
      res = 'Данные неверны';
    }

    console.log(res);
  }

  isSimpleNum(999);
});
