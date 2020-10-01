const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')

// Your code here!

function getInput1() {
    return process.argv[2]
}
function getInput2() {
    return process.argv[3]
}

const color1 = getInput1();
const color2 = getInput2();

if(color1 === undefined && color2 === undefined) {
console.log('Sorry, you will need to enter at least one color')
} 

if(color1 !== undefined && color2 === undefined) {
    if(isValidSecondary(color1)) {    
        console.log('When you deconstruct ' + color1);
        console.log('You will get ' + colorDeconstructor(color1));  
    } 
    else {
        console.log("It's not a secondary color");
    }
}

if(color1 !== undefined && color2 !== undefined){
    if(isValidPrimary(color1) && isValidPrimary(color2)){
        console.log('When you combine ' + color1 + ' and ' + color2);
        console.log('You get ' + colorCombinator(color1, color2));
    }
    else {
        console.log('Both color have to be primary color');
    }
}