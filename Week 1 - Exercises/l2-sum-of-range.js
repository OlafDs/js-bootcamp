//Sum of Range JS opdracht

var numbers = [];

// Aanmaken van functie met als parameter (start end)
function range(start, end){

    // Loop die van het opgegeven start nummer tot het eind nummer loopt
    for(var i = start; i <= end; i++){

        // Elk nummer binnen de loop word in de array gepusht
        numbers.push(i);
        
    }
   
    // Hevulde array wordt gereturnd
    return numbers;
}
 
function sum(){

// Lege variabele om de som van de items op te slaan
var total = 0;

// Loop die loopt door de array #loop
for(var i = 0; i < numbers.length; i++){
    
    // Elk nummer dat in de array zit word bij het totaal variabele opgeteld
    total += numbers[i];

}

// Totaal waarde word gereturned
return total
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));
