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
