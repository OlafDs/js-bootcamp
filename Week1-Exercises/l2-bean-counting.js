//Bean Counting

// Functie aanmaken die aantal B's telt
function countBs(word){

    console.log(countChar(word,"B"));
}

// Functie aanmaken die aantal letters telt van opgegeven woord
function countChar(word, character){

    //lege variabele die bijhoudt hoe vaak de letter voorbij komt
    var letterCounter = 0;

    for(var i = 0; i < word.length; i++){
        
        // Controleert of de letter die gecheckt moet worden in het woord zit, als dit zo is word deze opgeteld
        if(word[i] == character){
            letterCounter ++;
        }

    }

    // Het aantal keer dat een letter is voorgekomen in het opgegeven woord word naar de console gelogd
    console.log(letterCounter);
}

// Aanroepen functie, met als argument BBC: Laat zien hoe vaak B in het woord zit
countBs("BBC");

// Aanroepen functie, met twee arguments: Laat zien hoe vaak de letter k in kakkerlak zit
countChar("kakkerlak", "k");