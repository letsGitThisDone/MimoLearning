const data = {
  characters: [{
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }, {
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }, {
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  }]
};
const charactersContainer = document.getElementById("characters-container");
data.characters.forEach(function(character) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  charactersContainer.appendChild(newDiv);
  newDiv.innerHTML =
    `<img src="${character.image}" alt="${character.name}" class="character-image"><p class="character-detail"><span class="attribute">Name:</span>${character.name}</p><p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p><p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>`;
});