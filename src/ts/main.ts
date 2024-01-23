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
const openModalSections = document.querySelectorAll(".openModalSection") as NodeListOf<HTMLElement>;
const closeModalSection = document.querySelector(".modalCloseButton") as HTMLElement | null;

openModalSections.forEach(openModalSection => {
  openModalSection.addEventListener("click", () => {
    modalSection.showModal();
  });
});

if (closeModalSection) {
  closeModalSection.addEventListener("click", () => {
    modalSection.close();
  });
}


