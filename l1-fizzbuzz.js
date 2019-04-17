//Fizzbuzz JS opdracht

// Maakt een loop van 1 t/m 100
for(var number = 1; number <= 100; number++){

//Een lege string aanmaken om variabele Fizz of Buzz in op te slaan
var word = "";

    // Als het nummer gedeeld kan worden door 3 en 5 wordt het woord gevult met FizzBuzz
    if(number % 2 == 0 && number % 5 ==0){

    word = "FizzBuzz";

    }

    // Als het nummer alleen gedeeld kan worden door 3 wordt het woord gevult met Fizz
    else if(number % 3 == 0){

    word = "Fizz";

    }

    // Als het nummer alleen gedeeld kan worden door 5 wordt het woord gevult met Buzz
    else if(number % 5 == 0){

    word = "Buzz";    

    }


// De or operator checkt of de linkerkant, in dit geval woord true is, als dit zo is word woord laten zien.
// Bij false komt er een default waarde te zien en dat is de nummer
console.log(word || number);

}