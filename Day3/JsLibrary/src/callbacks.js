var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var longNames = names.filter(function (name) {
    return name.length > 3;
});

console.log(longNames);

var foreachLongName = names;

longNames.forEach(name => console.log(name));
foreachLongName.forEach(name => console.log(name));

var namesMap = names.map(name => name.toString().toUpperCase());

console.log(namesMap);

var namesForBrowser = names.map(function(name){
    if (names.indexOf(name) === 0) {
        return "<ul>" + "<li>" + name + "</li>";
    } else if (names.indexOf(name) === names.length-1) {
        return "<li>" + name + "</li>" + "</ul>";
    } else {
        return "<li>" + name + "</li>";
    }
}).join("");

console.log(namesForBrowser);

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var newCars = cars.filter(function (car) {
    return car.year > 1999;
})
console.log(newCars);

var volvoCars = cars.filter(function (car) {
    return car.make.toString() === "Volvo";
})
console.log(volvoCars);

var cheapCars = cars.filter(function (car) {
    return car.price < 5000;
})
console.log(cheapCars);
