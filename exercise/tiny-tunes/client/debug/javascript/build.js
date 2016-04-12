(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ex01 = require("./ex01");
var ex02 = require("./ex02");
var ex03 = require("./ex03");
var ex04 = require("./ex04");
var ex05 = require("./ex05");
var ex06 = require("./ex06");
var ex07 = require("./ex07");
var ex08 = require("./ex08");
var ex09 = require("./ex09");
ex01.solve();
ex02.solve();
ex03.solve();
ex04.solve();
ex05.solve();
ex06.solve();
ex07.solve();
ex08.solve();
ex09.solve();

},{"./ex01":2,"./ex02":3,"./ex03":4,"./ex04":5,"./ex05":6,"./ex06":7,"./ex07":8,"./ex08":9,"./ex09":10}],2:[function(require,module,exports){
function ex01() {
  var textNode = document.createTextNode("Hello world!");
  var pTag = document.querySelector("#step01_hello");
  pTag.appendChild(textNode);
}

module.exports.solve = ex01;

},{}],3:[function(require,module,exports){
function ex02() {
  var h2Node = document.createElement("h2");
  h2Node.textContent = "This is a sub headline";
  var divTag = document.querySelector("#step02");
  divTag.appendChild(h2Node);
}

module.exports.solve = ex02;

},{}],4:[function(require,module,exports){
function ex03() {
  var h2Node = document.createElement("h2");
  h2Node.textContent = "This is a sub headline";
  var divTag = document.querySelector("#step03");
  var pTag = divTag.querySelector("p");
  divTag.insertBefore(h2Node,pTag);
}

module.exports.solve = ex03;

},{}],5:[function(require,module,exports){
function ex04() {

  var h2Node = document.querySelector("#step04 h2");
  h2Node.classList.add("red");
}

module.exports.solve = ex04;

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
function ex07() {

  var template = document.querySelector("#step07-template");
  var listNode = document.querySelector("#list07");
  for (var i = 0; i < 5; i++) {
    listNode.appendChild(document.importNode(template.content, true));
  }


}

module.exports.solve = ex07;

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
function ex09() {
  var textBoxes = document.querySelectorAll("#textboxes09 input");
  var txtBox1 = textBoxes[0];
  var txtBox2 = textBoxes[1];

document.querySelector("#textboxes09").addEventListener("blur", function() {
  var txtBoxVal1 = txtBox1.value;
  var txtBoxVal2 = txtBox2.value;
  var pValNode = document.querySelector(".validation");
  if(txtBoxVal1.length > 0 && txtBoxVal2.length > 0 ){
    if(txtBoxVal1 === txtBoxVal2) {
      pValNode.textContent = "the username is OK";
    }else {
      pValNode.textContent = "the username is not the same";
    }
  }else {
    pValNode.textContent = "";
  }
}, true);

}

module.exports.solve = ex09;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvYXBwLmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDEuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwMi5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDAzLmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDQuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwNS5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDA2LmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDcuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwOC5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDA5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGV4MDEgPSByZXF1aXJlKFwiLi9leDAxXCIpO1xudmFyIGV4MDIgPSByZXF1aXJlKFwiLi9leDAyXCIpO1xudmFyIGV4MDMgPSByZXF1aXJlKFwiLi9leDAzXCIpO1xudmFyIGV4MDQgPSByZXF1aXJlKFwiLi9leDA0XCIpO1xudmFyIGV4MDUgPSByZXF1aXJlKFwiLi9leDA1XCIpO1xudmFyIGV4MDYgPSByZXF1aXJlKFwiLi9leDA2XCIpO1xudmFyIGV4MDcgPSByZXF1aXJlKFwiLi9leDA3XCIpO1xudmFyIGV4MDggPSByZXF1aXJlKFwiLi9leDA4XCIpO1xudmFyIGV4MDkgPSByZXF1aXJlKFwiLi9leDA5XCIpO1xuZXgwMS5zb2x2ZSgpO1xuZXgwMi5zb2x2ZSgpO1xuZXgwMy5zb2x2ZSgpO1xuZXgwNC5zb2x2ZSgpO1xuZXgwNS5zb2x2ZSgpO1xuZXgwNi5zb2x2ZSgpO1xuZXgwNy5zb2x2ZSgpO1xuZXgwOC5zb2x2ZSgpO1xuZXgwOS5zb2x2ZSgpO1xuIiwiZnVuY3Rpb24gZXgwMSgpIHtcbiAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyB3b3JsZCFcIik7XG4gIHZhciBwVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwMDFfaGVsbG9cIik7XG4gIHBUYWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5zb2x2ZSA9IGV4MDE7XG4iLCJmdW5jdGlvbiBleDAyKCkge1xuICB2YXIgaDJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMk5vZGUudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBzdWIgaGVhZGxpbmVcIjtcbiAgdmFyIGRpdlRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcDAyXCIpO1xuICBkaXZUYWcuYXBwZW5kQ2hpbGQoaDJOb2RlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDAyO1xuIiwiZnVuY3Rpb24gZXgwMygpIHtcbiAgdmFyIGgyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDJOb2RlLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgc3ViIGhlYWRsaW5lXCI7XG4gIHZhciBkaXZUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAwM1wiKTtcbiAgdmFyIHBUYWcgPSBkaXZUYWcucXVlcnlTZWxlY3RvcihcInBcIik7XG4gIGRpdlRhZy5pbnNlcnRCZWZvcmUoaDJOb2RlLHBUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5zb2x2ZSA9IGV4MDM7XG4iLCJmdW5jdGlvbiBleDA0KCkge1xuXG4gIHZhciBoMk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAwNCBoMlwiKTtcbiAgaDJOb2RlLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwNDtcbiIsImZ1bmN0aW9uIGV4MDUoKSB7XG5cbiAgdmFyIGdyZXlib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZXlib3hcIik7XG4gIHZhciBhVGFnID0gZ3JleWJveC5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcbiAgYVRhZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgdmFyIHBUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHBUYWcudGV4dENvbnRlbnQgPSBcIllvdSBjbGlja2VkIVwiO1xuICAgICAgZ3JleWJveC5hcHBlbmRDaGlsZChwVGFnKTtcbiAgfSk7XG59XG5cblxuXG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwNTtcbiIsImZ1bmN0aW9uIGV4MDYoKSB7XG5cbiAgdmFyIGRvY2ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrICkge1xuICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBkb2NmcmFnLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICB2YXIgbGlzdE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3QwNlwiKTtcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQoZG9jZnJhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwNjtcbiIsImZ1bmN0aW9uIGV4MDcoKSB7XG5cbiAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwMDctdGVtcGxhdGVcIik7XG4gIHZhciBsaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdDA3XCIpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSkpO1xuICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cy5zb2x2ZSA9IGV4MDc7XG4iLCJmdW5jdGlvbiBleDA4KCkge1xuXG4gIHZhciB1bE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0IHVsXCIpO1xuXG4gIHZhciBidXR0b25Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdGZvcm0gYnV0dG9uXCIpO1xuICB2YXIgaW5wdXRUZXh0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3Rmb3JtIGlucHV0XCIpO1xuICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4gICAgICB2YXIgbGlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdmFyIG15VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VGV4dE5vZGUudmFsdWUpO1xuICAgICAgbGlOb2RlLmFwcGVuZENoaWxkKG15VGV4dCk7XG4gICAgICB1bE5vZGUuYXBwZW5kQ2hpbGQobGlOb2RlKTtcblxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDA4O1xuIiwiZnVuY3Rpb24gZXgwOSgpIHtcbiAgdmFyIHRleHRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGV4dGJveGVzMDkgaW5wdXRcIik7XG4gIHZhciB0eHRCb3gxID0gdGV4dEJveGVzWzBdO1xuICB2YXIgdHh0Qm94MiA9IHRleHRCb3hlc1sxXTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0Ym94ZXMwOVwiKS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgdmFyIHR4dEJveFZhbDEgPSB0eHRCb3gxLnZhbHVlO1xuICB2YXIgdHh0Qm94VmFsMiA9IHR4dEJveDIudmFsdWU7XG4gIHZhciBwVmFsTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsaWRhdGlvblwiKTtcbiAgaWYodHh0Qm94VmFsMS5sZW5ndGggPiAwICYmIHR4dEJveFZhbDIubGVuZ3RoID4gMCApe1xuICAgIGlmKHR4dEJveFZhbDEgPT09IHR4dEJveFZhbDIpIHtcbiAgICAgIHBWYWxOb2RlLnRleHRDb250ZW50ID0gXCJ0aGUgdXNlcm5hbWUgaXMgT0tcIjtcbiAgICB9ZWxzZSB7XG4gICAgICBwVmFsTm9kZS50ZXh0Q29udGVudCA9IFwidGhlIHVzZXJuYW1lIGlzIG5vdCB0aGUgc2FtZVwiO1xuICAgIH1cbiAgfWVsc2Uge1xuICAgIHBWYWxOb2RlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufSwgdHJ1ZSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDA5O1xuIl19
