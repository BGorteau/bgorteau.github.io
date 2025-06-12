/* ---------------------------- INITIALIZE VARIABLES -------------------------------------*/

let currentSkillsType = 'tech';
let currentLang = localStorage.getItem('lang') || 'en';

/* ---------------------------- CHANGE SKILLS -------------------------------------*/

function renderSkills() {
  const container = document.getElementById("skills-text");
  if (!container) return;

  const skillsList = translations[currentLang]?.home_skills?.[currentSkillsType];
  if (!skillsList) return;

  container.innerHTML = skillsList.map(skill => `<div class="skill">${skill}</div>`).join('');
}

function change_skills(type) {
  currentSkillsType = type;
  renderSkills();

  const techBtn = document.getElementById("tech_skills");
  const persBtn = document.getElementById("pers_skills");

  if (type === 'tech') {
    techBtn.classList.add("clicked-click-skills");
    persBtn.classList.remove("clicked-click-skills");
  } else {
    persBtn.classList.add("clicked-click-skills");
    techBtn.classList.remove("clicked-click-skills");
  }
}

/* ---------------------------- LOAD ALL PROJECTS -------------------------------------*/

function toggleProjects() {
    const container = document.getElementById("display-more-projects");
    const button = document.getElementById("dropdown_button");

    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "flex";
      button.textContent = translations[currentLang].dropdown_hide;
    } else {
      container.style.display = "none";
      button.textContent = translations[currentLang].dropdown_show;
    }
  }

/* ---------------------------- CHANGE LANGUAGE -------------------------------------*/

function updateContent() {
  const langData = translations[currentLang];
  for (const id in langData) {
    if (id !== "skills" && id !== "dropdown_show" && id !== "dropdown_hide") {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = langData[id];
      }
    }
  }

  renderSkills(); // recharge les skills traduits

  // === Mise à jour du bouton dropdown en fonction de l’état actuel ===
  const button = document.getElementById("dropdown_button");
  const container = document.getElementById("display-more-projects");
  if (button && container) {
    const isVisible = container.style.display === "flex";
    button.textContent = isVisible
      ? translations[currentLang].dropdown_hide
      : translations[currentLang].dropdown_show;
  }

  // ===== CHANGE LINKS IN FUNCTION OF LANGUAGE =====

  // ===== DOWNLOAD CV =====
  const downloadcvLink = document.getElementById("pres_download_cv");
  if (downloadcvLink) {
    if (currentLang === "fr") {
      downloadcvLink.href = "pdf/baptiste-gorteau-fr.pdf";
    } else if (currentLang === "en") {
      downloadcvLink.href = "pdf/baptiste-gorteau-en.pdf";
    }
  }

  // ===== CAPGEMINI =====
  const capgeminiLink = document.getElementById("capgemini_link");
  if (capgeminiLink) {
    if (currentLang === "fr") {
      capgeminiLink.href = "https://www.capgemini.com/fr-fr/";
    } else if (currentLang === "en") {
      capgeminiLink.href = "https://www.capgemini.com/";
    }
  }

  // ===== UNESCO =====
  const unescoLink = document.getElementById("unesco_gem_link");
  if (unescoLink) {
    if (currentLang === "fr") {
      unescoLink.href = "https://gem-report-2023.unesco.org/fr/accueil/";
    } else if (currentLang === "en") {
      unescoLink.href = "https://gem-report-2023.unesco.org/";
    }
  }

  // ===== RENNES 2 =====
  const rennes2Link = document.getElementById("rennes2_link");
  if (rennes2Link) {
    if (currentLang === "fr") {
      rennes2Link.href = "https://www.univ-rennes2.fr/";
    } else if (currentLang === "en") {
      rennes2Link.href = "https://international.univ-rennes2.fr/";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateContent();

  const langToggle = [
    document.getElementById("language_toggle"),
    document.getElementById("item_language_menu"),
    ];
  langToggle.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        localStorage.setItem('lang', currentLang);
        updateContent();
        
        langToggle.forEach(b => b.textContent = translations[currentLang].language_toggle);
      });
    }
  });

  // if (langToggle) {
  //   langToggle.addEventListener("click", (e) => {
  //     e.preventDefault(); // évite la redirection
  //     currentLang = currentLang === 'en' ? 'fr' : 'en';
  //     localStorage.setItem('lang', currentLang);
  //     updateContent();
  //   });
  // }

  // === MENU MOBILE ===
  const menu_openModalBtn = document.getElementById('open-mobile-menu');
  const menu_overlay = document.getElementById('menu-overlay');
  const menu_closeBtn = document.getElementById('menu-closeBtn');

  if (menu_openModalBtn && menu_overlay && menu_closeBtn) {
    menu_openModalBtn.addEventListener('click', () => menu_overlay.style.display = 'flex');
    menu_closeBtn.addEventListener('click', () => menu_overlay.style.display = 'none');
    menu_overlay.addEventListener('click', (e) => {
      if (e.target === menu_overlay) menu_overlay.style.display = 'none';
    });
  }

  // === CONTACT ===
  const contact_openModalBtn = document.getElementById('open_contact');
  const contact_overlay = document.getElementById('contact-overlay');
  const contact_closeBtn = document.getElementById('contact-closeBtn');

  if (contact_openModalBtn && contact_overlay && contact_closeBtn) {
    contact_openModalBtn.addEventListener('click', () => contact_overlay.style.display = 'flex');
    contact_closeBtn.addEventListener('click', () => contact_overlay.style.display = 'none');
    contact_overlay.addEventListener('click', (e) => {
      if (e.target === contact_overlay) contact_overlay.style.display = 'none';
    });
  }

  // === LANGUAGE (MODALE) ===
  const language_openModalBtn = document.getElementById('open-language');
  const language_overlay = document.getElementById('language-overlay');
  const language_closeBtn = document.getElementById('language-closeBtn');

  if (language_openModalBtn && language_overlay && language_closeBtn) {
    language_openModalBtn.addEventListener('click', () => language_overlay.style.display = 'flex');
    language_closeBtn.addEventListener('click', () => language_overlay.style.display = 'none');
    language_overlay.addEventListener('click', (e) => {
      if (e.target === language_overlay) language_overlay.style.display = 'none';
    });
  }
  // Met la bonne couleur au démarrage
  document.getElementById("tech_skills").classList.add("clicked-click-skills");
});

