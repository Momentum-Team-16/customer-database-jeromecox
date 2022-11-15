// grab the customer container
const customerContainer = document.querySelector("#customers");

// loop through the customer objects and build html for each one
for (let customer of customers) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("small");
  // create a card for the customer
  let name = document.createElement("div");
  // create a div for name and apply the materialize class to it
  name.classList.add("card-title");
  name.innerText = `${customer.name.first} ${customer.name.last}`;
  // add the name to the card
  card.appendChild(name);

  let thumbnail = document.createElement("div");
  thumbnail.classList.add("card-image");

  card.appendChild(thumbnail);

  // add card to customerContainer
  customerContainer.appendChild(card);
}
