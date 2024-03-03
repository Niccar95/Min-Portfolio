import "./../scss/projects.scss";
import { Project } from "./models";

const allProjectsSection = document.getElementById("allProjectsSection");

const todoList = new Project(1, "To-Do List", "blah", "todoList.png");

const pokeSearch = new Project(2, "pokeSearch", "bleh", "pokeSearch.png");

let projectList = [todoList, pokeSearch];

projectList.forEach((project) => {
  console.log(project);

  const projectContainer = document.createElement("section");
  //const projectDescription = document.createElement("p");
  const projectImage = document.createElement("img");

  projectImage.src = project.img;

  console.log(todoList.img);

  projectContainer.className = "projectContainer";

  allProjectsSection?.appendChild(projectContainer);
  projectContainer.appendChild(projectImage);
});
