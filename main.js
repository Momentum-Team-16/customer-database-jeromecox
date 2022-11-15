// grab the customer container
const customerContainer = document.querySelector("#customers");

console.log(customerContainer);

// loop through the customer objects and build html for each one
for (let customer of customers) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("small");
  // change column width?
  // card.classList.add("col");
  // card.classList.add("s3");
  // create a card for the customer
  let name = document.createElement("div");
  // create a div for name and apply the materialize class to it
  name.classList.add("card-title");
  name.innerText = `${customer.name.first} ${customer.name.last}`;
  // add the name to the card
  card.appendChild(name);
  // add card to customerContainer
  customerContainer.appendChild(card);
}
