// grab the customer container
const customerContainer = document.querySelector("#customers");

// date conversion function
function dateConvert(date) {
  return moment(date).format("ll");
}
// created a new element and adds class(es) to the element
function divClass(type, classArray, parent) {
  let newElement = document.createElement(type);
  newElement.classList.add(...classArray);
  parent.appendChild(newElement);
  return newElement;
}
// loop through the customer objects and build html for each one
for (let customer of customers) {
  let custCard = divClass(
    "div",
    ["card", "small", "col", "s12", "m9", "l4", "white"],
    customerContainer
  );
  // created a card for the customer

  let thumb = divClass("div", ["card-image", "circle"], custCard);
  let pic = divClass("img", "", thumb);
  pic.src = customer.picture.large;

  // create a div for name and apply the materialize class to it
  let name = divClass("div", ["card-title", "white"], custCard);
  let firstName =
    customer.name.first[0].toUpperCase() + customer.name.first.slice(1);
  let lastName =
    customer.name.last[0].toUpperCase() + customer.name.last.slice(1);
  name.innerText = `${firstName} ${lastName}`;

  let email = divClass("a", ["emailLink", "grey-text"], custCard);
  let emailText = document.createTextNode(`${customer.email}`);
  email.appendChild(emailText);
  email.href = `mailto:${customer.email}`;

  let content = divClass("div", ["card-content", "white", "medium"], custCard);

  let address = divClass("div", ["white"], content);
  address.innerText = `${
    customer.location.street.number
  } ${customer.location.street.name.trim()}
  ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${
    customer.location.postcode
  }`;

  let birthday = divClass("div", ["white"], content);
  let date1 = dateConvert(customer.dob.date);
  birthday.innerText = `DOB: ${date1}`;

  let custDate = divClass("div", ["white"], content);
  let date2 = dateConvert(customer.registered.date);
  custDate.innerText = `Customer since: ${date2}`;
}
