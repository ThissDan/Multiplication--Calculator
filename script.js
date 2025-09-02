
function calculate() {
    const number = document.getElementById('num1').value;
    const number2 = document.getElementById('num2').value;
    const total = document.getElementById('total');

}

document.getElementById("calculate").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent from refresh
    calculate();

    // convert to Numbers
    const number = document.getElementById('num1').value;
    const number2 = document.getElementById('num2').value;


    // condition validation
    if (number === "" || number2 === "") {
        total.value = "Input a Valid Number!";
        return;
    }

    else if (isNaN(number) || isNaN(number2)) {
        alert("Input is not a Number!");
        return;
    }

    else {
        // perform the operation
        total.value = Number(number) * Number(number2);
    }
});