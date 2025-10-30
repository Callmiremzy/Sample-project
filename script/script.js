const buttonClick = document.getElementById("buttonClick");
const loginCtn = document.getElementById("loginCtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

buttonClick.addEventListener("click", () => {
    loginCtn.style.display = "block";
    overlay.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    loginCtn.style.display = "none";
    overlay.style.display = "none";
});