document
  .querySelector(".submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("main").style.display = "none";
    document.querySelector(".card__success").style.display = "flex";
  });

document
  .querySelector(".card__success--button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("main").style.display = "flex";
    document.querySelector(".card__success").style.display = "none";
  });
