function ex05() {

  var greybox = document.querySelector(".greybox");
  var aTag = greybox.querySelector("a");
  aTag.addEventListener("click", function(event){
      var pTag = document.createElement("p");
      pTag.textContent = "You clicked!";
      greybox.appendChild(pTag);
  });
}




module.exports.solve = ex05;
