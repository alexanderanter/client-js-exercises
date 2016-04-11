function ex03() {
  var h2Node = document.createElement("h2");
  h2Node.textContent = "This is a sub headline";
  var divTag = document.querySelector("#step03");
  var pTag = divTag.querySelector("p");
  divTag.insertBefore(h2Node,pTag);
}

module.exports.solve = ex03;
