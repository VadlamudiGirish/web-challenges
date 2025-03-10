// Change this value to test different "weather" conditions.
const weather = "rainy";

switch (weather) {
  case "summer":
    console.log("It's sunny!");

    break;
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "snowy":
    console.log("It's snowing, stay warm!");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;

switch (true) {
  case weather === "sunny" && temperature > 20:
    console.log("It's sunny and warm!");
    break;
  case weather === "sunny" && temperature <= 20:
    console.log("It's sunny, but a bit chilly!");
    break;
  case weather === "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case weather === "snowy" && temperature < 0:
    console.log("Freezing snow!");
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
