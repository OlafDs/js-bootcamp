//Chessboard JS opdracht
// Lege string om hashtag of een spatie in op te slaan
var chessboard = "";
// Met deze variabele kan de hoogte en breedte van het chessboard veranderd worden
var grote = 8;
// loop elke keer als 8 is bereikt. Voeg daarna linebreak toe
for(var y = 1; y <= grootte; y++){
    //loop om horizontale lijn te vullen
    for(var x = 1; x <= grote; x++){
        //Als de waarde van x en y samen te delen is door 2, voeg een hashtag toe aan de chessboard
        if((x + y) % 2 == 0 ){
            chessboard += "#";
        }
        //Als de waarde van x en y samen niet te delen is door 2, voeg spatie toe aan chessboard
        else{
            chessboard += " ";
        }
}
//De volgende interactie start op een nieuwe lijn
chessboard += "\n";
}
console.log(chessboard);