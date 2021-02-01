var qrcode = new QRCode("qrcode");
var textArea = document.getElementById("text");

function makeCode() {
  // the text area
  var elText = document.getElementById("text");
  //   the error text
  var errorText = document.getElementById("error");

  if (!elText.value) {
    //   if text length is 0 show error text
    errorText.textContent = "Enter some text";
    // if text length is 0 cahnge background color to red
    errorText.style.backgroundColor = "#ff3434";
    // focus on text area
    elText.focus();
    return;
  }

  //   if text length is more than 0 remove error text
  errorText.textContent = "";
  // if text length is more than 0 cahnge background color to white
  errorText.style.backgroundColor = "#fff";
  //   make qr code
  qrcode.makeCode(elText.value);
}

// focus on the text are on launch
textArea.focus();

// make the initial code with data "Empty"
qrcode.makeCode("Empty");

textArea.addEventListener("input", (event) => {
  makeCode();
});
