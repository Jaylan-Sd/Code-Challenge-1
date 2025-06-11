// writing the function and adding the constants
function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const perKilometerCharge = 15;
    const tripcharge = distanceInKm * perKilometerCharge;
    const totalFare = baseFare + tripcharge;


//I'm using console.log() to print these details in a readable format in the console."
console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${tripcharge}`);
console.log(`Total: KES ${totalFare}`);
console.log("Panda Pikipiki!");
}

//This will prompt the user

const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = parseInt(userInput);




