// Get the modal
const yvesModal = document.getElementById("yves");

// Get the button that opens the modal
const yvesBtn = document.getElementById("yvesButton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
yvesBtn.onclick = function(){
    yvesModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  yvesModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == yvesModal) {
      yvesModal.style.display = "none";
    }
  }

