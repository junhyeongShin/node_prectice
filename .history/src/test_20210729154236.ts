var candyMachine = {
  status: {
    name ='node',
    count = 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

console.log('count : ',count);

var getCandy = candyMachine.getCandy;
console.log('count : ',count);
var getCandy = candyMachine.getCandy;
console.log('count : ',count);
var getCandy = candyMachine.getCandy;
console.log('count : ',count);
