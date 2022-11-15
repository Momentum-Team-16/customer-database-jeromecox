// grab the customer container
const customerContainer = document.querySelector("#customers");

// date conversion function
function dateConvert(date) {
  return moment(date).format("ll");
}

// loop through the customer objects and build html for each one
for (let customer of customers) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("small");
  // create a card for the customer

  let thumb = document.createElement("div");
  thumb.classList.add("card-image");
  thumb.classList.add("circle");
  let pic = document.createElement("img");
  pic.src = customer.picture.thumbnail;

  thumb.appendChild(pic);
  card.appendChild(thumb);

  // create a div for name and apply the materialize class to it
  let name = document.createElement("div");
  name.classList.add("card-title");
  let firstName =
    customer.name.first[0].toUpperCase() + customer.name.first.slice(1);
  let lastName =
    customer.name.last[0].toUpperCase() + customer.name.last.slice(1);
  name.innerText = `${firstName} ${lastName}`;
  // add the name to the card
  card.appendChild(name);

  let content = document.createElement("div");
  content.classList.add("card-content");

  let email = document.createElement("div");
  email.innerText = `${customer.email}`;
  content.appendChild(email);

  let address = document.createElement("div");
  address.innerText = `${customer.location.street.number} ${
    customer.location.street.name
  }
  ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${
    customer.location.postcode
  }`;
  content.appendChild(address);

  let birthday = document.createElement("div");
  let date1 = dateConvert(customer.dob.date);
  birthday.innerText = `DOB: ${date1}`;
  content.appendChild(birthday);

  let custDate = document.createElement("div");
  let date2 = dateConvert(customer.registered.date);
  custDate.innerText = `Customer since: ${date2}`;
  content.appendChild(custDate);

  card.appendChild(content);

  // add card to customerContainer
  customerContainer.appendChild(card);
}
