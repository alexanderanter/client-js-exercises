function ex02() {
  var h2Node = document.createElement("h2");
  h2Node.textContent = "This is a sub headline";
  var divTag = document.querySelector("#step02");
  divTag.appendChild(h2Node);
}

module.exports.solve = ex02;
