var url = "judge-banner.html";
var xhr = new XMLHttpRequest();

xhr.addEventListener("load", function() {
  var html = document.createElement("div");
  html.innerHTML = this.response;
  document.body.insertBefore(html, document.body.firstChild);

  var scripts = html.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src != "") {
      var tag = document.createElement("script");
      tag.src = scripts[i].src;
      document.getElementsByTagName("head")[0].appendChild(tag);
    } else {
      eval(scripts[i].innerHTML);
    }
  }
});

xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "text/html");
xhr.send();
