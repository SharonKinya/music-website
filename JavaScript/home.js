const loop = document.querySelector(".loop"),
firstImg = loop.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".container i");


//by default isDragging is false and it'll only true if the mouse btn is clicked
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDifference;

//showing and hiding prev/ next icon according to loop left value
const showHideIcons = () => {
    let scrollWidth = loop.scrollWidth - loop.clientWidth;
    arrowIcons[0].style.display = loop.scrollLeft == 0 ? "none" :"block";
    arrowIcons[0].style.display = loop.scrollLeft == scrollWidth ? "none" :"block";
}

//slideing the images according to the prev and next icon click
arrowIcons.forEach (icon => {
    icon.addEventListener("click", () => {
       let firstImgWidth = firstImg.clientWidth + 2;

       if(icon.id == "left") {       
        loop.scrollLeft -= firstImgWidth;
       } else{
        loop.scrollLeft += firstImgWidth;
       }
      setTimeout (() => showHideIcons(), 60);
    });

});

const autoSlide = () => {
    if(loop.scrollLeft == loop.scrollWidth - loop.clientWidth) return;


    positionDifference = Math.abs(positionDifference);
    let firstImgWidth = firstImg.clientWidth + 2;
    let ValDifference =  firstImgWidth - positionDifference;
    if(loop.scrollLeft > prevScrollLeft) {

        // if(positionDifference > firstImgWidth) {
        //     loop.scrollLeft += ValDifference;
        // } else {
        //     loop.scrollLeft -= positionDifference;
        // }
        return loop.scrollLeft += positionDifference > firstImgWidth / 3 ? ValDifference : -positionDifference;

    } else {
        return loop.scrollLeft -= positionDifference > firstImgWidth / 3 ? ValDifference : +positionDifference;
    }
}

 // slide the images according to the mouse movement
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = loop.scrollLeft;
}

//sliding only if the mouse down button is clicked and the cursor moved
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    loop.classList.add("dragging"); 
     //Scrolling images/loop to left according to mouse pointer
    positionDifference = (e.pageX || e.touches[0].pageX )- prevPageX;
    loop.scrollLeft = prevScrollLeft - positionDifference;
    showHideIcons();
}

//make isDragging to false once user releases the mouse btn, the images stop sliding until the mouse is clicked again
const dragStop = () => {
    isDragStart = false;
    loop.classList.remove("dragging");
    autoSlide();

    if(!isDragging) return;
    isDragging = false;

}   



loop.addEventListener("mousedown", dragStart);
loop.addEventListener("touchstart", dragStart);

loop.addEventListener("mousemove", dragging);
loop.addEventListener("touchmove", dragging);

loop.addEventListener("mouseup", dragStop);
loop.addEventListener("mouseleave", dragStop);
loop.addEventListener("touchend", dragStop);


