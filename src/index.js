const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  let flippedCards = [];

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("turned");
      memoryGame.pickedCards.push(card);
      flippedCards.push(card);

      memoryGame.pairsClicked++;

      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        const card1Name = card1.dataset.cardName;
        const card2Name = card2.dataset.cardName;

        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          console.log("Cards match!");

          memoryGame.pairsGuessed++;

          if (memoryGame.checkIfFinished()) {
            console.log("Congrats, finished");
          }
        } else {
          console.log("Cards do not match!");

          setTimeout(() => {
            card1.classList.remove("turned");
            card2.classList.remove("turned");
          }, 1000);
        }

        flippedCards = [];
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
