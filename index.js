// list all the food items => Done
const data = require("./foodData.json");

// list all the food items with category vegetables =>done
let vegetables = data.filter((value) => value.category === "Vegetable");

// list all the food items with category fruit =>done
let fruits = data.filter((value) => value.category === "Fruit");

// list all the food items with category protien =>done
let Proteins = data.filter((value) => value.category === "Protein");

// list all the food items with category nuts =>done
let Nuts = data.filter((value) => value.category === "Nuts");

// list all the food items with category grains =>done
let Grains = data.filter((value) => value.category === "Grain");

// list all the food items with category dairy =>done
let Dairies = data.filter((value) => value.category === "Dairy");

// list all the food items with calorie above 100 =>done
let moreCalories = data.filter((value) => value.calorie > 100);

// list all the food items with calorie below 100 =>done
let lowCalories = data.filter((value) => value.calorie < 100);

// list all the food items with highest protien content to lowest
let highestProtein = data.sort((val1, val2)=> val1.protiens > val2.protiens);

// list all the food items with lowest cab content to highest
let lowestCab = data.sort((val1, val2)=> val1.cab - val2.cab);

console.log("+++++ 1. All food items +++++");
console.log(data);

console.log("+++++ 2. VEGETABLES +++++");
console.log(vegetables);

console.log("+++++ 3. FRUITS +++++");
console.log(fruits);

console.log("+++++ 4. Protein +++++");
console.log(Proteins);

console.log("+++++ 5. Nuts +++++");
console.log(Nuts);

console.log("+++++ 6. Grains +++++");
console.log(Grains);

console.log("+++++ 7. Dairy +++++");
console.log(Dairies);

console.log("+++++ 8. More Calories +++++");
console.log(moreCalories);

console.log("+++++ 9. Low Calories +++++");
console.log(lowCalories);

console.log("+++++ 10. Highest protein to lowest protein +++++");
console.log(highestProtein);

console.log("+++++ 11. Lowest cab to highest cab +++++");
console.log(lowestCab);