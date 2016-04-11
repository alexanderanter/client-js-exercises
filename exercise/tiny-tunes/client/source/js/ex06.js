function ex06() {

  var docfrag = document.createDocumentFragment();

  for (var i = 0; i < 10; i++ ) {
    var li = document.createElement("li");
    docfrag.appendChild(li);
  }
  var listNode = document.querySelector("#list06");
  listNode.appendChild(docfrag);
}

module.exports.solve = ex06;
