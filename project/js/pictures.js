console.log("testing for pull")
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.getElementById("monochrome").addEventListener("click",image);
    document.getElementById("pudding").addEventListener("click",image1);
    document.getElementById("purple").addEventListener("click",image2);
    document.getElementById("blanks").addEventListener("click",image3);
}


function image(){
    console.log("image called")
    document.getElementById("mainpic").src = "pictures/monochrome.jpg";
    document.getElementById("caption").innerHTML = "Black and white keycaps look great with most desk setups.";
}

function image1(){
    document.getElementById("mainpic").src = "pictures/pudding.jpg";
    document.getElementById("caption").innerHTML = "Pudding keycaps offer opaque sides so that the lighting of your keyboard can really shine through.";
}

function image2(){
document.getElementById("mainpic").src = "pictures/customp.jpg";
document.getElementById("caption").innerHTML = "There are limitless designs for custom keycaps, this set has custom purple color, graphics, and shape.";
}

function image3(){
document.getElementById("mainpic").src = "pictures/blanks.jpg";
document.getElementById("caption").innerHTML = "There are limitless designs for custom keycaps, this set has no markings on them and is just plain white.";
}