function createElement(data) {
  var para = document.createElement('p');
  var content = document.createTextNode(data);
  para.appendChild(content);
  document.body.appendChild(para);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {callback(this.responseText)});
  xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  xhr.send()
}

queryWikipedia(createElement);