function changeMode(size, weight, transform, background, color) {
  document.body.style.fontSize = font_size + 'px';
  document.body.style.fontWeight = font_weight;
  document.body.style.textTransform = text_transform;
  document.body.style.backgroundColor = background_color;
  document.body.style.color = color;
}

function main() {
  var spooky = changeMode.bind(9, "bold", "uppercase", "pink", "green");
  var darkMode = changeMode.bind(12, "bold", "capitalize", "black", "white");
  var screamMode = changeMode.bind(12, "normal", "lowercase", "white", "black");
  var newP = document.createElement('p');
  var newContent = document.createTextNode("Welcome Holberton!")
  newP.appendChild(newContent);
  document.body.appendChild(newP);
  var spookyBtn = document.createElement("button");
  var  spookyContent = document.createTextNode("Spooky");
  spookyBtn.appendChild(spookyContent);
  spookyBtn.onclick = spooky;
  document.body.appendChild(spookyBtn);
  var darkBtn = document.createElement("button");
  var  darkContent = document.createTextNode("Dark mode");
  darkBtn.appendChild(darkContent);
  darkBtn.onclick = darkMode;
  document.body.appendChild(darkBtn);
  var screamBtn = document.createElement("button");
  var  screamContent = document.createTextNode("Scream mode");
  screamBtn.appendChild(screamContent);
  screamBtn.onclick = screamMode
  document.body.appendChild(screamBtn);
}
main();