const translations = {
en: {
   home: "Home",
    statues: "Statues",
    location: "Location",
    map: "Map",
    list: "List",
  location_hero_title: "Budapest Through\nIts Places",

  location_intro_title: "Choosing the Right Spot",
  location_intro_text:
    "Mihály Kolodko places his mini-statues in locations that add meaning, humor, or a small story to the sculpture. He looks for spots where the surroundings can enhance the character.",

  location_intro_text_2:
    "He places his mini-statues in everyday public spots like railings, bridges, and benches—areas people often overlook. This makes discovery part of the experience.",

  location_list_title: "List of locations",
  location_search: "Look for location",

  vajdahunyad_castle: "Vajdahunyad Castle",
  szenes_park: "Szenes Hanna Park",
  pesti_theatre: "Pesti Magyar Színház",
  bethlen_square: "Bethlen Gábor Square",

  info: "Info",
  show_more: "show more",

  pages: "Pages"
},
hu: {
  
   home: "Kezdőlap",
    statues: "Szobrok",
    location: "Helyszín",
    map: "Térkép",
    list: "Lista",
  location_hero_title: "Budapest\nHelyszínei",

  location_intro_title: "A megfelelő hely kiválasztása",
  location_intro_text:
    "Mihály Kolodko miniszobrait olyan helyekre teszi, amelyek jelentést, humort vagy történetet adnak az alkotásoknak.",

  location_intro_text_2:
    "A szobrok gyakran korlátokon, hidakon vagy padokon jelennek meg — olyan helyeken, amelyeket az emberek könnyen figyelmen kívül hagynak.",

  location_list_title: "Helyszínek listája",
  location_search: "Hely keresése",

  vajdahunyad_castle: "Vajdahunyad vára",
  szenes_park: "Szenes Hanna park",
  pesti_theatre: "Pesti Magyar Színház",
  bethlen_square: "Bethlen Gábor tér",

  info: "Info",
  show_more: "továbbiak",
  
  pages: "Oldalak"
}
};


const langDropdown = document.querySelector(".lang-dropdown");
const langBtn = document.getElementById("langBtn");
const currentLang = document.getElementById("currentLang");
const langMenu = document.getElementById("langMenu");

let activeLang = "en";

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[activeLang][key];
    if (!translation) return;
    el.textContent = translation;
  });
}

function renderLangMenu() {
  langMenu.innerHTML = "";
  const otherLang = activeLang === "en" ? "hu" : "en";
  const li = document.createElement("li");
  li.textContent = otherLang.toUpperCase();
  li.dataset.lang = otherLang;
  langMenu.appendChild(li);
}

langBtn.addEventListener("click", e => {
  e.stopPropagation();
  langDropdown.classList.toggle("open");
  renderLangMenu();
});

langMenu.addEventListener("click", e => {
  const li = e.target.closest("li");
  if (!li) return;

  activeLang = li.dataset.lang;
  currentLang.textContent = activeLang.toUpperCase();
  applyTranslations();
  langDropdown.classList.remove("open");
});

document.addEventListener("click", () => {
  langDropdown.classList.remove("open");
});

applyTranslations();
renderLangMenu();
