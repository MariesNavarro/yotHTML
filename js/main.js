function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }
var checkBowser = false;
var countNos = 0;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;

function changeIcon(c, el, t){
  // var s = _('#hoverSound');
  t.setAttribute('src', 'img/' + el + c + '.svg');
  // if(c === 'over') {s.play();}

  var textBullet = __('.textBullet');
  if (textBullet === undefined || textBullet === null) {
    textBullet = 0;
  } else {
    switch (c) {
      case 'over1':
        textBullet[0].style.color = "#3FA9F5";
      break;
      case 'over2':
        textBullet[1].style.color = "#9f3030";
      break;
      case 'over3':
        textBullet[2].style.color = "#ffc521";
      break;
      case 'over4':
        textBullet[3].style.color = "#bf1d70";
      break;
      case 'over5':
        textBullet[4].style.color = "#098442";
      break;
      case 'out':
        for (var i = 0; i < textBullet.length; i++) {
          textBullet[i].style.color = "#FFFFFF";
        }
      break;
    }
  }
}

// onmouseover="hoverSound('#tlayolisSound')"

function hoverSound(el){
 var s = _(el);
 s.play();
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

function updateBackHeight(){
  var wr = _('#backW'),
      h = document.getElementsByTagName("BODY")[0].getBoundingClientRect().height;
      wr.style.height = h + 'px';
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
  var s = __('.audio');
  soundMuted = !soundMuted;
  if(soundMuted){
    m.setAttribute('title', 'Unmute');
    m.setAttribute('src', 'img/menu/muted-out.svg');
    m.setAttribute('onmouseover', 'changeIcon("over", "menu/muted-", this)');
    m.setAttribute('onmouseout', 'changeIcon("out", "menu/muted-", this)');
    // s.muted = true;
    for (var i = 0; i < s.length; i++) {
      s[i].muted = true;
    }
  } else {
    m.setAttribute('title', 'Mute');
    m.setAttribute('src', 'img/menu/nomuted-out.svg');
    m.setAttribute('onmouseover', 'changeIcon("over", "menu/nomuted-", this)');
    m.setAttribute('onmouseout', 'changeIcon("out", "menu/nomuted-", this)');
    // s.muted = false;
    for (var i = 0; i < s.length; i++) {
      s[i].muted = false;
    }
  }
}


function noSoundMobile(){
  var s = __('.buttonAud');
  for(var i = 0; i < s.length; i++){
    s[i].setAttribute("onmouseover", " ");
    s[i].setAttribute("onclick", " ");
  }
}

function animateOnMobile(){
  var blob = __('.bulletBack'),
      mock = __('.mock');
      for (var i = 0; i < blob.length; i++) {
        blob[i].classList.add('animateBlob');
        mock[i].classList.add('animateProd');
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
      if(!checkBowser){s.play()}
    break;
    case 'sot':
      var s = _('#hoverProductoSot');
      if(!checkBowser){s.play()}
    break;
    case 'tlayolis':
    var s = _('#hoverProductoTlayolis');
      if(!checkBowser){s.play()}
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

function bulletHover(t, c){
  els = __(t);
  if(c === 'over'){
    for (var i = 0; i < els.length; i++) {
      els[i].style.opacity = "0.5";
    }
    els[1].children[0].classList.add('scaleUp');
  } else{
    for (var i = 0; i < els.length; i++) {
      els[i].style.opacity = "1";
      els[1].children[0].classList.remove('scaleUp');
    }
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
  //audios-trans
  switch (c) {
    case 0:
      if(!checkBowser){setTimeout(function(){hoverSound('#entradaSound')},300)}
    break;
    case 1:
      if(!checkBowser){setTimeout(function(){hoverSound('#producto1Sound')},300)}
    break;
    case 2:
      if(!checkBowser){setTimeout(function(){hoverSound('#producto2Sound')},300)}
    break;
    case 3:
      if(!checkBowser){setTimeout(function(){hoverSound('#producto3Sound')},300)}
    break;
    case 4:
      if(!checkBowser){setTimeout(function(){hoverSound('#sliderSound')},300)}
    break;
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
    transitionSot(c);
    itemsSot();
    back.setAttribute('class', ' ');
    back.classList.add('sot-'+c);
  } else if (urlValue[0] == 'p') {
    transitionPotet(c);
    itemsPotet();
    back.setAttribute('class', ' ');
    back.classList.add('potet-'+c);
  } else {
    itemsTlayolis();
    fadeInTlayolis(c);
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
    },850);
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
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
  } else{
    cPopSlider+=1;
    if(cPopSlider > 5){ cPopSlider = 1; }
    changeUrlImgSliderRefMob(cPopSlider, typeInner);
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
  }
}

function arrowPopDesk(c){
  var imgPop = _('#popSliderImg'),
      typeInner,
      urlValue = window.location.href.slice(window.location.href.indexOf('-')+1);
      if(urlValue === 'sot.html'){
        typeInner = 'sot';
      }else if (urlValue === 'potet.html') {
        typeInner = 'potet';
      } else {
        typeInner = 'tlayolis';
      }

      if(c === 'next'){
        cPopSlider+=1;
        if(cPopSlider > 5){ cPopSlider = 1; }
        imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
      }else{
        cPopSlider-=1;
        if(cPopSlider < 1){ cPopSlider = 5; }
        imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
      }
}

function arrowPopSlider(c){
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
  if(c === 'next'){
    cPopSlider+=1;
    if(cPopSlider > 5){ cPopSlider = 1; }
    changeUrlImgSliderRefMob(cPopSlider, typeInner);
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
  }else{
    cPopSlider-=1;
    if(cPopSlider < 1){ cPopSlider = 5; }
    changeUrlImgSliderRefMob(cPopSlider, typeInner);
    imgPop.setAttribute('src', 'img/'+typeInner+'/s-'+cPopSlider+'-full.jpg');
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
  img.setAttribute('src', 'img/'+type+'/s-'+c+'.png');
}

function evSliderMobPop(c){
  var wr = _('#popSliderMob'),
      arrowGenerales = _('#arrows');
  if(c === 'open'){
    arrowGenerales.style.display ="none";
    wr.classList.remove('hideDisplay');
    wr.classList.add('showDisplayFlex');
    setTimeout(function(){
      wr.style.opacity = "1";
    },300);
  } else {
    arrowGenerales.style.display ="block";
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

function sliderNosTimer(){
  setInterval(function(){
    countNos++;
    if(countNos > 3) countNos = 0;
    sliderNosInner(countNos);
  },5000);
}

function sliderNosInner(c){
  var wrNos = _('#sliderNosotros');
  if(c === 0) wrNos.style.left = "0";
  if(c === 1) wrNos.style.left = "-100vw";
  if(c === 2) wrNos.style.left = "-200vw";
  if(c === 3) wrNos.style.left = "-300vw";
}

function sliderNos(c){
  if(c === "next"){
    countNos++;
    if(countNos > 3) countNos = 0;
    sliderNosInner(countNos);
  } else {
    countNos--;
    if(countNos < 0) countNos = 3;
    sliderNosInner(countNos);
  }

}

function sliderFun(){
  var zoomWr = _('.current').children[1],
      zoom = document.createElement("IMG");
      zoom.setAttribute("onclick", "sliderPop('open')");
      zoom.setAttribute("src", "img/icons/zoom.png");
      zoom.setAttribute("id", "hoverZoom");
      zoomWr.appendChild(zoom);
  var nextWr = _('.current').children[2],
      next = document.createElement("IMG");
      next.setAttribute("onclick", "initSlider1.evArrow('next')");
      next.setAttribute("src", "img/icons/next.png");
      next.setAttribute("id", "hoverNext");
      nextWr.appendChild(next);

  var prevWr = _('.current').children[0],
      prev = document.createElement("IMG");
      prev.setAttribute("onclick", "initSlider1.evArrow('prev')");
      prev.setAttribute("src", "img/icons/prev.png");
      prev.setAttribute("id", "hoverPrev");
      prevWr.appendChild(prev);
}

function sliderPop(c){
  var src = _('.current').children[1].children[0].getAttribute('src'),
      srcSlash = src.indexOf('-'),
      srcImg = src.slice(0,(srcSlash + 2)) + "-full.jpg",
      wr = _("#popSliderDesk"),
      arrowGenerales = _('#arrows'),
      img = _('#popSliderImg');
  if(c === 'open'){
    arrowGenerales.style.display = "none";
    img.setAttribute('src', srcImg);
    wr.classList.remove('hideDisplay');
    wr.classList.add('showDisplayFlex');
    setTimeout(function(){
      wr.style.opacity = 1;
    },500);
  } else {
    arrowGenerales.style.display = "block";
    wr.style.opacity = 0;
    setTimeout(function(){
      wr.classList.remove('showDisplayFlex');
      wr.classList.add('hideDisplay');
    },500);
  }
}

function blockScroll(){
  var b = document.getElementsByTagName("BODY")[0];
  if(!checkBowser){
    b.style.overflowY = "hidden";
  }
}

function blockScrollTwo(){
  var b = document.getElementsByTagName("BODY")[0];
  if(!checkBowser){
    b.style.overflowY = "hidden";
  } else {
    b.style.overflowY = "hidden";
  }
}

function prodPop(c, t){
  var wr = _("#popProd");
  if(t != null){
    var src = t.children[1].getAttribute('src'),
    srcSlash = src.indexOf('.'),
    srcImg = src.slice(0,srcSlash) + "-pop.jpg",
    img = _('#popProdImg');
  }
  if(c === 'open'){
    img.setAttribute('src', srcImg);
    wr.classList.remove('hideDisplay');
    wr.classList.add('showDisplayFlex');
    setTimeout(function(){
      wr.style.opacity = 1;
    },500);
  } else{
    wr.style.opacity = 0;
    setTimeout(function(){
      wr.classList.remove('showDisplayFlex');
      wr.classList.add('hideDisplay');
    },500);
  }
}

function loadSlider(c){
  var xhrList = [],
      imgList = ["s-1-full.jpg","s-1.png","s-2-full.jpg","s-2.png","s-3-full.jpg","s-3.png","s-4-full.jpg","s-4.png","s-5-full.jpg","s-5.png"],
      urlList = [];
  for(var i =0; i<=imgList.length; i++){
    urlList.push('img/'+c+'/'+imgList[i]);
  }
  for(var i = 0; i < urlList.length; i++){
    xhrList[i] = new XMLHttpRequest();
    xhrList[i].open('GET', urlList[i], true);
    xhrList[i].responseType = "blob";
    xhrList[i].send();
  }
}
