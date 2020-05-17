let myArray = [4, 10, 6, -7, 12, 15, 0, 3, -25, 9];

min = myArray[0];
max = min;
    for (i = 1; i < myArray.length; ++i) {
        if (myArray[i] > max) max = myArray[i];
        if (myArray[i] < min) min = myArray[i];
    }

alert('Максимальный элемент в массиве это число ' + max);
alert('Минимальный элемент в массиве это число ' + min);
