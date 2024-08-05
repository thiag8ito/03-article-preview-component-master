const btn = document.querySelector(".share-btn");
const shareWindow = document.querySelector(".share-window");

btn.addEventListener("click", () => {
    const btnClicked = document.querySelector(".clicked");
    if(btnClicked) {
        btn.classList.remove("clicked");
        shareWindow.classList.add("hide");
    } else {
        btn.classList.add("clicked");
        shareWindow.classList.remove("hide");
    }
});