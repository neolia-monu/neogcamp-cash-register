const billAmount = document.querySelector('#bill-amount');
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const errMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

// console.log(billAmount);
// console.log(cashGiven.value);
// console.log(cashGiven);
// console.log(checkButton);

checkButton.addEventListener("click", () => {

    hideMessage();

    const billValue = parseInt(billAmount.value);
    const cashValue = parseInt(cashGiven.value);

    console.log(cashValue);
    console.log(billValue);

    if (!Object.is(billValue, NaN) && !Object.is(cashValue, NaN)) {
        if (billAmount.value > 0) {
            if (cashGiven.value >= billAmount.value) {
                const amountToBeReturned = cashGiven.value - billAmount.value;
                console.log(amountToBeReturned);
                calculateChange(amountToBeReturned);
            } else {
                showMessage("The cash provided should atleast be equal to the bill amount");
            }
        } else {
            showMessage("Invalid bill Amount");
        }
    } else {
        showMessage("Bill or Cash amount should be number");
    }
})

function hideMessage() {
    errMsg.style.display = "none";
}

function showMessage(message) {
    errMsg.style.display = "block";
    errMsg.innerText = message;
    for (let i = 0; i < noOfNotes.length; i++)
        noOfNotes[i].innerText = 0;
}

// function stringCheck(bill, cash) {
//     if (isNaN(bill) || isNaN(cash))
//         return false;
//     return true;
// }

function calculateChange(amount) {

    console.log(amount);
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amount / availableNotes[i]);
        // console.log(amount);
        amount = amount % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}