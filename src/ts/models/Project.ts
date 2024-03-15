export class Project {
  id: number;
  projectName: string;
  description: string;
  language: string;
  img: string;
  link: string;

  constructor(
    id: number,
    projectName: string,
    description: string,
    language: string,
    img: string,
    link: string
  ) {
    this.id = id;
    this.projectName = projectName;
    this.description = description;
    this.language = language;
    this.img = img;
    this.link = link;
  }
}
