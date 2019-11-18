function searchField(rootClass) {
  class Card {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    draw() {
      let card = document.createElement("div");
      card.classList.add("card");
      let cardTitle = document.createElement("h2");
      cardTitle.innerHTML = this.name;
      let cardPrice = document.createElement("h3");
      cardPrice.innerHTML = this.price;
      card.append(cardTitle, cardPrice);
      return card;
    }
  }
  class Products extends Card {
    constructor(name, price, date) {
      super(name, price);
      this.date = date;
    }
    draw() {
      super.draw();
      let cardCont = document.createElement("div");
      let cardDate = document.createElement("h4");
      cardDate.innerHTML = this.date;
      cardCont.append(cardDate);
      return cardCont;
    }
  }
  class Books extends Card {
    constructor(name, price, edition) {
      super(name, price);
      this.edition = edition;
    }
    draw() {
      super.draw();
      let cardCont = document.createElement("div");
      let cardEdition = document.createElement("h4");
      cardEdition.innerHTML = this.edition;
      cardCont.append(cardEdition);
      return cardCont;
    }
  }
  class Films extends Card {
    constructor(name, price, produser) {
      super(name, price);
      this.produser = produser;
    }
    draw() {
      super.draw();
      let cardCont = document.createElement("div");
      let cardProduser = document.createElement("h4");
      cardProduser.innerHTML = this.produsser;
      cardCont.append(cardProduser);
      return cardCont;
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
  console.log(book1.draw());

  function generateSearch() {
    let searchField = document.createElement("div");
    let searchInput = document.createElement("input");
    searchInput.type = "text";
    searchField.append(searchInput);

    searchInput.addEventListener("change", function() {
      let searchItem = searchInput.value;
      for (let i = 0; i < allCardArr.length; i++) {
        if (searchItem === allCardArr[i].name) {
          console.log(allCardArr[i].name);
          allCardArr[i].draw();
        }
      }
    });
    return searchField;
  }

  const rootElement = document.getElementsByClassName(rootClass)[0];
  if (rootElement) {
    let search = generateSearch(rootElement);
    rootElement.append(search);
  }
}
searchField("app");
