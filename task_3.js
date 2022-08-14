window.addEventListener('load', function () {
  function getSum (a) {
    return function (b) {
      return a + b;
    }
  }

  const getResult = getSum(5);

  console.log('The result is', getResult(4))
});
