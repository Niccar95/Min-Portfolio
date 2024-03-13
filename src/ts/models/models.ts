export class Project {
  id: number;
  projectName: string;
  description: string;
  language: string;
  img: string;

  constructor(
    id: number,
    projectName: string,
    description: string,
    language: string,
    img: string
  ) {
    this.id = id;
    this.projectName = projectName;
    this.description = description;
    this.language = language;
    this.img = img;
  }
}
