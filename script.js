// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

// Get the modal
const tennisModal = document.getElementById("tennis");
const yeahsModal = document.getElementById("yeahs");

// Get the button that opens the modal
const tennisbtn = document.getElementById("tennisbutton");
console.log(tennisbtn, "this is the button");
const regeneratebtn = document.getElementById("regeneratebutton");
const yeahsbtn = document.getElementById("yeahsbutton");
const soccerbtn = document.getElementById("soccerbutton");
const cakebtn = document.getElementById("cakebutton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
tennisbtn.onclick = function() {
    tennisModal.style.display = "block";
}
regeneratebtn.onclick = function(){
    modal.style.display = "block";
}

yeahsbtn.onclick = function(){
    yeahsModal.style.display = "block";
}

soccerbtn.onclick = function(){
    modal.style.display = "block";
}

cakebtn.onclick = function(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  tennisModal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == tennisModal) {
      tennisModal.style.display = "none";
    }
  }