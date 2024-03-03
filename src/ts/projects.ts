import "./../scss/projects.scss";
import { Project } from "./models";

import todoListImage from "/src/img/todoList.png";
import pokeSearchImage from "/src/img/pokeSearch.png";

const allProjectsSection = document.getElementById("allProjectsSection");

const todoList = new Project(1, "To-Do List", "blah", todoListImage);

const pokeSearch = new Project(2, "pokeSearch", "bleh", pokeSearchImage);

let projectList = [todoList, pokeSearch];

projectList.forEach((project) => {
  console.log(project);

  const projectContainer = document.createElement("section");
  //const projectDescription = document.createElement("p");
  const projectImage = document.createElement("img");

  projectImage.src = project.img;

  projectContainer.className = "projectContainer";

  allProjectsSection?.appendChild(projectContainer);
  projectContainer.appendChild(projectImage);
});
