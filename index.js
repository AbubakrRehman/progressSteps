let currentActive = 0;
const progress = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");

next.addEventListener("click", (e) => {
    if (currentActive < circles.length - 1) {
        currentActive++;
        console.log("counter value", currentActive);
        updateDOM();
    }
})


prev.addEventListener("click", (e) => {
    if (currentActive >= 1) {
        currentActive--;
        console.log("counter value", currentActive);
        updateDOM();
    }
})



function updateButtons() {
    if (currentActive === circles.length - 1) {
        next.disabled = true;
    } else if (currentActive === 0) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}


function updateCircles() {
    for (let index = 0; index < circles.length; index++) {
        if (index <= currentActive) {
            circles[index].classList.add("active");
        } else {
            circles[index].classList.remove("active");
        }
    }
}

function updateProgress(){
    progress.style.width=`${(currentActive/(circles.length-1))*100}%`;
}

function updateDOM() {

    updateButtons();
    updateProgress();
    updateCircles();
    



}
