console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 1; i <= 5; i++) {
    const imgElement = document.createElement("img");

    if (i <= filledStars) {
      imgElement.setAttribute("src", "assets/star-filled.svg");
    } else {
      imgElement.setAttribute("src", "assets/star-empty.svg");
    }

    imgElement.addEventListener("click", () => renderStars(i));

    starContainer.append(imgElement);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(3);
