export function navigationHandler() {
  //Hamburgarmeny för mobilversion

  const hamburger = document.querySelector(".hamburger");

  const navigationList = document.querySelector(".navigationList");

  hamburger?.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navigationList?.classList.remove("active");
    } else {
      hamburger.classList.add("active");
      navigationList?.classList.add("active");
    }
  });

  const navLink = document.querySelectorAll(".navLink");

  navLink.forEach((link) =>
    link.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      navigationList?.classList.remove("active");
    })
  );

  const mainSection = document.querySelector(".mainSection") as HTMLHtmlElement;
  const navigation = document.querySelector(".navigation") as HTMLHtmlElement;

  const mainSectionHeight = mainSection.offsetTop;

  document.documentElement.style.setProperty(
    "--scroll-padding",
    mainSectionHeight + "px"
  );

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
    } else {
      console.log("upp");
      navigation.classList.remove("hideNav");
    }
    lastScrollY = window.scrollY;
  });
}
