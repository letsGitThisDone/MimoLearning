class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
    }
    feed(amount) {
      this.fedLevel = Math.min(this.fedLevel + amount, 100);
      this.fedElement.innerHTML = this.fedLevel;
    }
    decreaseFedLevel() {
      this.fedLevel = Math.max(this.fedLevel - 10, 0);
      this.fedElement = this.fedLevel;
      if (this.fedLevel === 0) {
        this.messageElement.innerHTML = "Pet ran away";
      }
    }
  }
  const pet1 = new Pet(1);
  
  function feedPet(amount) {
    pet1.feed(amount);
  }
  setInterval(decreaseFedLevel(), 1000);