let currentInput = "";
    let previousInput = "";
    let operation = "";

    function appendToDisplay(value) {
        currentInput += value;
        document.getElementById('display').value = currentInput;
    }

    function setOperation(op) {
        if (currentInput === "") return;
        if (previousInput !== "") {
            calculate();
        }
        operation = op;
        previousInput = currentInput;
        currentInput = "";
    }

    function calculate() {
        if (previousInput === "" || currentInput === "") return;

        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }

        addToHistory(`${previousInput} ${operation} ${currentInput} = ${result}`);
        currentInput = result.toString();
        previousInput = "";
        operation = "";
        document.getElementById('display').value = currentInput;
    }

    function clearDisplay() {
        currentInput = "";
        previousInput = "";
        operation = "";
        document.getElementById('display').value = "";
    }

    function addToHistory(entry) {
        const historyDiv = document.getElementById('history');
        const newEntry = document.createElement('div');
        newEntry.textContent = entry;
        historyDiv.appendChild(newEntry);
    }
