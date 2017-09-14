var countSlider = 0;
var imgElem,
    svgDom = _('#svgTr'),
    polyDom = _('#polyTr'),
    trWrap = _('#transition'),
    bodyDom = _('body'),
    bulletProduct = __('bulletProduct');
var srcE = [];
var startPosY;
var elems;


function menuItem (c, e, i){
  var img = e.childNodes[1],
      overPath = "img/icons/menu-",
      outPath = "img/icons/menuOut-";
  switch (c) {
  case 'on':
    img.setAttribute('src', overPath + i + '.svg');
  break;
  case 'out':
    img.setAttribute('src', outPath + i + '.svg');
  break;

  case 'onM':
    img.setAttribute('src', overPath + i + 'm.svg');
  break;
  case 'outM':
    img.setAttribute('src', outPath + i + 'm.svg');
  break;
  }
}

window.onload = function (){
  getDimensionTransition();
  if(window.orientation == 90 || window.orientation == -90){
    mockProd[0].style.width = "200px";
    mockProd[0].style.height = "220px";
  }
  setElems();
  shuffleSrcElem('pot');
  resizeElem();
}

window.onresize = function(){
  var size = _('#size').innerHTML = "Width: " + window.innerWidth + "px Height: " + window.innerHeight + "px";
  getDimensionTransition();
  resizeElem();
}


// var lastScrollTop = window.pageYOffset;
// var flagOnScroll = false;
// document.addEventListener("scroll", function(){
//   console.log(window.pageXOffset + window.pageYOffset);
//
//   if(bodyDom.getAttribute('trigger')){
//     return;
//   }
//   bodyDom.setAttribute('trigger', '');
//    var st = window.pageYOffset || document.documentElement.scrollTop;
//    if (st > lastScrollTop){
//       setTimeout(function(){
//         countTla('prev');
// var debounceScrollNext, debounceScrollPrev;
// window.addEventListener("wheel", function(e){
//    if (e.deltaY > 0) {
//       clearTimeout(debounceScrollNext);
//       debounceScrollNext = setTimeout(function(){
//           console.log("Next");
//            countTla('next');
//       },500);
//    }
//    if (e.deltaY < 0) {
//       clearTimeout(debounceScrollPrev);
//       debounceScrollPrev = setTimeout(function(){
//         console.log("Preview");
//       },1000)
//    } else {
//      setTimeout(function(){
//        countTla('next');
//        console.log("Next");
//      },1000);
//         countTla('prev');
//       },500);
//    }
//    lastScrollTop = st;
// }, false);


var debounceScrollNext, debounceScrollPrev;
window.addEventListener("wheel", function(e){
   if (e.deltaY > 0) {
      clearTimeout(debounceScrollNext);
      debounceScrollNext = setTimeout(function(){
          console.log("Next");
           countTla('next');
      },500);
   }
   if (e.deltaY < 0) {
      clearTimeout(debounceScrollPrev);
      debounceScrollPrev = setTimeout(function(){
        console.log("Preview");
        countTla('prev');
      },500);
   }
}, false);


function getDimensionTransition(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  var middleH = h/2;
  var offset = middleH + 1;
  var margin = 560;
  svgDom.setAttribute('viewBox', '0 0 ' + w + ' ' +h);
  polyTr.setAttribute('points', '0,' + middleH + ' ' + w + ',' + middleH + ' ' + w + ',' + offset + ' 0,' + offset);
  polyTr.setAttribute('pointsOut', '0,' + middleH + ' ' + w + ',' + middleH + ' ' + w + ',' + offset + ' 0,' + offset);
  polyTr.setAttribute('pointsIn', '0,0 ' + w + ',' + -margin + ' ' + w + ',' + h + ' 0,' + (margin + h));
}



function menuMobile(c) {
  var innerMobile = _('#innerMobile');
  switch (c) {
    case 'open':
      innerMobile.style.display = "block";
      setTimeout(function(){ innerMobile.style.opacity = "1"; },700);
    break;
    case 'close':
      innerMobile.style.opacity = "0";
      setTimeout(function(){ innerMobile.style.display = "none"; },700);
    break;
  }
}


function countTla(c){
  switch (c) {
    case 'prev':
      countSlider--;
      if(countSlider < 0) countSlider = 4;
      sliderT(countSlider);
    break;
    case 'next':
    countSlider++;
    if(countSlider > 4) countSlider = 0;-
    sliderT(countSlider);
    break;
  }
}

function resetBullet(){
  for (var i = 0; i < bulletProduct.length; i++) {
    bulletProduct[i].classList.remove('current');
    bulletProduct[i].setAttribute('src', 'img/bulletOut.svg');
  }
}

function setCurrentBullet(n){
  setTimeout(function(){
      resetBullet();
      bulletProduct[n].classList.add('current');
      bulletProduct[n].setAttribute('src', 'img/bulletOver-' + n +'.svg');
   },2200);
}

function bulletChange(e,i,c){
  switch (c) {
    case 'over':
      e.setAttribute('src', 'img/bulletOver-' + i +'.svg');
    break;
    case 'out':
      e.setAttribute('src', 'img/bulletOut.svg');
    break;
  }
}

function sliderT(n){
  preventOnTransition = true;
  shuffleSrcElem('pot');
  resizeElem();
  transition();
  gravedad();
  setCurrentBullet(n);
  fadeOutProducts();

  switch (n) {
    case 0:
      polyDom.style.fill = "#d33640";

    break;
    case 1:
      polyDom.style.fill = "#f1b935";
    break;
    case 2:
      polyDom.style.fill = "#bc7129";
    break;
    case 3:
      polyDom.style.fill = "#f78f30";
    break;
    case 4:
      polyDom.style.fill = "#d33640";
    break;
  }

  setTimeout(function(){
    toggleSlides(n);

  },2000);
  setTimeout(function(){
    fadeInProducts();
    preventOnTransition = false;
  },2300);
}



function toggleSlides(i){
  var slide = __('slide'),
      prev,
      next;
  //limites
  if(i == 0){
    prev = 4;
  } else {
    prev = i -1;
  }
  if(i == 4){
    next = 0;
  } else {
    next = i + 1;
  }
  //Casos
  slide[prev].classList.remove('showDisplay');
  slide[prev].classList.add('hideDisplay');

  slide[next].classList.remove('showDisplay');
  slide[next].classList.add('hideDisplay');

  slide[i].classList.remove('hideDisplay');
  slide[i].classList.add('showDisplay');
}

function transition(){
  trWrap.classList.remove('hideDisplay');
  trWrap.classList.add('showDisplay');
  anime({
  	targets: svgDom,
    duration: 800,
  	easing: 'easeOutQuad',
  	opacity: 1
  });
  anime({
  	targets: polyDom,
  	duration: 800,
  	easing: 'easeOutQuad',
  	points: polyDom.getAttribute('pointsIn')
  });
  setTimeout(function(){
    anime({
    	targets: svgDom,
      duration: 400,
    	easing: 'easeOutQuad',
    	opacity: 0,
      delay: 100
    });
    anime({
    	targets: polyDom,
    	duration: 500,
    	easing: 'easeOutQuad',
    	points: polyDom.getAttribute('pointsOut')
    });
    setTimeout(function(){
      trWrap.classList.remove('showDisplay');
      trWrap.classList.add('hideDisplay');
    },500)
  },2000);
}

function setElems(){
  for (var i = 0; i < 6; i++) {
    imgElem = document.createElement('IMG');
    imgElem.setAttribute('class', 'elem');
    trWrap.appendChild(imgElem);
  }
}

var elems = __('elem');

function shuffleSrcElem(prod){
  startPosY = window.innerHeight + 200;
  srcE = [];
  for (var i = 0; i < 6; i++) {
    srcE.push('img/tla/'+prod+'-'+ i +'.svg');
  }
  var newScr = shuffle(srcE);
  for (var i = 0; i < 6; i++) {
    elems[i].setAttribute('src', newScr[i]);
    elems[i].style.top =  startPosY + "px";
  }
}

function resizeElem(){
  var offsetLeft,
      leftElem,
      widthRange = window.innerWidth - 250;
  if(checkMobileIndex || window.innerWidth < 800){
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute('width', '90');
      //left
      leftElem =  Math.round(Math.random(widthRange) * widthRange);
      if(leftElem > widthRange){
        offsetLeft = 0;
        imgElem.style.left = leftElem + offsetLeft;
      } else {
        offsetLeft = 100;
        imgElem.style.left = leftElem + offsetLeft;
      }
    }
  } else {
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute('width', '130');
      //Left
      leftElem =  Math.round(Math.random(widthRange) * widthRange);
      if(leftElem > widthRange){
        offsetLeft = 0;
        elems[i].style.left = leftElem + offsetLeft;
      } else {
        offsetLeft = 100;
        elems[i].style.left = leftElem + offsetLeft;
      }
    }
  }
}

function gravedad(){
  startPosY = window.innerHeight + 200;
  var posRange = ['50', '550', '200', '500', '0', '300','150'];
  for (var i = 0; i < 6; i++) {
    var posY = shuffle(posRange);
  }
  anime({
			targets: elems[0],
      translateX: [
        {value:[-20],duration: 2000,easing: 'easeInQuad'}
			],
      top: [
				{value:[posY[0]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[0]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[1],
      // translateX: [
      //   {value:[-300],duration: 2000,easing: 'easeInQuad'}
			// ],
      top: [
				{value:[posY[1]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[1]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[2],
      // translateX: [
      //   {value:[-100],duration: 2000,easing: 'easeInQuad'}
			// ],
      top: [
				{value:[posY[2]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[2]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[3],
      // translateX: [
      //   {value:[100],duration: 2000,easing: 'easeInQuad'}
			// ],
      top: [
				{value:[posY[3]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[3]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[4],
      // translateX: [
      //   {value:[50],duration: 2000,easing: 'easeInQuad'}
			// ],
      top: [
				{value:[posY[4]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[4]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[5],
      // translateX: [
      //   {value:[-200],duration: 2000,easing: 'easeInQuad'}
			// ],
      top: [
				{value:[posY[5]],duration: 700,easing: 'easeInQuad'},
        {value:[posY[5]],duration: 300,easing: 'easeInQuad'},
				{value:[startPosY],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
}



function wiggleChange(e, c){
  switch (c) {
    case 'over':
      e.classList.remove('wiggleOut');
      e.classList.add('wiggleOver');
    break;
    case 'out':
      e.classList.remove('wiggleOver');
      e.classList.add('wiggleOut');
    break;
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var elemLeft = __('elemLeft');
var elemRight = __('elemRight');

function fadeInProducts(){
  anime({
      targets: elemLeft,
      translateX: [
        {value:[20],duration: 500,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[1],duration: 500,easing: 'easeOutQuad'}
      ]
  });
  anime({
      targets: elemRight,
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
      targets: elemLeft,
      translateX: [
        {value:[-20],duration: 500,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[0],duration: 500,easing: 'easeOutQuad'}
      ]
  });
  anime({
      targets: elemRight,
      translateX: [
        {value:[20],duration: 500,easing: 'easeOutQuad'}
      ],
      opacity: [
        {value:[0],duration: 500,easing: 'easeOutQuad'}
      ]
  });
}
