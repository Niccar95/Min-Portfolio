import "../scss/style.scss";
import { navigationHandler } from "./navigationHandler";

//Vid click på nav länk. scrolla ner till sektion

navigationHandler();

//modal hanterare

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

//onmousemove för mus vid hover över projekt containers

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

//functionalitet för pilarna för att scrolla bland kompetenser

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
