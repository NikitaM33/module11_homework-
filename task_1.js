window.addEventListener('load', function() {
    const arr1 = [15, [], {}, 21, 13, '!', 3, 8, 65, null, 15, 'A', 15, 8, 5, 9, 7, 0, 12];

    function isEven(arr) {
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && typeof arr[i] === 'number') {
                // Если в массиве есть 0
                if (arr[i] === 0) {
                    console.log('Присутствует 0');
                    continue;
                }

                evens.push(arr[i]);
            } else if (arr[i] % 2 !== 0 && typeof arr[i] !== 'string' && typeof arr[i] !== 'object') {
                odds.push(arr[i]);
            }
        }

        console.log(`Четных ${evens.length}, нечетных ${odds.length}`);
    }

    isEven(arr1);
});