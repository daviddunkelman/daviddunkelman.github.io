function imageExpand(imgs, container, textbox) {
    // Get the expanded image
    var expandImg = document.getElementById(container);
    // Get the image text
    var imgText = document.getElementById(textbox);
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}
function createViewer(id,imageList){
  
    var html= "";

    //VIEWER
    html += "<div class='container'>"; 
    html += "<img id='"+ id +"V' class='expandedImg' src="+imageList[0][0]+">";   
    html += "<div id='"+id+"T' class='imgtext'>"+imageList[0][1]+"</div>";    
    html += "</div>";

    //IMAGES    
    html += "<div class='row'>";    
    let len = imageList.length;
    for (let i = 0;i< len; i++) {
        html += "<div class='column'>";
        html += "<img src="+imageList[i][0]+" alt='"+imageList[i][1]+"' onclick=\"imageExpand(this, '"+id+"V', '"+id+"T');\">";
        html += "</div>";
    }   
    html += "</div>";

    

    document.getElementById(id).innerHTML = html;
}

function createSlideViewer(slides){
    
    var html = "";

    html += "<div class='container'>"; 
    html += "<img id='"+ slides.thisID +"V' class='expandedImg' src="+slides.imgs[0][0]+">";   
    html +="<a class='prev'>&#10094;</a>"
    html +="<a class='next'>&#10095;</a>"
    html += "</div>";
    
    html += "<div class='caption-container'>"
    html += "   <div id='"+ slides.thisID +"T' >"+slides.imgs[0][1]+"></div>"
    html += "</div>"

    html += "<div class='row'>";  
    let len = slides.imgs.length; 
    for (let i = 0;i< len; i++) {
        html += "<div class='column'>";
        html += "<img class='demo' src="+slides.imgs[i][0]+" alt='"+slides.imgs[i][1]+"' style='width:100%' >"
        //onclick='currentSlide("+i+","+slides+")'
        html += "</div>";
    }   
    html += "</div>";

    document.getElementById(slides.thisID).innerHTML = html;
    document.getElementsByClassName("prev").innerHTML = "What!";

    document.getElementById(slides.thisID).getElementsByClassName("prev")[0].onclick = function () {
        plusSlides(-1, slides);
    }
    document.getElementById(slides.thisID).getElementsByClassName("next")[0].onclick = function () {
        plusSlides(1, slides);
    }
    var slidebtns = document.getElementById(slides.thisID).getElementsByClassName("demo");
    for (let i = 0;i< len; i++) {
        slidebtns[i].onclick = function () {
            currentSlide(i, slides);
        }
    }
    
    
    showSlides(0, slides);
}

function plusSlides(n, slides){
    slides.currentSlide += n;
    if (slides.currentSlide >= slides.imgs.length) {slides.currentSlide = 0;}
    if (slides.currentSlide < 0) {slides.currentSlide = slides.imgs.length-1;}
    showSlides(slides.currentSlide, slides);
}
function currentSlide(n, slides) {
    slides.currentSlide = n;
    
    if (n >= slides.imgs.length) {slides.currentSlide = 0;}
    if (n < 0) {slides.currentSlide = slides.imgs.length-1;}
    showSlides(slides.currentSlide, slides);
}

function showSlides(n, slides){
    
    // Get the expanded image
    var expandImg = document.getElementById(slides.thisID + "V");
    // Get the image text
    var imgText = document.getElementById(slides.thisID + "T");

    expandImg.src = slides.imgs[n][0];

    imgText.innerHTML = slides.imgs[n][1];
   
    
}


