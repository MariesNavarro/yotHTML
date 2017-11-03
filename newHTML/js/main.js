function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
var checkBowser = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;
function changeIcon(c, el, t){
  var s = _('#hoverSound');
  t.setAttribute('src', 'img/' + el + c + '.svg');
  if(c === 'over') {s.play();}
}
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
  var p = __('.phonePop');
  if(checkBowser){
    for (var i = 0; i < p.length; i++) {
      p[i].setAttribute('href', 'tel:5567303009');
    }
  }else{
    for (var i = 0; i < p.length; i++) {
      p[i].setAttribute('onclick', 'popPhone("open")');
    }
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
  var w = _('.outerMobile');
  switch (c) {
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
function changeLandscape(c){
  var article = _("#mainIndex>article"),
      header = _('#mainIndex>article>header'),
      div = _('#mainIndex>article>div'),
      img = _('#mainIndex>article>header>img'),
      foot = _('footer');
  switch (c) {
  case 'l':
    foot.classList.add('hideOpacity');
    article.classList.add("alignArticle");
    header.classList.add("sizeLandscape");
    div.classList.add("sizeLandscape");
    div.classList.add("alignDiv");
    img.classList.add("sizeImg");
  break;
  case 'p':
    foot.classList.remove('hideOpacity');
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
function preventLandscape(c){
  var w = _('#preventLandscape');
  switch (c) {
    case 'l':
      w.classList.remove('hideDisplay');
      w.classList.add('showDisplayFlex');
      break;
    case 'p':
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
function hoverProducto(t, c){
  var m = t.lastElementChild;
  var b = t.firstElementChild;
  b.classList.add('jumpBlob1');
  m.classList.add('jumpMock1');
  setTimeout(function(){
    m.classList.remove('jumpMock1');
    b.classList.remove('jumpBlob1');
    m.classList.add('jumpMock2');
    b.classList.add('jumpBlob2');
    setTimeout(function(){
      m.classList.remove('jumpMock2');
      b.classList.remove('jumpBlob2');
    },300)
  },300);
  switch (c) {
    case 'potet':
      var s = _('#hoverProductoPotet');
      s.play();
    break;
    case 'sot':
      var s = _('#hoverProductoSot');
      s.play();
    break;
    case 'tlayolis':
    var s = _('#hoverProductoTlayolis');
    s.play();
    break;
  }
}
function evtArrowIndex(){
  var w = _('#interfaz');
  var ch = w.children;
  if(checkBowser){
    for (var i = 0; i < 2; i++) {
      ch[i].setAttribute('onclick', ' ');
    }
  }
}
var ct = 0;
function slider(c, w, classHide, classShow){
  var l = _(w).children.length-1;
  var sls = _(w).children;
  switch (c) {
  case 'prev':
    ct--;
    if(ct < 0) {ct = l};
    inner(ct);
    // index(ct);
  break;
  case 'next':
    ct++;
    if(ct > l) {ct = 0};
    inner(ct);
    // index(ct);
  break;
  }
  function inner(c){
    var b = _('#backs');
    var current = c;
    var prev = c-1;
    var next = c+1;
    if(prev < 0) {prev = l};
    if(prev > l) {prev = 0};
    if(next < 0) {next = l};
    if(next > l) {next = 0};
    sls[prev].classList.remove(classShow);
    sls[prev].classList.add(classHide);
    sls[prev].style.zIndex = "0";
    sls[next].classList.remove(classShow);
    sls[next].classList.add(classHide);
    sls[next].style.zIndex = "0";
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
    setTimeout(function(){
      sls[c].classList.remove(classHide);
      sls[c].classList.add(classShow);
      sls[c].style.zIndex = "100";
    },300);
  }
}

var sliderCountProd = 0;
function countsliderProducto(c){
  if(c === 'prev'){
    sliderCountProd -= 1;
    if(sliderCountProd < 0){ sliderCountProd = 4; }
    sliderProducto(sliderCountProd);
  } else {
    sliderCountProd += 1;
    if(sliderCountProd > 4){ sliderCountProd = 0; }
    sliderProducto(sliderCountProd);
  }
}

var isProduct = window.location.href.slice(window.location.href.indexOf('=')+1);
setSliderByUrl(isProduct);
function setSliderByUrl(c){
  switch (c) {
    case '1':
      bulletsProducto(1);
    break;
    case '2':
      bulletsProducto(2);
    break;
    case '3':
      bulletsProducto(3);

    break;
    default:
      bulletsProducto(0);
  }
}

function bulletsProducto(c){
  switch (c) {
  case 0:
    sliderCountProd = 0;
    sliderProducto(sliderCountProd);
  break;
  case 1:
    sliderCountProd = 1;
    sliderProducto(sliderCountProd);
  break;
  case 2:
    sliderCountProd = 2;
    sliderProducto(sliderCountProd);
  break;
  case 3:
    sliderCountProd = 3;
    sliderProducto(sliderCountProd);
  break;
  case 4:
    sliderCountProd = 4;
    sliderProducto(sliderCountProd);
  break;
  default:
    sliderCountProd = 0;
    sliderProducto(sliderCountProd);
  }
}

function sliderProducto(c){
  var btnSliderMob = _('#sliderMobile');
  var urlValue = window.location.href.slice(window.location.href.indexOf('-')+1);
  var slides = _('#mainProducto').children;
  var l = slides.length;
  var back = _('#backgroundProducto');
  for (var i = 0; i < l; i++) {
    slides[i].classList.remove('showDisplayFlex');
    slides[i].classList.add('hideDisplay');
  }
  //iconoZoom
  if(c === 4 && checkBowser){
    setTimeout(function(){
      btnSliderMob.classList.remove('hideDisplay');
      btnSliderMob.classList.add('showDisplay');
    },1500);
  }else{
    btnSliderMob.classList.remove('showDisplay');
    btnSliderMob.classList.add('hideDisplay');
  }
  if(urlValue[0] === 's'){
    itemsSot();
    transitionSot(c);
    var sSot = _('#transitionSotSound');
    sSot.play();
    back.setAttribute('class', ' ');
    back.classList.add('sot-'+c);
  } else if (urlValue[0] == 'p') {
    itemsPotet();
    transitionPotet(c);
    var sPotet = _('#transitionPotetSound');
    sPotet.play();
    back.setAttribute('class', ' ');
    back.classList.add('potet-'+c);
  } else {
    itemsTlayolis();
    fadeInTlayolis(c);
    var sTlayolis = _('#transitionTlayolisSound');
    sTlayolis.play();
    back.setAttribute('class', ' ');
    back.classList.add('tlayolis-'+c);
  }
  slides[c].classList.add('showDisplayFlex');
  if(!checkBowser){
    fadeOutProducts();
  }
}

function transitionSot(c){
  var w = _('#transitionSot');
  w.style.backgroundImage = "url('img/transition/sot-"+c+".png')";
  w.style.top = "-50vh";
  w.style.display = "block";
  setTimeout(function(){
    w.style.top = "100vh";
    setTimeout(function(){
      w.style.display = "none";
      w.style.top = "-200vh";
    },1000);
  },800);
}
function transitionPotet(c){
  var w = _('#transitionPotet');
  w.style.backgroundImage = "url('img/transition/potet-"+c+".png')";
  w.style.left = "-20vw";
  w.style.opacity = "1";
  setTimeout(function(){
    w.style.left = "100vw";
    setTimeout(function(){
      w.style.opacity = "0";
    },500);
  },1000);
}

function fadeInTlayolis(c){
  var w = _('#transitionTlayolis');
  var polyDom = _('#rectSvg');
  switch (c) {
    case 0:
      polyDom.style.fill = "#1F8245";
      break;
    case 1:
      polyDom.style.fill = "#1F8245";
      break;
    case 2:
      polyDom.style.fill = "#bc7129";
      break;
    case 3:
      polyDom.style.fill = "#9b3030";
      break;
    case 4:
      polyDom.style.fill = "#bc7129";
      break;
    default:
    polyDom.style.fill = "#1F8245";
  }
  w.classList.remove('hideDisplay');
  w.classList.add('showDisplayFlex');
  w.style.opacity = "1";
  anime({
    targets: polyDom,
    duration: 800,
    easing: 'easeOutQuad',
    points: polyDom.getAttribute('data-out')
  });
  setTimeout(function(){
    w.style.opacity = "0";
    anime({
        targets: '#rectSvg',
        duration: 800,
        easing: 'easeOutQuad',
        points: polyDom.getAttribute('data-in')
    });
    setTimeout(function(){
      w.classList.remove('showDisplayFlex');
      w.classList.add('hideDisplay');
    },850);
  },1000);
}

function itemsTlayolis(){
  var w = _('#elementsTlWrap');
  var h = window.innerHeight + window.innerHeight/2;
  var items = __('.itemTl');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('style', ' ');
  }
  w.classList.remove('hideDisplay');
  w.classList.add('showDisplayFlex');
  anime({
      targets: '.itemTl',
      duration: 2000,
      easing: 'easeOutQuad',
      rotate: '2turn'
  });
  setTimeout(function(){
  anime({
      targets: '.itemTlW',
      duration: 800,
      easing: 'easeOutQuad',
      marginTop: function() { return anime.random("15", "5"); }
  });
  },10);
  setTimeout(function(){
    anime({
        targets: '.itemTlW',
        duration: 1200,
        easing: 'easeOutQuad',
        marginTop: h
    });
    setTimeout(function(){
      if(!checkBowser){
        fadeInProducts();
      }
      w.classList.remove('showDisplayFlex');
      w.classList.add('hideDisplay');
    },1300);
  },1000)
}

function itemsSot(){
  var h = window.innerHeight + window.innerHeight/2;
  var w = _('#elementsSotWrap');
  var items = __('.itemSot');
  var itemsWrap = __('.itemSotW');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('style', ' ');
  }
  w.classList.remove('hideDisplay');
  w.classList.add('showDisplayFlex');
  anime({
      targets: '.itemSot',
      duration: 2000,
      easing: 'easeOutQuad',
      rotate: '1turn'
  });
  setTimeout(function(){
  anime({
      targets: '.itemSotW',
      duration: 800,
      easing: 'easeOutQuad',
      marginTop: function() { return anime.random(-100, 400); }
  });
  },10);
  setTimeout(function(){
    anime({
        targets: '.itemSotW',
        duration: 800,
        easing: 'easeOutQuad',
        marginTop: h
    });
    setTimeout(function(){
      if(!checkBowser){
        fadeInProducts();
      }
      w.classList.remove('showDisplayFlex');
      w.classList.add('hideDisplay');
      for (var i = 0; i < itemsWrap.length; i++) {
        itemsWrap[i].setAttribute('style', ' ');
      }
    },850);
  },805);
}

function itemsPotet(){
  var w = _('#elementsPtWrap');
  var items = __('.itemPt');
  w.classList.remove('hideDisplay');
  w.classList.add('showDisplayFlex');
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('style', ' ');
  }
  anime({
      targets: '.itemPtW',
      duration: 1,
      easing: 'easeOutQuad',
      marginLeft: window.innerWidth + window.innerWidth/2
  });
  anime({
      targets: '.itemPt',
      duration: 2000,
      easing: 'easeOutQuad',
      rotate: '1turn'
  });
  setTimeout(function(){
  anime({
      targets: '.itemPtW',
      duration: 800,
      easing: 'easeOutQuad',
      marginLeft: function() { return anime.random(-500, 300); }
  });
  setTimeout(function(){
    anime({
        targets: '.itemPtW',
        duration: 800,
        easing: 'easeOutQuad',
        marginLeft: window.innerWidth + window.innerWidth/2
    });
    setTimeout(function(){
      w.classList.remove('showDisplayFlex');
      w.classList.add('hideDisplay');
      if(!checkBowser){
        fadeInProducts();
      }
    },850);
  },805);
  },10);
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

function preventSwipe(){
  var wr = _('#interfazProducto');
  if (wr === undefined || wr === null) {
  } else {
    if(checkBowser){
      wr.classList.remove('hideDisplay');
      wr.classList.add('showDisplay');
      detectswipe('interfazProducto', swipeTransformProduct);
    }
  }
}

var cPopSlider = 1;
function swipePopMob(el, d){
  var imgPop = _('#popSliderMob>img'),
      typeInner,
      urlValue = window.location.href.slice(window.location.href.indexOf('-')+1);
  if(urlValue === 'sot.html'){
    typeInner = 'sot';
  }else if (urlValue === 'potet.html') {
    typeInner = 'potet';
  } else {
    typeInner = 'tlayolis';
  }
  if(d === 'next'){
    cPopSlider-=1;
    if(cPopSlider < 1){ cPopSlider = 5; }
    changeUrlImgSliderRefMob(cPopSlider, typeInner);
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'.png');
  } else{
    cPopSlider+=1;
    if(cPopSlider > 5){ cPopSlider = 1; }
    changeUrlImgSliderRefMob(cPopSlider, typeInner);
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'.png');
  }
}

function swipeTransformProduct(el,d){
  if(d === 'prev'){
    countsliderProducto('next');
  } else {
    countsliderProducto('prev');
  }
}

function setRefSliderPop(c, type){
  var w = _('#initSlider1'),
      img = document.createElement('IMG');
      w.classList.add('sliderRef');
      img.classList.add('imgRefSlider');
      w.appendChild(img);
      changeUrlImgSliderRefMob(c,type);
}

function changeUrlImgSliderRefMob(c, type){
  var img = _('.imgRefSlider');
  img.setAttribute('src', 'img/'+type+'/sm-'+c+'.png');
}

function evSliderMobPop(c){
  var wr = _('#popSliderMob');
  if(c === 'open'){
    wr.classList.remove('hideDisplay');
    wr.classList.add('showDisplayFlex');
    setTimeout(function(){
      wr.style.opacity = "1";
    },300);
  } else {
    wr.style.opacity = "0";
    setTimeout(function(){
      wr.classList.remove('showDisplayFlex');
      wr.classList.add('hideDisplay');
    },600);
  }
}

function fadeInHeader(){
  var w = _("#coverHeader");
  var wrnos = __('.coverHeader');
  if (w === undefined || w === null) {
      var a = wrnos[0], b = wrnos[1];
       a.classList.remove('hideOpacity');
       b.classList.remove('hideOpacity');
   } else {
     w.classList.remove('hideOpacity');
   }
}


function preventResizeProducto(){
  var elemRight = __('.elemRight'),
      elemLeft = __('.elemLeft');
  for (var i = 0; i < elemRight.length; i++) {
    elemRight[i].setAttribute('style', ' ');
  }
  for (var i = 0; i < elemLeft.length; i++) {
    elemLeft[i].setAttribute('style', ' ');
  }
}

function fadeInProducts(){
  anime({
      targets: '.elemLeft',
      translateX: [
        {value:[20],duration: 500,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[1],duration: 500,easing: 'easeOutQuad'}
      ]
  });
  anime({
      targets: '.elemRight',
      translateX: [
        {value:[-20],duration: 500,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[1],duration: 500,easing: 'easeOutQuad'}
      ]
  });
}
function fadeOutProducts(){
  anime({
      targets: '.elemLeft',
      translateX: [
        {value:[-20],duration: 100,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[0],duration: 1,easing: 'easeOutQuad'}
      ]
  });
  anime({
      targets: '.elemRight',
      translateX: [
        {value:[20],duration: 100,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[0],duration: 1,easing: 'easeOutQuad'}
      ]
  });
}

function overNosotros(c, i){
  var overInfo = __('.overInfo'),
    iconMore = __('.iconMore'),
    moreHover = _('#moreHover'),
    imgProductoNos = __('.imgProductoNos');
  switch (c) {
    case 'over':
    overInfo[i].style.opacity = "1";
    iconMore[i].classList.remove('unrotateIcon');
    iconMore[i].classList.add('rotateIcon');
    imgProductoNos[i].classList.remove('zoomOutImg');
    imgProductoNos[i].classList.add('zoomInImg');
    break;
    case 'out':
    overInfo[i].style.opacity = "0";
    iconMore[i].classList.remove('rotateIcon');
    iconMore[i].classList.add('unrotateIcon');
    imgProductoNos[i].classList.remove('zoomInImg');
    imgProductoNos[i].classList.add('zoomOutImg');
    break;
  }
}
