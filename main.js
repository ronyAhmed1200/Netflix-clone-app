const tabButtons = document.querySelectorAll(".tab-top");
const tabContent = document.querySelectorAll(".tab-content-items");

// Running the function
function runThis(e) {
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    const activeItem = document.querySelector(`.${this.id}-content`);
    activeItem.classList.add("show");
}

function removeBorder() {
    tabButtons.forEach((button) => button.classList.remove("tab-border"));
}

function removeShow() {
    tabContent.forEach((content) => content.classList.remove("show"));
}

//Listened for clicks
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", runThis);
});