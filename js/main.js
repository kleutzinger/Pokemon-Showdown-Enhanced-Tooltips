var ele = document.createElement("script");
ele.src = chrome.extension.getURL("/js/tooltip.js");
document.body.appendChild(ele);


var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/Zarel/Pokemon-Showdown/master/data/formats-data.js', true);
xhr.onload = function(e) {
  console.log(xhr.responseText);
};

xhr.send();
