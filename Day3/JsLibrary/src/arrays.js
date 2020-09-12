var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

var comma = all.join();
var hyphen = all.join('-');

all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");

all.shift();
all.pop();

all.splice(3, 2);

all.reverse();

all.sort();

all.sort(function(a,b) {
    return a.localeCompare(b);
})

console.log(all)

var namesWithUppercase = all.map(uppercase);

function uppercase(name) {
    var nameInUpperCase = name.toString().toLocaleUpperCase();
    return nameInUpperCase;
}

console.log(namesWithUppercase);

var filteredNames = all.map(filterNames);

function filterNames(name) {
    
    var n = name.toString();
    
    if (n.toString().charAt(0) === "l"|| n.toString().charAt(0) === "L") {
        return n;
    } 
}

console.log(filteredNames.filter(e => e));

let spreadOperator = [...boys, ...girls];

console.log(spreadOperator);