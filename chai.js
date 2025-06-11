// writing down the function and the constants
function calculateChaiIngredients (numberOfCups) {
     // Ingredient ratios per cup
    const waterPerCup = 200; //ml
    const milkPerCup = 50; //ml
    const teaLeavesPerCup = 1; //tablespoons
    const sugarPerCup = 2; //teaspoons

 // calculations

 const totalWater = numberOfCups * waterPerCup;
 const totalMilk = numberOfCups * milkPerCup;
 const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
 const totalSugar = numberOfCups * sugarPerCup;

// I'm using console.log() to print these details in a readable format in the console."

 console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
 console.log(`Water:${totalWater}ml`);
 console.log(`Milk:${totalMilk}`);
 console.log(`Tealeaves(Majani):${totalTeaLeaves} tablespoon(s)`);
 console.log(`Sugar(Sukari)${totalSugar} teaspoon(s)`);
 console.log("Enjoy your Chai Bora!");

}

// This prompts the user for their input

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input, 10);

