class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
    }
    feed(amount) {
      this.fedLevel = Math.min((this.fedLevel + amount), 100);
      this.fedElement.innerText = this.fedLevel;
    }
    decreaseFedLevel() {
      this.fedLevel = Math.max((this.fedLevel - 10), 0);
      this.fedElement.innerText = this.fedLevel;
      if (this.fedLevel === 0) {
        this.messageElement.innerText = "Pet ran away";
        this.displayElement.style.opacity = "0.5";
      }
    }
  }
  const pet1 = new Pet(1);
  const pet2 = new Pet(2);
  let selectedPet = null;
  const pet1Element = document.getElementById("pet1");
  const pet2Element = document.getElementById("pet2");
  
  function feedPet(amount) {
    if (selectedPet === 1) {
      pet1.feed(amount);
    } else if (selectedPet === 2) {
      pet2.feed(amount);
    }
  }
  setInterval(() => {
    pet1.decreaseFedLevel();
    pet2.decreaseFedLevel();
  }, 1000);
  
  function selectPet(id) {
    selectedPet = id;
    if (selectedPet === 1) {
      pet1Element.classList.add("selected");
      pet2Element.classList.remove("selected");
    } else if (selectedPet === 2) {
      pet2Element.classList.add("selected");
      pet1Element.classList.remove("selected");
    }
  }