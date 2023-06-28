class Lamp {
  constructor(color) {
    this.color = color;
    this.on = false;
  }

  toggleSwitch() {
    this.on = !this.on;
  }

  state() {
    if (this.on) {
      return "The lamp is on.";
    } else {
      return "The lamp is off.";
    }
  }
}

const myLamp = new Lamp("red");
console.log(myLamp.state()); // Output: The lamp is off.

myLamp.toggleSwitch();
console.log(myLamp.state()); // Output: The lamp is on.

myLamp.toggleSwitch();
console.log(myLamp.state()); // Output: The lamp is off.
