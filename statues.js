const translations = {
  en: {
    home: "Home",
    statues: "Statues",
    location: "Location",
    map: "Map",
    list: "List",

    statues_hero_title: "Explore the\nhistory of Budapest",

    creator_title: "Who created them?",
    creator_text:
      "Mihály Kolodko is a Ukrainian-born sculptor living in Hungary. His tiny statues mix humor, political commentary, and pop culture references.",

    statue_list_title: "List of statues",
    search_placeholder: "Look for statue",
    filter_btn: "⚲",

    statue_among_us: "Among Us",
    statue_dracula: "Dracula",
    statue_hanna: "Hanna Szenes",
    statue_noah: "Noah’s Ark",

    info: "Info",
    show_more: "Show more",

    pages: "Pages"
  },

  hu: {
    home: "Kezdőlap",
    statues: "Szobrok",
    location: "Helyszín",
    map: "Térkép",
    list: "Lista",

    statues_hero_title: "Fedezd fel\nBudapest történelmét",

    creator_title: "Ki készítette őket?",
    creator_text:
      "Mihály Kolodko ukrán származású szobrász, aki Magyarországon él. Apró szobrai humort, politikai utalásokat és popkultúrát ötvöznek.",

    statue_list_title: "Szobrok listája",
    search_placeholder: "Szobor keresése",
    filter_btn: "⚲",

    statue_among_us: "Among Us",
    statue_dracula: "Drakula",
    statue_hanna: "Hanna Szenes",
    statue_noah: "Noé bárkája",

    info: "Infó",
    show_more: "Mutass többet",

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
