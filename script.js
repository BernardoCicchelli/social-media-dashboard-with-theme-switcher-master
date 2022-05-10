let darkMode = document.querySelector("#flexSwitchCheckDefault");
let body = document.querySelector("body");

let toggleMode = false;

darkMode.addEventListener("click", () => {
  toggleMode = !toggleMode;
  if (toggleMode) {
    body.classList.add(["dark-mode"]);
  } else {
    body.classList.remove(["dark-mode"]);
  }
});
