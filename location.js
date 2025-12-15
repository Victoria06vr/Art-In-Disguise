const translations = {
  en: {
    home: "Home",
    statues: "Statues",
    location: "Location",
    map: "Map",
    list: "List"
  },
  hu: {
    home: "Kezdőlap",
    statues: "Szobrok",
    location: "Helyszín",
    map: "Térkép",
    list: "Lista"
  }
};

const langDropdown = document.querySelector(".lang-dropdown");
const langBtn = document.getElementById("langBtn");
const currentLang = document.getElementById("currentLang");
const langMenu = document.getElementById("langMenu");

let activeLang = "en";

// RENDER OTHER LANGUAGE OPTION
function renderLangMenu() {
  langMenu.innerHTML = "";
  const otherLang = activeLang === "en" ? "hu" : "en";

  const li = document.createElement("li");
  li.textContent = otherLang.toUpperCase();
  li.dataset.lang = otherLang;
  langMenu.appendChild(li);
}

// OPEN / CLOSE DROPDOWN
langBtn.addEventListener("click", () => {
  langDropdown.classList.toggle("open");
  renderLangMenu();
});

// SWITCH LANGUAGE
langMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    activeLang = e.target.dataset.lang;
    currentLang.textContent = activeLang.toUpperCase();

    // Update navigation text
    document.querySelectorAll("[data-key]").forEach(item => {
      const key = item.dataset.key;
      item.textContent = translations[activeLang][key];
    });

    langDropdown.classList.remove("open");
  }
});

const burgerBtn = document.getElementById("burgerBtn");
const closeBtn = document.getElementById("closeMenu");
const nav = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

