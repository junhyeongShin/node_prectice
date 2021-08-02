var candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy: function () {
        this.status.count =  this.status.count-1;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
getCandy;
var count = candyMachine.status.count;
console.log('count : ', count);
getCandy;
console.log('count : ', count);
getCandy;
console.log('count : ', count);
getCandy;
console.log('count : ', count);
var count = candyMachine.status.count;

