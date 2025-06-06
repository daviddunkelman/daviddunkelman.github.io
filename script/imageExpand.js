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