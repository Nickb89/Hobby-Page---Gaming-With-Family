const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.getElementById("dateText").innerHTML = "The date is: " + day + " / " + month + " / " + year;

/*a list of image locations*/
var imgArray = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];
var curIndex = 0;
/*slideshow speed*/
var imgDuration = 3000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();