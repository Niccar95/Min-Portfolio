import '../scss/style.scss'

const navigation = document.querySelector(".navigation") as HTMLHtmlElement;

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty (
  "--scroll-padding", 
  navigationHeight + "px"
)


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


window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navigation.classList.add("navScrolled");
  }

  if (window.scrollY === 0) {
    navigation.classList.remove("navScrolled");
  }

});

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




