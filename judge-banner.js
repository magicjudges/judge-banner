var url = "http://assets.magicjudges.org/judge-banner/judge-banner.dist.html";
var xhr = new XMLHttpRequest();

xhr.addEventListener("load", function() {
  var html = document.createElement("div");
  html.innerHTML = this.response;
  document.body.insertBefore(html, document.body.firstChild);

  // move any link elements to head
  var links = html.getElementsByTagName("link");
  console.log(links);
  for (var i = links.length - 1; i >= 0; i--) {
    document.getElementsByTagName("head")[0].appendChild(links[i]);
  }
});

xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "text/html");
xhr.send();
