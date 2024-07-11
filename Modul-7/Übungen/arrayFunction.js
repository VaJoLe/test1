let fruits = ["Banana", "Apple", "Strawberry", "Orange", "Maracuja"];

function pushElement(array, element) {
  return array.push(element);
}
// fügt ein element dem array hinzu (zeigt zusätzlich die neue länge an)
console.log(pushElement(fruits, "Kiwi"));

function popElement(array) {
  return array.pop();
}
// entfernt ein element am ende des arrays (zeigt dir entferntes element an)
console.log(popElement(fruits));

function containsElement(array, element) {
  return array.includes(element);
}
// prüft on sich ein element im array befindet (true,false)
console.log(containsElement(fruits, "Strawberry"));

function findElementIndex(array, element) {
  return array.indexOf(element);
}
// gibt dir den index wert des gesuchten element wieder
console.log(findElementIndex(fruits, "Strawberry"));

function removeFirstElement(array) {
  return array.shift();
}
// entfernt das erste element im array
console.log(removeFirstElement(fruits));

function addElementToStart(array, element) {
  return array.unshift(element);
}
// fügt ein element hinzu
console.log(addElementToStart(fruits, "Strawberry"));

let numbers = [1, 2, 3, 4, 5, 6, 7];

function getSubArray(array, start, end) {
  return array.slice(start, end);
}
// schneidet ein array zwischen start und ende zusammen
console.log(getSubArray(numbers, 3, 6));

function joinArray(array, separator) {
  return array.join(separator);
}
// separiert die elemente mit vorgegebenen symbol
console.log(joinArray(fruits, ","));

function sumArray(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum;
}
// rechnet array zusammen
console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

console.log(sumArray([1, 2, 3, 4, 5, 6])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)

printNumbers(3);
// zählt von 1-3
function printNumbers(a) {
  for (let i = 1; i <= a; i++) {
    console.log(i);
  }
}

printNumbersReverse(5);
// zählt rückwärts von 5 bis 1
function printNumbersReverse(a) {
  for (let i = a; i > 0; i--) {
    console.log(i);
  }
}

printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// zählt in 3er schritten
function printEveryThirdElement(array) {
  for (let i = 1; i <= array.length; i += 3) {
    console.log(i);
  }
}

function isPrime(params) {
  for (let i = 2; i * i <= params; i++) {
    if (params % i === 0) return false;
  }
  return true;
}
// vergleicht ob zahl eine primzahl ist
console.log(isPrime(3));
