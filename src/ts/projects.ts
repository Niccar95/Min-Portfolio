import "./../scss/projects.scss";
import { Project } from "./models";

const allProjectsSection = document.getElementById("allProjectsSection");

const todoList = new Project(
  1,
  "To-Do List",
  "blah",
  "/Min-Portfolio/src/img/todoList.png"
);

const pokeSearch = new Project(
  2,
  "pokeSearch",
  "bleh",
  "/Min-Portfolio/src/img/pokeSearch.png"
);

let projectList = [todoList, pokeSearch];

projectList.forEach((project) => {
  console.log(project);

  const projectContainer = document.createElement("section");
  //const projectDescription = document.createElement("p");

  projectContainer.className = "projectContainer";

  allProjectsSection?.appendChild(projectContainer);
  projectContainer.appendChild(project.img);
});
