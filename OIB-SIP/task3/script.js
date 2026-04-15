document.getElementById("convertBtn").addEventListener("click", function() {
  const degrees = parseFloat(document.getElementById("degrees").value);
  const type = document.getElementById("type").value;
  const resultDiv = document.getElementById("result");

  // Validate input
  if (isNaN(degrees)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let result = "";

  if (type === "celsius") {
    let fahrenheit = (degrees * 9/5) + 32;
    let kelvin = degrees + 273.15;
    result = `${degrees} °C = ${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
  } else if (type === "fahrenheit") {
    let celsius = (degrees - 32) * 5/9;
    let kelvin = (degrees - 32) * 5/9 + 273.15;
    result = `${degrees} °F = ${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
  } else if (type === "kelvin") {
    let celsius = degrees - 273.15;
    let fahrenheit = (degrees - 273.15) * 9/5 + 32;
    result = `${degrees} K = ${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
  }

  resultDiv.textContent = result;
});