var heidht=prompt("укажите ваш рост в метрах");
var weight=prompt("укажите ваш вес в килограммах");
var bodyWeightIndex =weight/(heidht*heidht)
var doYouHaveExcessWeight= bodyWeightIndex>28;

// var y ="укажите ваш рост";
// var  x ="укажите ваш вес";
// var z = x/(y*y); 
// console.log(z);
// var IMT = z>28;
// console.log(IMT);


alert( "вы имеете лишний вес:"+" "+doYouHaveExcessWeight );