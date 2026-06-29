let unitEl = document.getElementById("unit-el");

let inputVal = document.getElementById("input-val");

let fromUnit = document.getElementById("from-unit");
let toUnit = document.getElementById("to-unit");

let convertBtn = document.getElementById("convert-btn");

let outputVal = inputVal;

// stops the user from rendering anything other than a number in the input. Only utilizes the inputVal user input value
inputVal.onkeydown = (event) => {
  if (isNaN(event.key) && event.key !== "Backspace") {
    event.preventDefault();
  }
};

// submit button
convertBtn.addEventListener("click", function() {
  if (inputVal.value == "") {
    alert("Please enter a number in the user input field!");
    return false;
  } else {
    convert()
    return true;
  }
});

function convert() {
  if (fromUnit.value == "kilometer" && toUnit.value == "meter") {
    outputVal = inputVal.value * 1000;
    console.log(outputVal)
  }else if(fromUnit.value == "meter" && toUnit.value =="kilometer"){
    outputVal = inputVal.value / 1000;
    console.log(outputVal);
  } else if (fromUnit.value == "meter" && toUnit.value == "feet"){
    outputVal = inputVal.value * 3.28084;
    console.log(outputVal);
  } else if (fromUnit.value == "feet" && toUnit.value =="meter"){
    outputVal = inputVal.value / 3.28084;
    console.log(outputVal);
  } else {
    console.log("Error! Somethin's gown wroung!")
  }
  document.getElementById("output-value").innerHTML = "Converted to: " + outputVal;
}


document.getElementById("convert-btn").addEventListener("click", convert);



//Conversion Sequences using if/else statements
//Yo developer, fix this shit up please, thanks
//This shit is so fucked up yo

