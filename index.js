const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let sum = 0;
let totalBatteries = batteryBatches.reduce(function(accumulater, element) {
    return accumulater + element;
}, 0)

console.log(totalBatteries);