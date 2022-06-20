/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import _ from "lodash";
import "./css/style.css";
import Project from "./assets/images/project.jpg";

const main = document.querySelector("#main");

main.innerHTML = _.join(["webpack", "config"], " ");

const myProject = new Image();
myProject.src = Project;

main.appendChild(myProject);
