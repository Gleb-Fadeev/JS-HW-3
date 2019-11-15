function searchField(rootClass) {
  class Card {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  class Products extends Card {
    constructor(name, price, date) {
      super(name, price);
      this.date = date;
    }
  }
  class Books extends Card {
    constructor(name, price, edition) {
      super(name, price);
      this.edition = edition;
    }
  }
  class Films extends Card {
    constructor(name, price, produser) {
      super(name, price);
      this.produser = produser;
    }
  }
  const product1 = new Products("Milk", 100, "14.11.2019");
  const product2 = new Products("Meat", 150, "10.11.2019");
  const product3 = new Products("Cookie", 50, "5.11.2019");

  const book1 = new Books("Lord of the Ring 1", 300, "Golden Mayer");
  const book2 = new Books("Lord of the Ring 2", 500, "Golden Mayer");
  const book3 = new Books("Lord of the Ring 3", 400, "Golden Mayer");

  const film1 = new Films("IT", 150, "Richard Brenner");
  const film2 = new Films("Wolf of Wall Street", 100, "Leonardo Di Caprio");
  const film3 = new Films("Infinity War", 250, "Stan Lee");

  const allCardArr = [
    product1,
    product2,
    product3,
    book1,
    book2,
    book3,
    film1,
    film2,
    film3
  ];

  function generateSearch() {
    let searchField = document.createElement("div");
    let searchInput = document.createElement("input");
    searchInput.type = "text";
    searchField.append(searchInput);

    searchInput.addEventListener("change", function() {
      console.log(searchInput.value);
      let searchItem = searchInput.value;
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add("hide");
        if (cards[i].childNodes[0].innerHTML === searchItem) {
          console.log(cards[i].childNodes[0].innerHTML);

          cards[i].classList.remove("hide");
        }
      }
    });

    return searchField;
  }

  function generateCard(obj) {
    let card = document.createElement("div");
    card.classList.add("card", "hide");
    let cardTitle = document.createElement("h2");
    cardTitle.innerHTML = obj.name;
    // cardTitle.classList.add("hide");
    let cardPrice = document.createElement("h3");
    cardPrice.innerHTML = obj.price;
    //cardPrice.classList.add("hide");
    card.append(cardTitle, cardPrice);
    if (obj.date) {
      let cardDate = document.createElement("h4");
      cardDate.innerHTML = obj.date;
      // cardDate.classList.add("hide");
      card.append(cardDate);
    }
    if (obj.edition) {
      let cardDate = document.createElement("h4");
      cardDate.innerHTML = obj.edition;
      cardDate.classList.add("hide");
      card.append(cardDate);
    }
    if (obj.produser) {
      let cardDate = document.createElement("h4");
      cardDate.innerHTML = obj.produser;
      cardDate.classList.add("hide");
      card.append(cardDate);
    }
    return card;
  }
  function generateAllCard(array) {
    let containerCard = document.createElement("div");
    containerCard.classList.add("container");
    for (let i = 0; i < array.length; i++) {
      containerCard.append(generateCard(array[i]));
    }
    return containerCard;
  }
  function generateScene(rootClass) {
    let search = generateSearch();
    let cards = generateAllCard(allCardArr);
    console.log(cards[0]);

    rootClass.append(search, cards);
  }

  const rootElement = document.getElementsByClassName(rootClass)[0];
  if (rootElement) {
    generateScene(rootElement);
    var cards = document.querySelectorAll(".card");
    console.log(cards[0].innerHTML);
  }
}
searchField("app");
