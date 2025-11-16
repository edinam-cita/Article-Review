const shareBtn = document.querySelector(".share");
const popUp = document.querySelector(".pop-up");
const shareImg = document.querySelector(".share-img");
const authorProfile = document.querySelector(".author-profile");

shareBtn.addEventListener("click", displayPopup);

function displayPopup() {
  popUp.classList.toggle("visible");
  shareBtn.classList.toggle("pressed");
  shareImg.classList.toggle("added");
authorProfile.classList.toggle("seen")
}
