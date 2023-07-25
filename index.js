import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const apiUrl = "https://rickandmortyapi.com/api/character?page=" + page;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const characters = data.results;
  cardContainer.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = createCharacterCard(character);
    cardContainer.append(characterCard);
  });
}

pagination.textContent = `${page} / ${maxPage}`;

fetchCharacters();

nextButton.addEventListener("click", (event) => {
  if (page === 42) {
    event.preventDefault();
    return;
  }
  page = page + 1;
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters();
});

prevButton.addEventListener("click", (event) => {
  if (page <= 1) {
    event.preventDefault();
    return;
  }
  page = page - 1;
  pagination.textContent = `${page} / ${maxPage}`;
  fetchCharacters();
});
