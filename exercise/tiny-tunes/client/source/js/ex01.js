function ex01() {
  var textNode = document.createTextNode("Hello world!");
  var pTag = document.querySelector("#step01_hello");
  pTag.appendChild(textNode);
}

module.exports.solve = ex01;
