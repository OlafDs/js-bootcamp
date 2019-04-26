//Flattening JS Opdracht

// Reduce voert de callback functie eenmaal uit voor elk element dat in de array aanwezig is, exclusief gaten in de array
var arrays = [[1, 2, 3], [4, 5], [6]].reduce(

//Concat maakt een nieuwe array bestaande uit de elementen van het object (dus van array) en dan stop je het weer in de []
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
);
console.log(arrays)
