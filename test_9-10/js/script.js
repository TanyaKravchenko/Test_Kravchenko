let array = [5, 12, 3, -8, -55, 10, 0, 99, -25, 1];
let max =  findMax(array);

function findMax(array){
    let max = array[0];
    for (let i = 0; i < array.length; i++) { 
        if (max < array[i]) max = array[i]; 
    }
    return max;
};

setTimeout ('alert("Максимальный элемент в массиве это число " + max)', 3000);