function ex07() {

  var template = document.querySelector("#step07-template");
  var listNode = document.querySelector("#list07");
  for (var i = 0; i < 5; i++) {
    listNode.appendChild(document.importNode(template.content, true));
  }


}

module.exports.solve = ex07;
