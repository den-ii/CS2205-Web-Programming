const form = document.querySelector("form");
const display = document.querySelector(".display");

function celsiusToFahrenheit(temp) {
  return `${temp} &deg;C is ${(temp * (9 / 5) + 32).toFixed(0)} &deg;F`;
}

function fahrenheitToCelsius(temp) {
  return `${temp} &deg;F is ${((5 / 9) * (temp - 32)).toFixed(0)} &deg;C`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  display.classList.remove("error", "bigger");
  display.textContent = "Converting...";
  let temp = document.getElementById("temperature").value;
  temp = parseInt(temp.trim());
  if (isNaN(temp) || temp === 0) {
    display.classList.add("error");
    display.textContent = "Please enter a valid number";
    return;
  }
  const unit = document.getElementById("unit").value;
  if (unit === "celsius") {
    display.innerHTML = celsiusToFahrenheit(temp);
    display.classList.add("bigger");
  } else if (unit === "fahrenheit") {
    display.innerHTML = fahrenheitToCelsius(temp);
    display.classList.add("bigger");
  } else {
    display.classList.add("error");
    display.innerHTML = "Something went wrong";
  }
});
