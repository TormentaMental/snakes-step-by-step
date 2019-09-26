class Keyboard {
  keyMap = {
    ArrowLeft: "left",
    ArrowRight: "right",
    ArrowUp: "up",
    ArrowDown: "down",
  };

  constructor(callback) {
    this.callback = callback;

    document.addEventListener("keydown", this.handleKeyboard.bind(this));
  }

  handleKeyboard(event) {
    event.preventDefault();

    const keyName = this.keyMap[event.key];

    if(keyName) {
      this.callback(keyName);
    }
  }
}

export default Keyboard;
