function Calculator() {
    this.read = function() {
      this.first =+ prompt("enter the first number");
      this.second =+ prompt("enter the second number");
    };
    this.sum = function() {
      return this.first + this.second;
    };
    this.mul = function() {
      return this.first * this.second;
    };
}
  
let calculator = new Calculator();
calculator.read();
  
alert( "Sum =" + " " + calculator.sum() );
alert( "Mul =" + " " +calculator.mul() );