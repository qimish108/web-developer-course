var heidht=prompt("укажите ваш рост в метрах");
var weight=prompt("укажите ваш вес в килограммах");
var bodyWeightIndex =weight/(heidht*heidht)
var doYouHaveExcessWeight= bodyWeightIndex>28;




alert( "вы имеете лишний вес:"+" "+doYouHaveExcessWeight );