  // ABRIR HORARIO
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var span = document.getElementsByClassName("close")[0];
  var clickSpan = document.getElementById("clickSpan");
  var body = document.getElementById("body");
  
  clickSpan.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "./img/horario.webp";
    body.style.overflowY = "hidden";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
    body.style.overflowY = "visible";

  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflowY = "visible";

    }
  }
  

  