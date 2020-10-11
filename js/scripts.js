function OrderPizza (size,crust,topping = []){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

var priceSize;
var priceCrust;
if(this.size == "small"){

      priceSize = 234;
}
else if(this.size == "medium"){
    priceSize = 560;
}
else{
    priceSize = 930;
}
if(this.crust == "cripsy"){
    priceCrust = 104;
}
else if(this.crust == "stuffed"){
    priceCrust = 700;
}
else{
    priceCrust = 400;
}
var priceTopping = [];

for (var index = 0; index < this.topping.length; index ++){
    if(this.topping [i] == "onions"){
        let priceOnions = 10;
        priceTopping.push(priceOnions);

    }
}
for (var index = 0; index < this.topping.length; index ++){
    if(this.topping [i] == "bacon"){
        let priceBacon = 30;
        priceTopping.push(priceBacon);
    }
}
for (var index = 0; index < this.topping.length; index ++){
    if(this.topping [i] == "olives"){
        let priceOlives = 50;
        priceTopping.push(priceOlives);
    }
}