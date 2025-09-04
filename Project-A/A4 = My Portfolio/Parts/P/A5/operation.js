function calculate(operation) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result;

    // Check if inputs are valid
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerText = "Error: Please enter valid numbers!";
        return;
    }

    switch (operation) {
        case 'Add':
            result = n1 + n2;
            break;
        case 'Sub':
            result = n1 - n2;
            break;
        case 'Mul':
            result = n1 * n2;
            break;
        case 'Div':
            result = (n2 === 0) ? "Error: Division by zero!" : n1 / n2;
            break;
        case 'Exp':
            result = n1 ** n2;
            break;
        case 'Log':
            if (n1 <= 0) {
                result = "Error: First number (n1) must be greater than 0.";
            } else if (n2 <= 0 || n2 === 1) {
                result = "Error: Base (n2) must be greater than 0 and not equal to 1.";
            } else {
                result = Math.log(n1) / Math.log(n2);
            }
            break;
        default:
            result = "Error: Invalid operation!";
    }

    document.getElementById("result").innerText = "Result: " + result;
}
