//Vector Type JS Opdracht

//Maakt een class aan
class Vec {
//Maakt constructor x en y aan
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
	//Maakt function plus aan en returnd het resultaat van sum
    plus(vec){
        return new Vec(this.x + vec.x, this.y+ vec.y)
    }
	//Maakt function min aan en returnd het resultaat van sum
    minus(vec){
        return new Vec(this.x - vec.x, this.y - vec.y)
    }
	//  Pak de lengte die de lengte van de vector berekent met de afstand van (x, y)
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  console.log(new Vec(3, 4).length);