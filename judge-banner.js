var url = "https://assets.magicjudges.org/judge-banner/judge-banner.dist.html";
var xhr = new XMLHttpRequest();

xhr.addEventListener("load", function() {
  var html = document.createElement("div");
  html.innerHTML = this.response;
  document.body.insertBefore(html, document.body.firstChild);

  // move scripts to the head or execute them
  var scripts = html.getElementsByTagName("script");
  for (var j = 0; j < scripts.length; j++) {
      if (scripts[j].src != "") {
          var tag = document.createElement("script");
          tag.src = scripts[j].src;
          document.getElementsByTagName("head")[0].appendChild(tag);
      } else {
          eval(scripts[j].innerHTML);
      }
  }

  // move any link elements to head
  var links = html.getElementsByTagName("link");
  for (var i = links.length - 1; i >= 0; i--) {
    document.getElementsByTagName("head")[0].appendChild(links[i]);
  }
});

xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "text/html");
xhr.send();
