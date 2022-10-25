
const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
  }, 200); //Popup the screen in 02 seconds after the page is loaded.
});

if(WebsiteCookie != -1){
  popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
}
else{
  popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
}

  