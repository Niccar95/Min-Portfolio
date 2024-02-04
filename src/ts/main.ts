import '../scss/style.scss'


//Vid click på nav länk. scrolla ner till sektion

const mainSection = document.querySelector(".mainSection") as HTMLHtmlElement;
const navigation = document.querySelector(".navigation") as HTMLHtmlElement;

const mainSectionHeight = mainSection.offsetTop;

document.documentElement.style.setProperty (
  "--scroll-padding", 
  mainSectionHeight + "px"
);

//Hamburgarmeny för mobilversion

const hamburger = document.querySelector(".hamburger");

const navigationList = document.querySelector(".navigationList");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigationList?.classList.toggle("active");
})

const navLink = document.querySelectorAll(".navLink");

navLink.forEach(link => link.addEventListener("click", () => {
  hamburger?.classList.remove("active");
  navigationList?.classList.remove("active");
}));


//Lägga till/ta bort nav bakgrundsfärg

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navigation.classList.add("navScrolled");
  }

  if (window.scrollY === 0) {
    navigation.classList.remove("navScrolled");
  }

});

//Gömma nav när man scrollar ner. Visa den när man scrollar upp

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
  console.log("ner");
  navigation.classList.add("hideNav");
}

else {
  console.log("upp");
  navigation.classList.remove("hideNav");
}
lastScrollY = window.scrollY;  
});


const modalSection = document.getElementById("modalSection") as HTMLDialogElement;
const openModalSection1 = document.querySelector(".openModalSection1") as HTMLElement;
const openModalSection2 = document.querySelector(".openModalSection2") as HTMLElement;
const closeModalSection = document.querySelector(".modalCloseButton") as HTMLElement;
const modalContent = document.querySelector(".modalContent") as HTMLElement;
const modalImg = document.createElement("img");
modalContent.appendChild(modalImg);

modalImg.className = "modalImg";

  openModalSection1.addEventListener("click", () => {
    modalSection.showModal();
     modalImg.setAttribute("src", "./src/img/pokeSearch.png");
  });

  openModalSection2.addEventListener("click", () => {
    modalSection.showModal();
    modalImg.setAttribute("src", "./src/img/todoList.png");
  });

  

  closeModalSection.addEventListener("click", () => {
    modalSection.close();
  });



  const handleOnMouseMove = (e: MouseEvent) => {

    const projectContainer = e.currentTarget as HTMLElement;
    const rect = projectContainer.getBoundingClientRect();
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

      projectContainer.style.setProperty("--mouse-x", `${mouseX}px`);
      projectContainer.style.setProperty("--mouse-y", `${mouseY}px`);
  }

  const projectContainers = document.querySelectorAll('.projectContainer') as NodeListOf<HTMLElement>;

  projectContainers.forEach((projectContainer)=> {
    
    projectContainer.addEventListener("mousemove", handleOnMouseMove);

    projectContainer.addEventListener('mouseleave', () => {
      
      projectContainer.style.removeProperty('--mouse-x');
      projectContainer.style.removeProperty('--mouse-y');
    });
  }); 
   
  
    
  
