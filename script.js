function appendToResult(value) {

    //append the value to input box
   let result = document.getElementById('result')
   result.value += value;
}

function calculate() {
    try {
        var calc = eval(document.getElementById('result').value);
        let result = document.getElementById('result')
        result.value = calc;
    } catch (e) {
        alert('Invalid expression')
    }
}

function clearResult() {
    //clear the input box
    let clear =document.getElementById('result')
    clear.value = '';
}

function backspace() {
    //backspace for the input box using slice
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0,-1);
}