function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value = this.value + Number(prompt("enter number"));
    }
}

let accumulator = new Accumulator(0); 

accumulator.read(); 
accumulator.read(); 
alert(accumulator.value);