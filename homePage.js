const translations = {
  en: {
    home: "Home",
    statues: "Statues",
    location: "Location",
    map: "Map",
    list: "List",
    hero_small: "Small Art",
hero_big: "Big Wonders",

about_title: "About us",
about_p1:
  "Tiny statues hide in plain sight, tucked into corners, perched on ledges, or peeking out from the bustle of daily life—waiting for the curious to discover them.",
about_p2:
  "By mapping these miniature wonders and sharing their tales, we turn ordinary walks into small adventures.",
about_p3:
  "Our mission is to celebrate curiosity, spark joy, and transform everyday moments into opportunities for wonder.",

see_more: "See more →",

dead_squirrel: "Dead Squirrel",
hanna_szenes: "Hanna Szenes",
roadster: "14-Carat Roadster",

explore: "EXPLORE",
explore_locations: "Learn more about the statues locations",
explore_map: "Check out the map and find the statues",
explore_list: "Complete the checklist and post a photo",

pages: "Oldalak"

  },
  hu: {
    home: "Kezdőlap",
    statues: "Szobrok",
    location: "Helyszín",
    map: "Térkép",
    list: "Lista",
    hero_small: "Apró művészet",
hero_big: "Nagy csodák",

about_title: "Rólunk",
about_p1:
  "Apró szobrok rejtőznek a városban – sarkokban, párkányokon vagy a mindennapi nyüzsgésben.",
about_p2:
  "Ezeket a miniatűr csodákat feltérképezve a séták kis kalandokká válnak.",
about_p3:
  "Küldetésünk, hogy felébresszük a kíváncsiságot és örömet csempésszünk a hétköznapokba.",

see_more: "Továbbiak →",

dead_squirrel: "Halott mókus",
hanna_szenes: "Szenes Hanna",
roadster: "14 karátos autó",

explore: "FELFEDEZÉS",
explore_locations: "Ismerd meg a szobrok helyszíneit",
explore_map: "Nézd meg a térképet és keresd meg a szobrokat",
explore_list: "Teljesítsd a listát és ossz meg egy fotót",
pages: "Pages"

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
