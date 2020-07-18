// aboutMeCard

function scrollAppear() {
  let aboutMeCard = document.querySelector(".aboutMeCard");
  let aboutMePosition = aboutMeCard.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (aboutMePosition < screenPosition) {
    aboutMeCard.classList.add("aboutMeCardAppear");
  }
}

window.addEventListener("scroll", scrollAppear);
