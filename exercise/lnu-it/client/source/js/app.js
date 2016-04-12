function addStyleFile(styleSheetPath, appendToThisNode) {
    // set default to document.head
    appendToThisNode = appendToThisNode || document.head;

    // create the element and add the attributes needed
    var node = document.createElement('link');
    node.setAttribute("href", styleSheetPath);
    node.setAttribute("rel", "stylesheet");
    appendToThisNode.appendChild(node);
}

var relativePath = "./stylesheet/style.css";
addStyleFile(relativePath);

var myLinks = document.querySelectorAll("a");
Array.prototype.forEach.call(myLinks,function(myLink){
  myLink.classList.add("lnu");
});
