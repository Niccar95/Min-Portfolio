import '../scss/style.scss'

const navigation = document.querySelector(".navigation") as HTMLHtmlElement;

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty (
  "--scroll-padding", 
  navigationHeight + "px"
)