let equal = {};

function A() { 
    return equal;
}
function B() {
    return equal;
}

alert( new A() === new B() );