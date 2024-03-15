import "./../scss/projects.scss";
import { Project } from "./models/Project";

import todoListImage from "/src/img/todoList.png";
import pokeSearchImage from "/src/img/pokeSearch.png";
import todoList2Image from "/src/img/todoList2.png";
import theWebshopImage from "/src/img/theWebshop.png";

const projectsGallery = document.getElementById("projectsGallery");

const todoList = new Project(
  1,
  "To-Do List",
  'Mitt första skolprojekt. Skapa din egna "att göra" lista.',
  "Sass & JS",
  todoListImage,
  "https://niccar95.github.io/todo-list/"
);
const pokeSearch = new Project(
  2,
  "PokeSearch",
  "Personligt projekt. Hitta så många Pokemon du kan innan tiden är slut!",
  "Sass & JS",
  pokeSearchImage,
  "https://niccar95.github.io/PokeSearch/"
);
const todoList2 = new Project(
  3,
  "To-Do List 2.0",
  'Min nya "att göra" lista. Alla "tasks" sparas i localstorage och kan sorteras.',
  "Sass & TS",
  todoList2Image,
  "https://niccar95.github.io/To-Do-List-2.0/"
);
const theWebshop = new Project(
  4,
  "The Webshop",
  'Mitt första grupprojekt. Simulera ett köp med "The Webshop."',
  "SaSS & TS",
  theWebshopImage,
  "https://niccar95.github.io/the-webshop-team-5/"
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
  projectTitle.className = "projectTitle";
  projectSummary.className = "projectSummary";
  seeProjectButton.className = "seeProjectButton";
  label.className = "label";
  codeTag.className = "codeTag";

  modalSection.className = "modalSection";
  modalContent.className = "modalContent";
  modalImg.className = "modalImg";
  modalCloseButton.className = "modalCloseButton";

  seeProjectButton.addEventListener("click", () => {
    window.location.href = project.link;
  });

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
