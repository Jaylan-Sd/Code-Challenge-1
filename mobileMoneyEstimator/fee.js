function estimateTransactionFee(amountToSend) {
    //calculates the transaction fee
    let fee = amountToSend * 1.5/100;

    //applying the minimum and maximam fees charged
    if(fee<10) {
        fee = 10;
    }

    if(fee>70) {
        fee = 70;
    }

    const totalAmount = amountToSend + fee;
// I'm using console.log() to print these details in a readable format in the console."
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}:`);
    console.log(`Total amount to be debited: KES ${totalAmount}:`);
    console.log("Send Money Securely!");
}

//User input

const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = userInput;