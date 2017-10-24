function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
var checkBowser = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;
function countLoading(){
  var p = _('#loading>#percentage');
  var w = _('#loading');
  var x = 0;
  var count = setInterval(function(){
    x++;
    if(x == 1) {
      w.style.display = "block !important";
    }
    if(x > 10){
      x = 100;
      w.style.opacity = "0";
      setTimeout(function(){ w.style.display = "none"; },600);
      clearInterval(count);
    }
    p.innerHTML = x + "%";
  },200);
}

function menuMobile(c){
  console.log("Hola");
}

function changeIcon(c, el, t){
  var s = _('#hoverSound');
  t.setAttribute('src', 'img/' + el + c + '.svg');
  if(c === 'over') s.play();
}

function changeLandscape(c){
  var article = _("#mainIndex>article"),
      header = _('#mainIndex>article>header'),
      div = _('#mainIndex>article>div'),
      img = _('#mainIndex>article>header>img');
  switch (c) {
  case 'l':
    article.classList.add("alignArticle");
    header.classList.add("sizeLandscape");
    div.classList.add("sizeLandscape");
    div.classList.add("alignDiv");
    img.classList.add("sizeImg");
  break;
  case 'p':
    article.classList.remove("alignArticle");
    header.classList.remove("sizeLandscape");
    div.classList.remove("sizeLandscape");
    div.classList.remove("alignDiv");
    img.classList.remove("sizeImg");
  break;
  }
}
function preventHeight(c){
  var w = _('#preventHeight');

  switch (c) {
    case 'min':
      w.classList.remove('hideDisplay');
      w.classList.add('showDisplayFlex');
      break;
    case 'max':
      w.classList.add('hideDisplay');
      w.classList.remove('showDisplayFlex');
      break;
  }
}

var ct = 0;
function slider(c, w, classHide, classShow, index){
  var l = _(w).children.length-1;
  var sls = _(w).children;
  switch (c) {
  case 'prev':
    ct--;
    if(ct < 0) ct = l;
    inner(ct);
  break;
  case 'next':
    ct++;
    if(ct > l) ct = 0;
    inner(ct);
  break;
  }
  function inner(c){
    var current = c;
    var prev = c-1;
    var next = c+1;
    if(prev < 0) prev = l;
    if(prev > l) prev = 0;
    if(next < 0) next = l;
    if(next > l) next = 0;
    sls[prev].classList.remove(classShow);
    sls[prev].classList.add(classHide);
    sls[next].classList.remove(classShow);
    sls[next].classList.add(classHide);

    setTimeout(function(){
      sls[c].classList.remove(classHide);
      sls[c].classList.add(classShow);
    },300);
  }
}



// transitionBlock transitionNone
