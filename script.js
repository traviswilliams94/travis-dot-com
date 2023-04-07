// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

// Get the modal
const modal = document.getElementById("myModal");
console.log(modal,"os it working?");

// Get the button that opens the modal
const tennisbtn = document.getElementById("tennisbutton");
console.log(tennisbtn, "this is the button");
const regeneratebtn = document.getElementById("regeneratebutton");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
tennisbtn.onclick = function() {
    modal.style.display = "block";
    console.log("i was clicked");
  }

regeneratebtn.onclick = function(){
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }