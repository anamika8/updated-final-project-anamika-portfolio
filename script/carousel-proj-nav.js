let rightArrow = document.querySelector("#carousel-project .right-arrow");
let leftArrow = document.querySelector("#carousel-project .left-arrow");
let screenStore = document.querySelectorAll("#carousel-project .carousel-screen");
let numOfScreens = screenStore.length;
let circleStore = document.querySelectorAll("#carousel-project .circle-container .circle");
let currentScreen = 0;
let inAnim = false;
let animTime = 500;

//starting position
arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
highlightCircle(circleStore[0]);


rightArrow.addEventListener("click", () => {
    beginAnimation("right");
});

leftArrow.addEventListener("click", () => {
    beginAnimation("left");
});

//Start animation. Either towards left or right
function beginAnimation(direction) {
    if (!inAnim) {
        inAnim = true;
        if (direction === "right") {
            showRightScreen();
            highlightCircle(circleStore[currentScreen + 1], "right");
        } else if (direction === "left") {
            showLeftScreen();
            highlightCircle(circleStore[currentScreen - 1], "left");
        } else {
            isAnim = false;
            return
        }
    }
}

//Move to the right screen
function showRightScreen() {
    if (currentScreen < numOfScreens - 1) {
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[currentScreen + 1]);
        setTimeout(() => {
            inAnim = false;
            currentScreen++;
            arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    } else {
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[0]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = 0;
            arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    }
}

//Move to the left screen
function showLeftScreen() {
    if (currentScreen > 0) {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[currentScreen - 1]);
        setTimeout(() => {
            inAnim = false;
            currentScreen--;
            arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    } else {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[numOfScreens - 1]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = numOfScreens - 1;
            arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    }
}

//User clicks on one of the circles
circleStore.forEach(circle => {
    circle.addEventListener("click", event => {
        if (!inAnim) {
            let circleStoreArray = Array.prototype.slice.call(circleStore);
            let circleIndex = circleStoreArray.indexOf(event.target);
            highlightCircle(event.target);
            if (circleIndex > currentScreen) {
                changeScreenOnCircleClick(circleIndex, "right");
            } else if (circleIndex < currentScreen) {
                changeScreenOnCircleClick(circleIndex, "left");
            }
        }
    })
})

// function to change the screen when a specific circle is clicked
function changeScreenOnCircleClick(circleIndex, direction) {
    inAnim = true;
    if (direction === "right") {
        arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[circleIndex]);
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[circleIndex]);
    } else if (direction === "left") {
        arrangeScreenPositions(screenStore[currentScreen], screenStore[circleIndex], screenStore[currentScreen + 1]);
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[circleIndex]);
    } else {
        inAnim = false;
        return
    }
    setTimeout(() => {
        inAnim = false;
        currentScreen = circleIndex;
        arrangeScreenPositions(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    }, animTime)
}

function highlightCircle(circleSelect, direction) {
    if (circleSelect === undefined && direction === "right") {
        circleSelect = circleStore[0];
    } else if (circleSelect === undefined && direction === "left") {
        circleSelect = circleStore[numOfScreens - 1];
    }
    circleStore.forEach(circle => {
        if (circle === circleSelect) {
            circle.classList.add("circle-fill");
        } else {
            circle.classList.remove("circle-fill");
        }
    })
}


//Animation methods
function toLeft(screen) {
    screen.style.animation = "toLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function toRight(screen) {
    screen.style.animation = "toRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeRight(screen) {
    screen.style.animation = "comeRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeLeft(screen) {
    screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

//Arrange positioning when page loads or on any user event on the carousel
function arrangeScreenPositions(mainScreen, leftScreen, rightScreen) {
    if (rightScreen === undefined) {
        rightScreen = screenStore[0];
    }
    if (leftScreen === undefined) {
        leftScreen = screenStore[numOfScreens - 1];
    }
    screenStore.forEach(screen => {
        if (screen === mainScreen) {
            screen.style.display = "block";
            screen.style.left = "0px";
        } else if (screen === leftScreen) {
            screen.style.display = "block";
            screen.style.left = "-100%";
        } else if (screen === rightScreen) {
            screen.style.display = "block";
            screen.style.left = "100%";
        }
    });
}

//Auto Scroll feature
let carousel = document.getElementById("carousel-project");
let scrollTime = Number(carousel.getAttribute("auto-scroll"));

// if scroll-time is specified, auto scroll will be triggered
if (scrollTime) {
    let autoWipe = setInterval(() => {
        beginAnimation("right");
    }, scrollTime);
    carousel.addEventListener("mouseenter", () => {
        clearInterval(autoWipe);
    });
    carousel.addEventListener("mouseleave", () => {
        autoWipe = setInterval(() => {
            beginAnimation("right");
        }, scrollTime);
    })

}