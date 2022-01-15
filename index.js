// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield")

});

function destructivelyAppendCat() {
    cats.push("Ralph");
    console.log(cats);
} 

//beforeEach();

function destructivelyPrependCat() {
    cats.unshift("Bob");
    console.log(cats);
}

//beforeEach();

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}

//beforeEach();

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

//beforeEach();

function appendCat(name) {
    const copyCat = [...cats, name];
    console.log(copyCat);
    return copyCat;
}

function prependCat(name) {
    const prepCat = [name, ...cats];
    console.log(prepCat);
    return prepCat; 
}

function removeLastCat() {
    const byeCat = cats.slice(0, 2);
    console.log(byeCat);
    return byeCat; 
}

function removeFirstCat() {
    const byeFirstCat = cats.slice(1);
    console.log(byeFirstCat);
    return byeFirstCat; 
}