
//business logic

function OrderPizza (size,crust,topping = []){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

OrderPizza.prototype.fullPizza = function(){

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
else if(this.crust == "gluten"){
    priceCrust = 700;
}
else{
    priceCrust = 400;
}
var priceTopping = [];

var index = 0;
while( index < this.topping.length){

    index++;
    if(this.topping [index] == "onions"){
        var priceOnions = 10;
        priceTopping.push(priceOnions);

    }
}

var index = 0;
while( index < this.topping.length){

    index++;

    if(this.topping [index] == "bacon"){
        var priceBacon = 30;
        priceTopping.push(priceBacon);
        
    }
}

var index = 0;
while( index < this.topping.length){

    index++;
    if(this.topping [index] == "olives"){
        var priceOlives = 50;
        priceTopping.push(priceOlives);
    }
} 
console.log("total " +priceTopping);

var priceTotalToppings = 0;

var i = 0;
while(i < priceTopping.length){

    priceTotalToppings += priceTopping[i];

     i++;
   
}

  console.log("total: "+priceTotalToppings);

 var TotalPrice = priceSize + priceCrust + priceTotalToppings;

  return TotalPrice;
}

//user interface logic

$("form").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedCrust = $("select#crust").val();
    var inputtedNumber = $("input#numberOfPizza").val();
    var inputtedToppins = [];

    inputtedToppins = $("input:checkbox:checked").map(function(){
        return  $(this).val();
    }).get();

    var newOrder = new OrderPizza(inputtedSize,inputtedCrust,inputtedToppins)
    $('#result').text("Your Bill is " + newOrder.fullPizza() + " rwf");
    console.log(newOrder.fullPizza())
    var numberOfPizza = newOrder.fullPizza() * inputtedNumber;
   $("#numberOfPizzas").text("Your checkout is " + numberOfPizza + " rwf");
   
   $("form").trigger("reset");

});

function Addresses(){
    var address = prompt("Delivery cash is 500 rwf and give us your address Please!!");
    if(address){
        alert("it has been delivered at " + address);
    }
}

var btClear = document.querySelector('button');
 var  selects = document.querySelectorAll('select');

 btClear.addEventListener('click', () =>{
          inputs.forEach(input => input.value = '');
 });
