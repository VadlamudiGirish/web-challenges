console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

for (const country in languages) {
  const option = document.createElement("option");
  const countryName = languages[country];
  option.textContent = countryName;
  option.value = countryName;
  select.append(option);
}

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (const navProp in nav) {
  const listItem = document.createElement("li");
  const anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", nav[navProp].href);
  anchorElement.textContent = nav[navProp].text;
  listItem.append(anchorElement);
  ul.append(listItem);
}

// --^-- write or modify code above this line --^--
