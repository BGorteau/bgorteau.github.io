const translations = {
  // ================================================
  // =================== FRANÇAIS ===================
  // ================================================

  fr: {
    // ============ MENU ============
    home_title: "Accueil",
    about_title: "À propos",
    projects_title: "Projets",

    // ============ MENU ============
    home_menu: "Accueil",
    home_mobile_menu: "Accueil",
    about_menu: "À propos",
    about_mobile_menu: "À propos",
    projects_menu: "Projets",
    projects_mobile_menu: "Projets",
    open_contact: "Me Contacter",
    language_toggle: "English",
    item_language_menu: "English",
    mobile_language: "Langue",

    // ============ PRESENTATION ============
    presentation_h4: "Data Scientist",
    presentation_text: "Titulaire d’un <strong>master en Mathématiques Appliquées et Statistiques</strong> de l’Université Rennes 2, je cumule trois années d’expérience dans le domaine de la <strong>data science</strong>, acquises d’abord chez <strong>Capgemini</strong> puis à l’<strong>UNESCO</strong>. Je possède également un intérêt marqué pour l’<strong>analyse de données</strong> dans les domaines du sport et de la géopolitique. Je serais ravi de mettre mes compétences au service de vos projets et reste ouvert à toute discussion constructive. N'hésitez pas à me contacter.",
    pres_download_cv: "Télécharger mon CV",
    projects_h2_hp: "Projets",
    
    // ============ SKILLS ============
    skills_h2: "Compétences",
    tech_skills: "Compétences techniques",
    pers_skills: "Compétences personnelles",
    skills_know_more: "En savoir plus",
    skills_see_projects: "Voir mes projets",
    home_skills: {
      tech: ['Python', 'R', 'SQL', 'Web Scraping', 'HTML', 'Statistiques', 'Machine Learning',
             'Visualisation de données', 'Extraction de données', 'Transformation des données'],
      pers: ['Curieux', 'Sociable', 'Travailleur', 'Résolution de problèmes']
    },

    // ============ PROJECTS ============
    projects_h2: "Projets",
    p_pp: "Ci-après, vous trouverez quelques-uns de mes projets. Ceux-ci couvrent un large éventail de domaines de la data, du web scraping aux méthodes de prédiction et à l'analyse des données de tracking. Chaque projet dispose d'un dépôt GitHub. N'hésitez pas à me contacter pour toute question ou suggestion.",
    // ===== PROJECT NUMBER 1 =====
    proj_1_h3: "Du web scraping à la création d'une base de données",
    proj_1_skill_1: "Python",
    proj_1_skill_2: "Scraping de PDF",
    proj_1_skill_3: "BeautifulSoup",
    proj_1_desc: "Extraction des données de demi-fond et de fond des championnats du monde d'athlétisme afin de créer une base de données propre et utilisable.",
    // ===== PROJECT NUMBER 2 =====
    proj_2_h3: "Exploration de données de tracking (sport)",
    proj_2_skill_1: "Python",
    proj_2_skill_2: "Diagramme de Voronoï",
    proj_2_skill_3: "Données de tracking",
    proj_2_desc: "Analyse des données sur la disponibilité des joueurs de hockey. Ce projet m'a permis d'atteindre la finale de la Big Data Cup 2025 organisée par Stathletes.",
    // ===== PROJECT NUMBER 3 =====
    proj_3_h3: "Prédictions avec apprentissage supervisé",
    proj_3_skill_1: "Python",
    proj_3_skill_2: "Machine Learning",
    proj_3_skill_3: "scikit-learn",
    proj_3_desc: "Prédiction des prix des logements Airbnb à New York en utilisant la librairie de machine learning scikit-learn.",
    // ===== PROJECT NUMBER 4 =====
    proj_4_h3: "Visualisation de données",
    proj_4_skill_1: "Python",
    proj_4_skill_2: "Visualisation de données",
    proj_4_skill_3: "Matplotlib",
    proj_4_desc: "Visualisations de données sur l'éducation réalisées avec les données de l'Institut de statistique de l'Unesco (ISU).",
    // ===== PROJECT NUMBER 5 =====
    proj_5_h3: "Analyse textuelle et NLP",
    proj_5_skill_1: "Python",
    proj_5_skill_2: "NLP",
    proj_5_skill_3: "Spacy",
    proj_5_desc: "Utilisations de différentes techniques de NLP pour analyser les tweets du journal français Le Monde.",
    // ===== PROJECT NUMBER 6 =====
    proj_6_h3: "De l’algèbre linéaire à l’analyse statistique",
    proj_6_skill_1: "R",
    proj_6_skill_2: "ACP",
    proj_6_skill_3: "Statistiques",
    proj_6_desc: "Codage complet d'une ACP avec R.",

    // ============ CONTACTS ============
    contacts_h2: 'Me contacter',

    // ============ ABOUT ============
    about_pres_h2: 'Présentation',
    about_presentation_text: "Mon parcours dans le domaine de la data commence à l'Université Rennes 2. J'y ai obtenu une licence en <strong>Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS)</strong> et un master en <strong>Mathématiques Appliquées et Statistiques (MAS)</strong>. Durant mon master, j’ai occupé pendant un an et demi les postes de développeur et de data scientist chez <strong>Capgemini</strong>. À la suite de mes études, j’ai effectué une mission d’un an avec l’équipe du <strong>Rapport mondial de suivi sur l'éducation de l’UNESCO</strong> en tant que consultant data. En parallèle de mon travail, j’aime réaliser des projets data appliqués au sport et à la géopolitique.",
    about_experience_h2: 'Expériences professionnelles',
    // ===== EXPERIENCE NUMBER 1 =====
    about_exp_1_date: 'Avril 2024 - Avril 2025',
    about_exp_1_desc: "Création d'une base de données d'aides à l'éducation à partir des données de l'IATI.",
    // ===== EXPERIENCE NUMBER 2 =====
    about_exp_2_date: 'Mai 2022 - Septembre 2023',
    about_exp_2_desc: "Création d'un datalake et développement d'un projet d'IA pour détecter les anomalies à partir de fichiers de logs.",

    // ============ EDUCATION ============
    about_education_h2: 'Formation',
    // ===== EDUCATION NUMBER 1 =====
    about_education_1_h3: 'Université Rennes 2',
    about_education_1_h4: "Master — Mathématiques Appliquées et Statistiques (MAS) — 2023",
    // ===== EDUCATION NUMBER 2 =====
    about_education_2_h3: 'Université Rennes 2',
    about_education_2_h4: "Licence — Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS) — 2021",

    // ============ BUTTON ============
    dropdown_show: "Voir plus de projets",
    dropdown_hide: "Masquer",

    // ============ FOOTER ============
    footer_copyright: "© 2025 Baptiste Gorteau. Tous droits réservés."
  },

  // ================================================
  // ==================== ENGLISH ===================
  // ================================================
  en: {
    // ============ MENU ============
    home_title: "Home",
    about_title: "About",
    projects_title: "Projects",

    // ============ MENU ============
    home_menu: "Home",
    home_mobile_menu: "Home",
    about_menu: "About",
    about_mobile_menu: "About",
    projects_menu: "Projects",
    projects_mobile_menu: "Projects",
    open_contact: "Contact Me",
    language_toggle: "Français",
    item_language_menu: "Français",
    mobile_language: "Language",

    // ============ PRESENTATION ============
    presentation_h4: "Data Scientist",
    presentation_text: "With a <strong>Master's degree in Applied Mathematics and Statistics</strong> from Rennes 2 University, I bring three years of experience in the <strong>data science</strong> field, first at <strong>Capgemini</strong> and then at <strong>UNESCO</strong>. I also have a keen interest in <strong>data analysis</strong> in the fields of sports and geopolitics. I would be delighted to contribute my skills to your projects and remain open to constructive discussion. Please do not hesitate to contact me.",
    pres_download_cv: "Download CV",
    projects_h2_hp: "Projects",

    // ============ SKILLS ============
    skills_h2: "Skills",
    tech_skills: "Technical skills",
    pers_skills: "Personal skills",
    skills_know_more: "Know more",
    skills_see_projects: "See projects",
    home_skills: {
      tech: ['Python', 'R', 'SQL', 'Web Scraping', 'HTML', 'Statistics', 'Machine Learning',
             'Data Visualization', 'Data Extraction', 'Data Transformation'],
      pers: ['Curious', 'Sociable', 'Worker', 'Problem Solving']
    },

    // ============ PROJECTS ============
    projects_h2: "Projects",
    p_pp: "Below, you can find some of the projects I've made. These cover a wide range of data fields, from web scraping to prediction methods and tracking data analysis. Each project has a GitHub repository. Feel free to contact me if you have any questions or suggestions about them.",
    // ===== PROJECT NUMBER 1 =====
    proj_1_h3: "From web scraping to creating a database",
    proj_1_skill_1: "Python",
    proj_1_skill_2: "PDF Scraping",
    proj_1_skill_3: "BeautifulSoup",
    proj_1_desc: "Scraping of World Athletics championships middle distance and distance data in order to create a clean and usable database.",
    // ===== PROJECT NUMBER 2 =====
    proj_2_h3: "Exploration of tracking data (sport)",
    proj_2_skill_1: "Python",
    proj_2_skill_2: "Voronoi Diagram",
    proj_2_skill_3: "Tracking Data",
    proj_2_desc: "Data analysis on hockey player availability. This project allowed me to reach the final of the 2025 Big Data Cup organized by Stathletes",
    // ===== PROJECT NUMBER 3 =====
    proj_3_h3: "Predictions with supervised learning",
    proj_3_skill_1: "Python",
    proj_3_skill_2: "Machine Learning",
    proj_3_skill_3: "scikit-learn",
    proj_3_desc: "Predicting Airbnb housing prices in New York using the scikit-learn machine learning library.",
    // ===== PROJECT NUMBER 4 =====
    proj_4_h3: "Data visualization",
    proj_4_skill_1: "Python",
    proj_4_skill_2: "Data Visualization",
    proj_4_skill_3: "Matplotlib",
    proj_4_desc: "Education data visualizations realized with the Unesco Institute for Statistics (UIS) data.",
    // ===== PROJECT NUMBER 5 =====
    proj_5_h3: "Text analysis and NLP",
    proj_5_skill_1: "Python",
    proj_5_skill_2: "NLP",
    proj_5_skill_3: "Spacy",
    proj_5_desc: "Uses of different NLP techniques to analyze tweets from the French newspaper Le Monde.",
    // ===== PROJECT NUMBER 6 =====
    proj_6_h3: "From linear algebra to statistical analysis",
    proj_6_skill_1: "R",
    proj_6_skill_2: "PCA",
    proj_6_skill_3: "Statistics",
    proj_6_desc: "Complete coding of a PCA with R.",

    // ============ CONTACTS ============
    contacts_h2: 'Contact Me',

    // ============ ABOUT ============
    about_pres_h2: 'Presentation',
    about_presentation_text: "My journey in the data field began at Rennes 2 University (France). There, I obtained a <strong>bachelor's degree in Mathematics and Computer Science Applied to the Human and Social Sciences</strong> and a <strong>master's degree in Applied Mathematics and Statistics</strong>. During my master's degree, I worked for a year and a half as a developer and data scientist at <strong>Capgemini</strong>. Following my studies, I completed a one-year mission with the <strong>UNESCO Global Education Monitoring Report</strong> team as a data consultant. Alongside my work, I like to carry out data projects applied to sport and geopolitics.",
    about_experience_h2: 'Professional experiences',
    // ===== EXPERIENCE NUMBER 1 =====
    about_exp_1_date: 'April 2024 - April 2025',
    about_exp_1_desc: 'Creation of a database of education aids from IATI data.',
    // ===== EXPERIENCE NUMBER 2 =====
    about_exp_2_date: 'May 2022 - September 2023',
    about_exp_2_desc: 'Datalake creation and development of an AI project to detect anomalies from log files.',

    // ============ EDUCATION ============
    about_education_h2: 'Education',
    // ===== EDUCATION NUMBER 1 =====
    about_education_1_h3: 'Rennes 2 University',
    about_education_1_h4: "Master's degree — Applied Mathematics and Statistics — 2023",
    // ===== EDUCATION NUMBER 2 =====
    about_education_2_h3: 'Rennes 2 University',
    about_education_2_h4: "Bachelor's degree — Mathematics and Computer Science Applied to Human and Social Sciences — 2021",

    // ============ BUTTON ============
    dropdown_show: "Load all projects",
    dropdown_hide: "Hide",

    // ============ FOOTER ============
    footer_copyright: "© 2025 Baptiste Gorteau. All rights reserved."

  }
};