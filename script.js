var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/* ---------------------------- FR - Bar de menu dynamique -------------------------------------*/

// Check the screen width and change content accordingly
function checkScreenWidth() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const dynamicContent = document.getElementById('dynamic-menu-fr');

  if (screenWidth <= 900) {
    dynamicContent.innerHTML = '<center><a href=index.html><p>Baptiste Gorteau</p></a></center>';
  } else {
    dynamicContent.innerHTML = '<li><a href="index.html">Accueil</a></li><li><a href="fr/cv.html">CV</a></li><li><a href="fr/page-projets-ecole.html">Projets université</a></li><li><a href="fr/page-projets-perso.html">Projets personnels</a></li>';
  }
}

checkScreenWidth();

// Check on window resize
window.addEventListener('resize', checkScreenWidth);


/* -------------------------- FR - Texte page d'accueil dynamique ------------------------------*/

function checkScreenWidthHomeDesc() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const dynamicContent = document.getElementById('dynamic-text-home-page-top');

  if (screenWidth <= 900) {
    dynamicContent.innerHTML = "Diplômé d'un master en mathématiques appliquées et statistiques à l'Université de Rennes 2. <br>Passionné par les applications des mathématiques aux domaines du sport et de la géopolitique.<br><br><a href='pdf/CV_Baptiste Gorteau.pdf', target='_blank', download='baptiste-gorteau-fr.pdf'><div id='download-cv'>Téléchargez mon CV</div></a>";
  } else {
    dynamicContent.innerHTML = "<h1>BAPTISTE GORTEAU</h1><br>Diplômé d'un master en mathématiques appliquées et statistiques à l'Université de Rennes 2. <br>Passionné par les applications des mathématiques aux domaines du sport et de la géopolitique.<br><br><a href='pdf/baptiste-gorteau-fr.pdf', target='_blank', download='cv-baptiste-gorteau.pdf'><div id='download-cv'>Téléchargez mon CV</div></a>";
    }
}

// Initial check on page load
checkScreenWidthHomeDesc();

// Check on window resize
window.addEventListener('resize', checkScreenWidthHomeDesc);

/* ---------------------------------- FR - Sidenav dynamique -----------------------------------*/

function checkScreenWidthSidenav() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const dynamicContent = document.getElementById('mySidenav');

  if (screenWidth <= 900) {
    dynamicContent.innerHTML = "<a id='closeBtn' href='#' class='close'>×</a> <ul class='menu-mobile-fr'><li><a href='index.html'>Accueil</a></li><li><a href='fr/cv.html'>CV</a></li><li><a href='fr/page-projets-ecole.html'>Projets université</a></li><li><a href='fr/page-projets-perso.html'>Projets personnels</a></li></ul><hr><br><center><div class='image-cercle'><img src='images/photo_BGO.JPG' alt='Photo profil'></div><h2> Baptiste Gorteau </h2></center><div class = pres-R2>Diplômé <a href=https://sites-formations.univ-rennes2.fr/master-mas/>master MAS</a> (mathématiques appliquées, statistiques) <br> 📍 <a href = https://www.univ-rennes2.fr/> Université Rennes 2 </a></div><h2>Réseaux :</h2><a class = 'github-logo' href='https://github.com/BGorteau'><i class='fab fa-github' style='font-size:30px'></i></a><a class = 'github-logo' href='https://www.linkedin.com/in/baptiste-gorteau-2ab174200/'><i class='fab fa-linkedin' style='font-size:30px'></i></a></center>";
    var closeBtn = document.getElementById("closeBtn");
    closeBtn.onclick = closeNav;
    var openBtn = document.getElementById("openBtn");
    openBtn.onclick = openNav;
  } else {
    dynamicContent.innerHTML = "<a id='closeBtn' href='#' class='close'>×</a><center><div class='image-cercle'><img src='images/photo_BGO.JPG' alt='Photo profil'></div><h2> Baptiste Gorteau </h2></center><div class = pres-R2>Diplômé <a href=https://sites-formations.univ-rennes2.fr/master-mas/>master MAS</a> (mathématiques appliquées, statistiques) <br> 📍 <a href = https://www.univ-rennes2.fr/> Université Rennes 2 </a></div><h2>Réseaux :</h2><a class = 'github-logo' href='https://github.com/BGorteau'><i class='fab fa-github' style='font-size:30px'></i></a><a class = 'github-logo' href='https://www.linkedin.com/in/baptiste-gorteau-2ab174200/'><i class='fab fa-linkedin' style='font-size:30px'></i></a>";
    var closeBtn = document.getElementById("closeBtn");
    closeBtn.onclick = closeNav;
    var openBtn = document.getElementById("openBtn");
    openBtn.onclick = openNav;
  }
}

// Initial check on page load
checkScreenWidthSidenav();

// Check on window resize
window.addEventListener('resize', checkScreenWidthSidenav);

/* ---------------------------------------------------------------------------------------------*/
