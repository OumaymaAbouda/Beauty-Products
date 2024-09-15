var index = 0;
var images = [
    "Images/img1.jpg",
    "Images/img2.jpg",
    "Image/img3.jpg"
];
var butprec = document.getElementById("imgprec");
var butsui = document.getElementById("imgsui");


var imagecontainer = document.getElementById("imagecontainer");
function afficheImage() {
imagecontainer.src = images[index];
}

butprec.addEventListener("click", function () {
index = (index - 1 + images.length) % images.length;
afficheImage();
});

butsui.addEventListener("click", function () {
index = (index + 1) % images.length;
afficheImage();
});

afficheImage();