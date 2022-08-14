window.addEventListener('load', function () {
  function counter(a, b) {
    setInterval(function () {
      if (a <= b) {
        console.log(a++);
      }
    }, 1000);
  }

  counter(1, 7);
});
