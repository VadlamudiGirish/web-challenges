console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Age: ", data.age);
  console.log("Badness: ", data.badness);
  console.log("Complaint: ", data.complaint);
  console.log("Details: ", data.details);
  console.log("Email: ", data.email);
  console.log("First name: ", data.firstName);
  console.log("Last name: ", data.lastName);
  console.log("Order date: ", data.orderDate);

  console.log(
    `${data.firstName} is ${Number(data.age) + Number(data.badness)}`
  );

  event.target.reset();
  event.target.elements.firstName.focus();
});
