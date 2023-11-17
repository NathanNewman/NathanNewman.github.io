const navAbout = document.getElementById("nav-about");
const navResume = document.getElementById("nav-resume");
const navProjects = document.getElementById("nav-projects");
const navChess = document.getElementById("nav-chess");
const navInvestor = document.getElementById("nav-investor");
const navJobly = document.getElementById("nav-jobly");
const articles = document.querySelectorAll("article");

function handleNavigation(event) {
  const navId = event.target.closest("button").id;
  if (navId === "nav-projects") {
    document.getElementById("myProjects").style.display = "block";
  } else {
    document.getElementById("myProjects").style.display = "none";
    articles.forEach((article) => (article.style.display = "none"));
    const articleToShow = document.querySelector(
      `.${navId.replace("nav-", "")}`
    );
    if (articleToShow.classList[0] === "about") {
      articleToShow.style.display = "flex";
    } else {
      articleToShow.style.display = "block";
    }
  }
}

navAbout.addEventListener("click", handleNavigation);
navResume.addEventListener("click", handleNavigation);
navProjects.addEventListener("click", handleNavigation);
navChess.addEventListener("click", handleNavigation);
navInvestor.addEventListener("click", handleNavigation);
navJobly.addEventListener("click", handleNavigation);
