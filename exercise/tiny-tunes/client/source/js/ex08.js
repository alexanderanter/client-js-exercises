function ex08() {

  var ulNode = document.querySelector("#todolist ul");

  var buttonNode = document.querySelector("#todolistform button");
  var inputTextNode = document.querySelector("#todolistform input");
  buttonNode.addEventListener("click", function(event){
      var liNode = document.createElement("li");
      var myText = document.createTextNode(inputTextNode.value);
      liNode.appendChild(myText);
      ulNode.appendChild(liNode);

  });
}

module.exports.solve = ex08;
