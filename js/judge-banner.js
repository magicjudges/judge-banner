/* collapse menu for mobile */

var banner = document.getElementById("judge-global-banner");
var button = document.getElementById("judge-global-banner-collapse");
var menu = document.getElementById("judge-global-menu");

button.addEventListener('click', function() {
  this.blur();
  banner.classList.toggle("collapsed");
});

for (var i = 0; i < menu.children.length; i++) {
  menu.children[i].addEventListener('click', function() {
    for (var j = 0; j < menu.children.length; j++) {
      menu.children[j].classList.remove("active");
    }
    this.classList.toggle("active");
  });
}

/* highlight currently active page */

var hostname = window.location.hostname;

var elem;
if (hostname.indexOf('apps') != -1) {
  elem = document.getElementById('nav-apps');
} else if (window.location.href.indexOf('/o/') != -1) {
  elem = document.getElementById('o-resources');
} else if (window.location.href.indexOf('/rules/') != -1) {
  elem = document.getElementById('nav-rules');
} else if (hostname.indexOf('blogs') != -1) {
  elem = document.getElementById('nav-blogs');
} else if (hostname.indexOf('chat') != -1) {
  elem = document.getElementById('nav-irc');
}

if (elem) {
  elem.classList.add('current');
}

/* search form focus logic */

var searchForm = document.getElementById('judge-global-search');
var searchInput = document.getElementById('search-input');

document.getElementById('search-icon').addEventListener('click', function() {
  if (searchInput.value) {
    searchForm.submit();
  } else {
    searchInput.focus();
  }
});
