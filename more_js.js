function doIt(e) {
  var output = "this is e\n";
  output += e;
  output += "\nthis is this\n";
  output += this;
  console.log(output);
  var viewer = document.getElementById("viewer");
  viewer.innerHTML = output;
}

