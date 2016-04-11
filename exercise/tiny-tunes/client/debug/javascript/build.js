(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ex01 = require("./ex01");
var ex02 = require("./ex02");
var ex03 = require("./ex03");
var ex04 = require("./ex04");
var ex05 = require("./ex05");
var ex06 = require("./ex06");
var ex07 = require("./ex07");
var ex07 = require("./ex08");
var ex07 = require("./ex09");
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvYXBwLmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDEuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwMi5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDAzLmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDQuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwNS5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDA2LmpzIiwidGlueS10dW5lcy9jbGllbnQvc291cmNlL2pzL2V4MDcuanMiLCJ0aW55LXR1bmVzL2NsaWVudC9zb3VyY2UvanMvZXgwOC5qcyIsInRpbnktdHVuZXMvY2xpZW50L3NvdXJjZS9qcy9leDA5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZXgwMSA9IHJlcXVpcmUoXCIuL2V4MDFcIik7XG52YXIgZXgwMiA9IHJlcXVpcmUoXCIuL2V4MDJcIik7XG52YXIgZXgwMyA9IHJlcXVpcmUoXCIuL2V4MDNcIik7XG52YXIgZXgwNCA9IHJlcXVpcmUoXCIuL2V4MDRcIik7XG52YXIgZXgwNSA9IHJlcXVpcmUoXCIuL2V4MDVcIik7XG52YXIgZXgwNiA9IHJlcXVpcmUoXCIuL2V4MDZcIik7XG52YXIgZXgwNyA9IHJlcXVpcmUoXCIuL2V4MDdcIik7XG52YXIgZXgwNyA9IHJlcXVpcmUoXCIuL2V4MDhcIik7XG52YXIgZXgwNyA9IHJlcXVpcmUoXCIuL2V4MDlcIik7XG5leDAxLnNvbHZlKCk7XG5leDAyLnNvbHZlKCk7XG5leDAzLnNvbHZlKCk7XG5leDA0LnNvbHZlKCk7XG5leDA1LnNvbHZlKCk7XG5leDA2LnNvbHZlKCk7XG5leDA3LnNvbHZlKCk7XG5leDA4LnNvbHZlKCk7XG5leDA5LnNvbHZlKCk7XG4iLCJmdW5jdGlvbiBleDAxKCkge1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhlbGxvIHdvcmxkIVwiKTtcbiAgdmFyIHBUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAwMV9oZWxsb1wiKTtcbiAgcFRhZy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwMTtcbiIsImZ1bmN0aW9uIGV4MDIoKSB7XG4gIHZhciBoMk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyTm9kZS50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIHN1YiBoZWFkbGluZVwiO1xuICB2YXIgZGl2VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGVwMDJcIik7XG4gIGRpdlRhZy5hcHBlbmRDaGlsZChoMk5vZGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5zb2x2ZSA9IGV4MDI7XG4iLCJmdW5jdGlvbiBleDAzKCkge1xuICB2YXIgaDJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMk5vZGUudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBzdWIgaGVhZGxpbmVcIjtcbiAgdmFyIGRpdlRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcDAzXCIpO1xuICB2YXIgcFRhZyA9IGRpdlRhZy5xdWVyeVNlbGVjdG9yKFwicFwiKTtcbiAgZGl2VGFnLmluc2VydEJlZm9yZShoMk5vZGUscFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwMztcbiIsImZ1bmN0aW9uIGV4MDQoKSB7XG5cbiAgdmFyIGgyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RlcDA0IGgyXCIpO1xuICBoMk5vZGUuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDA0O1xuIiwiZnVuY3Rpb24gZXgwNSgpIHtcblxuICB2YXIgZ3JleWJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JleWJveFwiKTtcbiAgdmFyIGFUYWcgPSBncmV5Ym94LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xuICBhVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4gICAgICB2YXIgcFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcFRhZy50ZXh0Q29udGVudCA9IFwiWW91IGNsaWNrZWQhXCI7XG4gICAgICBncmV5Ym94LmFwcGVuZENoaWxkKHBUYWcpO1xuICB9KTtcbn1cblxuXG5cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDA1O1xuIiwiZnVuY3Rpb24gZXgwNigpIHtcblxuICB2YXIgZG9jZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKysgKSB7XG4gICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGRvY2ZyYWcuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIHZhciBsaXN0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdDA2XCIpO1xuICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChkb2NmcmFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMuc29sdmUgPSBleDA2O1xuIiwiZnVuY3Rpb24gZXgwNygpIHtcblxuICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0ZXAwNy10ZW1wbGF0ZVwiKTtcbiAgdmFyIGxpc3ROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0MDdcIik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKSk7XG4gIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwNztcbiIsImZ1bmN0aW9uIGV4MDgoKSB7XG5cbiAgdmFyIHVsTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3QgdWxcIik7XG5cbiAgdmFyIGJ1dHRvbk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0Zm9ybSBidXR0b25cIik7XG4gIHZhciBpbnB1dFRleHROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdGZvcm0gaW5wdXRcIik7XG4gIGJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIHZhciBsaU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB2YXIgbXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaW5wdXRUZXh0Tm9kZS52YWx1ZSk7XG4gICAgICBsaU5vZGUuYXBwZW5kQ2hpbGQobXlUZXh0KTtcbiAgICAgIHVsTm9kZS5hcHBlbmRDaGlsZChsaU5vZGUpO1xuXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5zb2x2ZSA9IGV4MDg7XG4iLCJmdW5jdGlvbiBleDA4KCkge1xuXG4gIHZhciB1bE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9saXN0IHVsXCIpO1xuXG4gIHZhciBidXR0b25Ob2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvbGlzdGZvcm0gYnV0dG9uXCIpO1xuICB2YXIgaW5wdXRUZXh0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb2xpc3Rmb3JtIGlucHV0XCIpO1xuICBidXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4gICAgICB2YXIgbGlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdmFyIG15VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VGV4dE5vZGUudmFsdWUpO1xuICAgICAgbGlOb2RlLmFwcGVuZENoaWxkKG15VGV4dCk7XG4gICAgICB1bE5vZGUuYXBwZW5kQ2hpbGQobGlOb2RlKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLnNvbHZlID0gZXgwODtcbiJdfQ==
