export class Project {
  id: number;
  projectName: string;
  description: string;
  img: HTMLImageElement;

  constructor(
    id: number,
    projectName: string,
    description: string,
    imgSrc: string
  ) {
    this.id = id;
    this.projectName = projectName;
    this.description = description;
    this.img = new Image();
    console.log(`Image URL: ./src/dist/assets/${imgSrc}`);
    this.img.src = `./src/img/${imgSrc}`;
  }
}
