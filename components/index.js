const characterReadMore = document.querySelectorAll(".character__button");

characterReadMore.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.target.closest("div").querySelector("p").classList.toggle("hidden");
    if (event.target.textContent === "Czytaj Więcej") {
      event.target.textContent = "Czytaj Mniej";
    } else {
      event.target.textContent = "Czytaj Więcej";
    }
  });
});
