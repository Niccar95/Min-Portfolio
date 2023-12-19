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