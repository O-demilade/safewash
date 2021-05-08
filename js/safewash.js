/**
 * Created by Demi on 13-Apr-21.
 */
var slide_index = 50;
//show_slides(slide_index);

// Thumbnail image controls
function current_slide(b) {
    show_slides(b);
}

var timer = null;
function start_timer() {
    timer = setTimeout(auto_slides, 3000); // Change image every 3 seconds
}
function stop_timer() {
    clearTimeout(timer);
}

function show_slides(n) {
    stop_timer();

    var a;

    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".dot");
    //safety clauses
    slide_index = n;
    if(n > slides.length){slide_index = 1;}
    if(n < 1){slide_index = slides.length;}
    // hide all the panes and dot selections
    for(a=0; a<slides.length; a++){
        slides[a].style.display = "none";
        dots[a].className = dots[a].className.replace(" active", "");
    }
    //display selected slide
    slides[slide_index-1].style.display = "block";
    //activates corresponding dot
    dots[slide_index-1].className += " active";

    slide_index-=1;
    //auto_slides();
}
function auto_slides() {
    var a;

    const slides = document.querySelectorAll(".slides");
    const dots = document.querySelectorAll(".dot");

    slide_index ++;
    //safety clauses
    if(slide_index > slides.length){slide_index = 1;}
    if(slide_index < 1){slide_index = slides.length;}
    // hide all the panes
    for(a=0; a<slides.length; a++){
        slides[a].style.display = "none";
    }
    //set all dots inactive
    for (a = 0; a < dots.length; a++) {
        dots[a].className = dots[a].className.replace(" active", "");
    }

    slides[slide_index-1].style.display = " block";
    dots[slide_index-1].className += " active";

    start_timer();
}

function show_() {
    document.getElementById("menu").style.display = "block";
}

function close_() {
    document.getElementById("menu").style.display = "none";
}



