var inputElement = document.getElementById('customRangeInput');

inputElement.oninput = setInput;
inputElement.onchange = setInput;   // IE fix

function setInput(){
    inputElement.value = closestValue(inputElement.value);
}

var validValues = [0,10000,50000,75000,100000];
function closestValue(input)
{
    var differences = [];
    for (var i = 0; i < validValues.length; i++)
        differences.push( Math.abs(validValues[i] - input));

    var index = indexOfSmallest(differences);
    return validValues[index];
}

function indexOfSmallest(inputArray) {
    var lowest = 0;
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] < inputArray[lowest]) lowest = i;
    }
    return lowest;
}
