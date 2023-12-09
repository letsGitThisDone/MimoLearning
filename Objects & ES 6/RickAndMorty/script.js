const data = {};
const charactersContainer = document.getElementById("characters-container");
fetch("https://rickandmortyapi.com/api/character").then(response => response
  .json()).then(data => {data.results.forEach(function(character) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  charactersContainer.appendChild(newDiv);
  newDiv.innerHTML =
    `<img src="${character.image}" alt="${character.name}" class="character-image"><p class="character-detail"><span class="attribute">Name:</span>${character.name}</p><p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p><p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>`;
  });
});
