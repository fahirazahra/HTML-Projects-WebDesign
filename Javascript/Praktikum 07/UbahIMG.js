var myImg = document.querySelector("img");

myImg.onclick = function() {
    var mySrc = myImg.getAttribute('src');

    if(mySrc == "danau1.jpg") {
        myImg.setAttribute("src", "danau2.jpg");
    }
}