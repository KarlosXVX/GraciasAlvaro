// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }

}

// Otras formas

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

//En términos simples, el operador ternario verifica si el número es negativo. Si lo es, devuelve el número sin cambios;
// si no lo es, devuelve la negación del número, haciéndolo negativo. Esto es una forma más concisa de expresar la
// lógica en comparación con una declaración if-else explícita.

function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

//  Quitar el primer y último elemento de un string
function removeChar(str) {
  return str.slice(1, -1);
}


//repetir un string

function repeatStr(n, s) {
  return s.repeat(n);
}

function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++)
    str += s;
  return str;
}

//Sumatorio 

var summation = function (num) {
  let result = 0;

  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

//remove space of a string

function noSpace(x) {
  const words = x.split(" ");
  const wordsjoin = words.join("");
  return wordsjoin

}

function noSpace(x) {
  return x.replace(/\s/g, '');
}

function noSpace(x) { return x.split(' ').join('') }


//Encontrar el número más pequeño

class SmallestIntegerFinder {
  findSmallestInt(args) {
    // Utilizar Math.min junto con el operador de propagación (...) para encontrar el valor mínimo
    const smallestInteger = Math.min(...args);

    return smallestInteger;
  }
}

//Counting sheeps (REPASAR)

function countSheeps(sheep) {
  if (!sheep || !Array.isArray(sheep)) {
    // Manejar casos en los que el arreglo no esté definido o no sea un arreglo
    return 'Invalid input';
  }

  // Filtrar solo los valores true en el arreglo y contarlos
  const presentSheep = sheep.filter(value => value === true);
  return presentSheep.length;
}


//<Number to array of digits:

function digitize(n) {
  // Convertir el número a una cadena, invertir la cadena y luego convertir cada dígito a un número
  return String(n).split('').map(Number).reverse();
}

// find the needle

function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  if (index !== -1) {
    return "found the needle at position " + index;
  } else {
    return "needle not found";
  }
}

// Ejemplo de uso:
const haystackArray = ["apple", "banana", "needle", "orange"];
console.log(findNeedle(haystackArray));

// más fácil
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


// Sumar positivos y negativos

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
    // No hacemos nada si es cero, ya que 0 no es ni positivo ni negativo.
  }

  return [countPositives, sumNegatives];
}

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0)
      ++positive;
    else
      negative += input[i];
  }

  return [positive, negative];
}

// Masa corporal

function bmi(weight, height) {
  var result = weight / Math.pow(height, 2)

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }

}

function bmi(weight, height) {

  var bmi = weight / (height * height);

  return bmi < 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}

// Sum Numbers
function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const SumN = numbers.reduce((acc, num) => acc + num, 0);
  return SumN;
}

// Esta línea utiliza el método reduce en JavaScript para sumar todos los elementos de un array llamado numbers. Aquí está la explicación de cada parte:

// numbers: Es el array en el que estamos operando.

// reduce: Es un método de los arrays en JavaScript que se utiliza para reducir el array a un solo valor. En este caso, estamos reduciendo el array numbers a un solo valor, que es la suma de todos sus elementos.

// (acc, num) => acc + num: Es una función de retorno de llamada (callback) que se ejecuta en cada elemento del array. acc es el acumulador, que es el valor acumulado durante las iteraciones, y num es el valor actual del elemento del array. En cada iteración, sumamos el valor actual (num) al acumulador (acc).

// , 0: El segundo argumento de reduce es el valor inicial del acumulador (acc). En este caso, lo hemos establecido en 0. Esto significa que la primera vez que se ejecuta la función de retorno de llamada, el valor inicial de acc será 0.

// En resumen, esta línea está sumando todos los elementos del array numbers utilizando el método reduce, empezando con un acumulador de 0. El resultado final se almacena en la variable sum.

sum = function (numbers) {
  "use strict";
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// Sumar Arrays, dos formas

function sumArray(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum;
}

// Ejemplo de uso:
const array1 = [1, 2, 3, 4, 5];
const array2 = [-1, 2.5, 3, -4.5];
const array3 = [];

console.log(sumArray(array1)); // Resultado: 15
console.log(sumArray(array2)); // Resultado: 0
console.log(sumArray(array3)); // Resultado: 0


function arrayPlusArray(arr1, arr2) {
  // Suma todos los elementos de arr1 y arr2 usando el método reduce
  const sumArr1 = arr1.reduce((acc, num) => acc + num, 0);
  const sumArr2 = arr2.reduce((acc, num) => acc + num, 0);

  // Retorna la suma total de ambos arrays
  return sumArr1 + sumArr2;
}

// Ejemplo de uso:
const result = arrayPlusArray([1, 2, 3], [4, 5, 6]);
console.log(result); // Debería imprimir 21 (1 + 2 + 3 + 4 + 5 + 6)


function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) { return a - b; });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}