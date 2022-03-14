window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Successfull!");
});
