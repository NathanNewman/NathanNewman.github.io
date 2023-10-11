const navAbout = document.getElementById("nav-about");
const navResume = document.getElementById("nav-resume");
const navChess = document.getElementById("nav-chess");
const navJobly = document.getElementById("nav-jobly");
const articles = document.querySelectorAll("article");

function handleNavigation(event) {
  const navId = event.target.closest("button").id;
  articles.forEach((article) => (article.style.display = "none"));
  const articleToShow = document.querySelector(`.${navId.replace("nav-", "")}`);
  if (articleToShow.classList[0] === "about") {
    articleToShow.style.display = "flex";
  } else {
    articleToShow.style.display = "block";
  }
}

navAbout.addEventListener("click", handleNavigation);
navResume.addEventListener("click", handleNavigation);
navChess.addEventListener("click", handleNavigation);
navJobly.addEventListener("click", handleNavigation);
