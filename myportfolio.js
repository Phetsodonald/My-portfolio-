const sidebarElement = document.querySelector(".sidebar");
const closeElement = document.querySelector(".close-menu");
const openElement = document.querySelector(".open-menu");
const sidebarHomeElement = document.querySelector(".sidebar-home-nav");
const sidebarAboutElement = document.querySelector(".sidebar-about-nav");
const sidebarSkillsElement = document.querySelector(".sidebar-skills-nav");
const sidebarProjectsElement = document.querySelector(".sidebar-projects-nav");
const sidebarContactsElement = document.querySelector(".sidebar-contacts-nav");


function openMenu(){
    sidebarElement.style.display = "flex";
}


function closeMenu(){
    sidebarElement.style.display = "none";
}

openElement.addEventListener("click",openMenu);
closeElement.addEventListener("click",closeMenu);
sidebarHomeElement.addEventListener("click",closeMenu);
sidebarAboutElement.addEventListener("click",closeMenu);
sidebarSkillsElement.addEventListener("click",closeMenu);
sidebarProjectsElement.addEventListener("click",closeMenu);
sidebarContactsElement.addEventListener("click",closeMenu);