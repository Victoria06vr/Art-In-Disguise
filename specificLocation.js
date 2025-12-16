const translations = {
  en: {
    home: "Home",
    statues: "Statues",
    location: "Location",
    map: "Map",
    list: "List",

    castle_title: "Vajdahunyad Castle",
    castle_location: "Location: City Park",
    accessibility: "Accessibility ★★★★☆",
    statues_here: "Statues here: Dracula",
    read_more: "Read more →",

    history: "History",
    gallery: "Gallery",

    castle_description:
      "Vajdahunyad Castle is a unique architectural landmark originally built in 1896 for Hungary’s Millennium Exhibition. It blends Gothic, Renaissance, Baroque, and Romanesque architecture.",

    placement_title: "Significance of the placement",
    placement_text:
      "Kolodko often chooses locations that create a playful connection between story and place. By setting Dracula beside a castle in the heart of the park, he ties together folklore, architecture, and humor.",

    bottom_text:
      "Mihály Kolodko’s miniature statue placed here playfully reflects this rich historical layering.",

    pages: "Pages"

  },
  hu: {

    home: "Kezdőlap",
    statues: "Szobrok",
    location: "Helyszín",
    map: "Térkép",
    list: "Lista",

    castle_title: "Vajdahunyad vára",
    castle_location: "Helyszín: Városliget",
    accessibility: "Akadálymentesség ★★★★☆",
    statues_here: "Itt található szobrok: Drakula",
    read_more: "Tovább →",

    history: "Történet",
    gallery: "Galéria",

    castle_description:
      "A Vajdahunyad vára egy különleges építészeti emlék, amelyet eredetileg 1896-ban építettek a Millenniumi Kiállításra.",

    placement_title: "Az elhelyezés jelentősége",
    placement_text:
      "Kolodko gyakran olyan helyszíneket választ, amelyek játékos kapcsolatot teremtenek a történet és a hely között.",

    bottom_text:
      "Mihály Kolodko miniatűr szobra játékosan reflektál a történelmi rétegekre.",

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
