import "./../scss/projects.scss";
import { Project } from "./models/models";

import todoListImage from "/src/img/todoList.png";
import pokeSearchImage from "/src/img/pokeSearch.png";
import todoList2Image from "/src/img/todoList2.png";
import theWebshopImage from "/src/img/theWebshop.png";

const projectsGallery = document.getElementById("projectsGallery");

const todoList = new Project(
  1,
  "To-Do List",
  "blah",
  "JS & SASS",
  todoListImage
);
const pokeSearch = new Project(
  2,
  "PokeSearch",
  "bleh",
  "JS & SASS",
  pokeSearchImage
);
const todoList2 = new Project(
  3,
  "To-Do List 2.0",
  "new todo",
  "TS & SASS",
  todoList2Image
);
const theWebshop = new Project(
  4,
  "The Webshop",
  "Grupprojekt. En webshop simulering",
  "TS & SASS",
  theWebshopImage
);

let projectList = [todoList2, pokeSearch, theWebshop, todoList];

projectList.forEach((project) => {
  const projectContainer = document.createElement("section");
  const imgContainer = document.createElement("section");

  const summaryContainer = document.createElement("section");
  const projectTitle = document.createElement("h2");
  const projectSummary = document.createElement("p");
  const projectImage = document.createElement("img");
  const seeProjectButton = document.createElement("button");
  const label = document.createElement("section");
  const codeTag = document.createElement("p");
  const modalSection = document.createElement("dialog");
  const modalContent = document.createElement("section");
  const modalImg = document.createElement("img");
  const modalCloseButton = document.createElement("button");

  projectImage.src = project.img;
  projectTitle.innerHTML = project.projectName;
  projectSummary.innerHTML = project.description;
  seeProjectButton.innerHTML = "Se projektet";
  codeTag.innerHTML = project.language;

  modalImg.src = project.img;
  modalCloseButton.innerHTML = "Stäng";

  projectContainer.className = "projectContainer";
  imgContainer.className = "imgContainer";
  projectImage.className = "projectImage";
  summaryContainer.className = "summaryContainer";
  projectTitle.className = "title";
  projectSummary.className = "projectSummary";
  seeProjectButton.className = "seeProjectButton";
  label.className = "label";
  codeTag.className = "codeTag";

  modalSection.className = "modalSection";
  modalContent.className = "modalContent";
  modalImg.className = "modalImg";
  modalCloseButton.className = "modalCloseButton";

  imgContainer.addEventListener("click", () => {
    modalSection.showModal();
  });

  modalCloseButton.addEventListener("click", () => {
    modalSection.close();
  });

  if (projectsGallery) {
    projectsGallery.className = "projectsGallery";
  }

  projectsGallery?.appendChild(projectContainer);
  projectsGallery?.appendChild(modalSection);
  modalSection.appendChild(modalContent);
  modalContent.appendChild(modalImg);
  modalContent.appendChild(modalCloseButton);
  projectContainer.appendChild(imgContainer);
  imgContainer.appendChild(projectImage);
  projectContainer.appendChild(summaryContainer);
  projectContainer.appendChild(label);
  label.appendChild(codeTag);
  summaryContainer.appendChild(projectTitle);
  summaryContainer.appendChild(projectSummary);
  summaryContainer.appendChild(seeProjectButton);
});
