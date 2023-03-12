const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector(".btn-submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-rating");

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    mainContainer.style.display = "none";

})

rates.forEach((rates) => {
    rates.addEventListener("click", () => {
        rating.innerHTML = rates.innerHTML
    })
}); 