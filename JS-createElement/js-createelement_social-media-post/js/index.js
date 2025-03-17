console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const bodyElement = document.body;

const articleElement = document.createElement("article");
articleElement.className = "post";

const paraElement = document.createElement("p");
paraElement.className = "post__content";
paraElement.textContent =
  "orem ipsum dolor, sit amet consectetur adipisicing elit. ";

const footerElement = document.createElement("footer");
footerElement.className = "post__footer";

const spanElement = document.createElement("span");
spanElement.className = "post__username";
spanElement.textContent = "@username";

const buttonElement = document.createElement("button");
buttonElement.className = "post__button";
buttonElement.textContent = " ♥ Like";

articleElement.append(paraElement, footerElement);
footerElement.append(spanElement, buttonElement);
bodyElement.append(articleElement);

buttonElement.addEventListener("click", handleLikeButtonClick);
