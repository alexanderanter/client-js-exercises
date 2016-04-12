(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function addStyleFile(styleSheetPath, appendToThisNode) {
    // set default to document.head
    appendToThisNode = appendToThisNode || document.head;

    // create the element and add the attributes needed
    var node = document.createElement('link');
    node.setAttribute("href", styleSheetPath);
    node.setAttribute("rel", "stylesheet");
    appendToThisNode.appendChild(node);
}

var relativePath = "css/style.css";
addStyleFile(relativePath);

var myLinks = document.querySelectorAll("a");
Array.prototype.forEach.call(myLinks,function(myLink){
  myLink.classList.add("lnu");
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsbnUtaXQvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBhZGRTdHlsZUZpbGUoc3R5bGVTaGVldFBhdGgsIGFwcGVuZFRvVGhpc05vZGUpIHtcclxuICAgIC8vIHNldCBkZWZhdWx0IHRvIGRvY3VtZW50LmhlYWRcclxuICAgIGFwcGVuZFRvVGhpc05vZGUgPSBhcHBlbmRUb1RoaXNOb2RlIHx8IGRvY3VtZW50LmhlYWQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBlbGVtZW50IGFuZCBhZGQgdGhlIGF0dHJpYnV0ZXMgbmVlZGVkXHJcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzdHlsZVNoZWV0UGF0aCk7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XHJcbiAgICBhcHBlbmRUb1RoaXNOb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xyXG59XHJcblxyXG52YXIgcmVsYXRpdmVQYXRoID0gXCJjc3Mvc3R5bGUuY3NzXCI7XHJcbmFkZFN0eWxlRmlsZShyZWxhdGl2ZVBhdGgpO1xyXG5cclxudmFyIG15TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChteUxpbmtzLGZ1bmN0aW9uKG15TGluayl7XHJcbiAgbXlMaW5rLmNsYXNzTGlzdC5hZGQoXCJsbnVcIik7XHJcbn0pO1xyXG4iXX0=
