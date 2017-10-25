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
    if(x === 1) {
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

function setPhone(){
  var p = _('.phonePop');
  if(checkBowser){
    p.setAttribute('href', 'tel:5567303009');
  }else{
    p.setAttribute('onclick', 'popPhone("open")');
  }
}

function popPhone(s){
  var w = _('#telPopW');
  switch (s) {
  case 'open':
    w.style.display = "block";
    setTimeout(function(){
      w.style.opacity = "1";
    },600);
  break;
  case 'close':
    w.style.opacity = "0";
    setTimeout(function(){
      w.style.display = "none";
    },600);
  break;
  }
}


function menuMobile(c){
  console.log("Hola");
}

function overMenuClose(c, t){
	  var rotA = t.children[0],
	      rotB = t.children[1];
	  switch (c) {
	  case 'over':
	    rotA.classList.remove('rotccw');
	    rotA.classList.add('rotcw');
	    rotB.classList.remove('rotcw');
	    rotB.classList.add('rotccw');
	  break;
	  case 'out':
	    rotA.classList.remove('rotcw');
	    rotA.classList.add('rotccw');
	    rotB.classList.remove('rotccw');
	    rotB.classList.add('rotcw');
	  break;
	  }
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

var soundMuted = false;
function toggleAudio(t){
  var m = _('#iconMute');
  var s = _('#hoverSound');
  soundMuted = !soundMuted;
  if(soundMuted){
    m.setAttribute('title', 'Unmute');
    m.setAttribute('src', 'img/menu/muted-out.svg');
    m.setAttribute('onmouseover', 'changeIcon("over", "menu/muted-", this)');
    m.setAttribute('onmouseout', 'changeIcon("out", "menu/muted-", this)');
    s.muted = true;
  } else {
    m.setAttribute('title', 'Mute');
    m.setAttribute('src', 'img/menu/nomuted-out.svg');
    m.setAttribute('onmouseover', 'changeIcon("over", "menu/nomuted-", this)');
    m.setAttribute('onmouseout', 'changeIcon("out", "menu/nomuted-", this)');
    s.muted = false;
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
    if(index) index(ct);
  break;
  case 'next':
    ct++;
    if(ct > l) ct = 0;
    inner(ct);
    if(index) index(ct);
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
  function index(c){
    var b = _('#backs');
    switch (c) {
      case 0:
        b.style.left = "0";
      break;
      case 1:
        b.style.left = "-100vw";
      break;
      case 2:
        b.style.left = "-200vw";
      break;
    }
  }
}

function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 20;
  var max_x = 40;
  var min_y = 40;
  var max_y = 50;
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
  var t = e.touches[0];
  swipe_det.sX = t.screenX;
  swipe_det.sY = t.screenY;
  },false);

  ele.addEventListener('touchmove',function(e){
  e.preventDefault();
  var t = e.touches[0];
  swipe_det.eX = t.screenX;
  swipe_det.eY = t.screenY;
  },false);

  ele.addEventListener('touchend',function(e){
  if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
  if(swipe_det.eX > swipe_det.sX) direc = "next";
  else direc = "prev";
  }
  if (direc != "") {
    if(typeof func === 'function') func(el,direc);
  }
  direc = "";
  },false);
}

function swipeTransformIndex(el,d) {
  if(d === 'prev'){
      slider('next', '#mainIndex', 'hideOpacity', 'showOpacity', true);
  } else {
      slider('prev', '#mainIndex', 'hideOpacity', 'showOpacity', true);
  }
}
