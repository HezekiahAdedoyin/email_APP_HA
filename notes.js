var shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shoppingList.push("fruit loops");
shoppingList[4] = "fair trade coffee";
shoppingList.splice(2,2,"rice", "beans")
var shoppingCart = [];
shoppingCart[0] = shoppingList.pop()
shoppingCart.push(shoppingList.shift())

// while (shoppingList) {

// }

console.log(shoppingCart);


shoppingCart.sort();
shoppingCart.reverse();


var shoppingCartString = shoppingCart.join(", ");
console.log(shoppingCartString);
console.log(typeof(shoppingCartString))



// console.log(shoppingCart)
// console.log(shoppingList)

course.name;
course.teachers[1];
course.students[0].name;
course.students[1].computer.type;
course.preReqs.equipment
course.preReqs.equipment.OSOptions[1];
course.preReqs.equipment.OSOptions.join("or ");
course.students.computer.filter




