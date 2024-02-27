import "../scss/style.scss";

//Vid click på nav länk. scrolla ner till sektion

const mainSection = document.querySelector(".mainSection") as HTMLHtmlElement;
const navigation = document.querySelector(".navigation") as HTMLHtmlElement;

const mainSectionHeight = mainSection.offsetTop;

document.documentElement.style.setProperty(
  "--scroll-padding",
  mainSectionHeight + "px"
);

//Hamburgarmeny för mobilversion

const hamburger = document.querySelector(".hamburger");

const navigationList = document.querySelector(".navigationList");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigationList?.classList.toggle("active");
});

const navLink = document.querySelectorAll(".navLink");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navigationList?.classList.remove("active");
  })
);

//Lägga till/ta bort nav bakgrundsfärg

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navigation.classList.add("navScrolled");
  }

  if (window.scrollY === 0) {
    navigation.classList.remove("navScrolled");
  }
});

//Gömma nav när man scrollar ner. Visa den när man scrollar upp

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    console.log("ner");
    navigation.classList.add("hideNav");
  } else {
    console.log("upp");
    navigation.classList.remove("hideNav");
  }
  lastScrollY = window.scrollY;
});

const modalSection1 = document.querySelector(
  ".modalSection1"
) as HTMLDialogElement;
const modalSection2 = document.querySelector(
  ".modalSection2"
) as HTMLDialogElement;

const openModalSection1 = document.querySelector(
  ".openModalSection1"
) as HTMLElement;
const openModalSection2 = document.querySelector(
  ".openModalSection2"
) as HTMLElement;
const closeModalSection1 = document.querySelector(
  ".modalCloseButton1"
) as HTMLElement;
const closeModalSection2 = document.querySelector(
  ".modalCloseButton2"
) as HTMLElement;

openModalSection1.addEventListener("click", () => {
  modalSection1.showModal();
});

openModalSection2.addEventListener("click", () => {
  modalSection2.showModal();
});

closeModalSection1.addEventListener("click", () => {
  modalSection1.close();
});

closeModalSection2.addEventListener("click", () => {
  modalSection2.close();
});

const handleOnMouseMove = (e: MouseEvent) => {
  const projectContainer = e.currentTarget as HTMLElement;
  const rect = projectContainer.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  projectContainer.style.setProperty("--mouse-x", `${mouseX}px`);
  projectContainer.style.setProperty("--mouse-y", `${mouseY}px`);
};

const projectContainers = document.querySelectorAll(
  ".projectContainer"
) as NodeListOf<HTMLElement>;

projectContainers.forEach((projectContainer) => {
  projectContainer.addEventListener("mousemove", handleOnMouseMove);

  projectContainer.addEventListener("mouseleave", () => {
    projectContainer.style.removeProperty("--mouse-x");
    projectContainer.style.removeProperty("--mouse-y");
  });
});

const skillPageContainer = document.querySelector(
  ".skillPageContainer"
) as HTMLElement;
const rightArrowButton = document.querySelector(
  ".rightArrowButton"
) as HTMLButtonElement;
const leftArrowButton = document.querySelector(
  ".leftArrowButton"
) as HTMLButtonElement;

leftArrowButton.disabled = true;
rightArrowButton.disabled = false;

rightArrowButton.addEventListener("click", () => {
  skillPageContainer.classList.toggle("moveAside");
  skillPageContainer.classList.remove("moveBack");

  leftArrowButton.disabled = false;
  rightArrowButton.disabled = true;
});

leftArrowButton.addEventListener("click", () => {
  skillPageContainer.classList.remove("moveAside");
  skillPageContainer.classList.toggle("moveBack");
  leftArrowButton.disabled = true;
  rightArrowButton.disabled = false;
});

const viewAllButton = document.querySelector(".viewAllbutton");

viewAllButton?.addEventListener("click", () => {
  window.location.href = "./projects.html";
});
