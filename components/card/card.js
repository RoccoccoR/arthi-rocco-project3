export function createCharacterCard() {
  const li = document.createElement("li");
  const cardTitle = document.createElement("h2");
  const cardImg = document.createElement("img");
  const statusDescription = document.createElement("dd");
  const typeDescription = document.createElement("dd");
  const occurrencesDescription = document.createElement("dd");

  li.innerHTML = `
    <div>
      <img>src=${cardImg}</img>
      <h2>${cardTitle}</h2>
      <dt>Status</dt>
      <dd>${statusDescription}</dd>
      <dt>Type</dt>
      <dd>${typeDescription}</dd>
      <dt>Occurences</dt>
      <dd>${occurrencesDescription}</dd>
    </div>
    `;

  return li;
}

createCharacterCard();
