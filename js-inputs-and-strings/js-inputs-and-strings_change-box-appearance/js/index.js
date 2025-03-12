console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const hue = inputColor.value;
  box.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
});

inputRadius.addEventListener("input", () => {
  box.style.borderRadius =
    Number(inputRadius.value) === Number(inputRadius.max)
      ? "100%"
      : `${inputRadius.value}px`;
});

inputRotation.addEventListener("input", () => {
  box.style.transform = `rotate(${inputRotation.value}deg)`;
});
