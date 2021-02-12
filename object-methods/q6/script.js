let first = 0;
let second = 0;

let calculator = {
    read() {
       first = Number( prompt("enter the first Number") );
       second = Number( prompt("enter the second Number") );
    },
    sum() {
        return first + second;
    },
    mul() {
        return first * second;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );