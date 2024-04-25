window.addEventListener("load", (e) => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  class InputHandler {
    constructor() {
      this.keys = [];

      //arrow function lets even handler remember where this.keys came from
      document.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          (e.key === "ArrowRight" && this.keys.indexOf(e.key) === -1)
        ) {
          this.keys.push(e.key);
        }
        console.log(e.key, this.keys);
      });
      document.addEventListener("keyup", (e) => {
        console.log(e.key);
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight"
        ) {
          this.keys.splice(this.keys.indexOf(e.key), 1);
        }
        console.log(e.key, this.keys);
      });
    }
  }

  class Player {}

  class Background {}

  class Enemy {}
  function handleEnemies() {}

  function displayStatusText() {}

  const input = new InputHandler();
  function animate() {}
});
