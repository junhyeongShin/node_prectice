var candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
getCandy;
var count = candyMachine.status.count;
console.log('count : ', count);
console.log('count : ', count);
console.log('count : ', count);
console.log('count : ', count);