import "./../scss/projects.scss";
import { Project } from "./models/models";

import todoListImage from "/src/img/todoList.png";
import pokeSearchImage from "/src/img/pokeSearch.png";
import todoList2Image from "/src/img/todoList2.png";

const projectsGallery = document.getElementById("projectsGallery");

const todoList = new Project(1, "To-Do List", "blah", todoListImage);
const pokeSearch = new Project(2, "pokeSearch", "bleh", pokeSearchImage);
const todoList2 = new Project(3, "TO-DO List 2.0", "new todo", todoList2Image);

let projectList = [todoList, pokeSearch, todoList2];

projectList.forEach((project) => {
  console.log(project);

  const projectContainer = document.createElement("section");
  const imgContainer = document.createElement("section");

  //const projectDescription = document.createElement("p");
  const projectImage = document.createElement("img");

  projectImage.src = project.img;

  projectContainer.className = "projectContainer";
  imgContainer.className = "imgContainer";
  projectImage.className = "projectImage";

  if (projectsGallery) {
    projectsGallery.className = "projectsGallery";
  }

  projectsGallery?.appendChild(projectContainer);
  projectContainer.appendChild(imgContainer);
  imgContainer.appendChild(projectImage);
});
