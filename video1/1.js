function toggleImage() {
    var image = document.getElementById("myImage");
    
    if (image.src.match("1")) {
        image.src = "2.jpg";
    } else {
        image.src = "3.jpg";
    }
}