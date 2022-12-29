const characterReadMore = document.querySelectorAll(".character__button");
const navbarList = document
  .querySelector(".navbar__list")
  .querySelectorAll("li");
const sections = document.querySelectorAll("section");
console.log(sections);
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

for (let i = 0; i < sections.length; i++) {
  navbarList[i].addEventListener("click", () => {
    sections[i].scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
