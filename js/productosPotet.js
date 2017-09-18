var countSlider = 0;
var imgElem,
    svgDom = _('#svgTr'),
    trWrap = _('#transition'),
    transitionScrollUnoBottom = _('#transitionScrollUnoBottom'),
    transitionScrollUnoTop = _('#transitionScrollUnoTop'),
    bodyDom = _('body'),
    pathPotetProv = _('#pathPotetProv'),
    bulletProduct = __('bulletProduct');
var srcE = [];
var startPosX;
var elems;

var loading = _('#loading'),
    potetSvg = _('#potetSvg');

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
  setTimeout(function(){
    loading.style.display = "none";
  },5000);
  // getDimensionTransition();
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
  // getDimensionTransition();
  resizeElem();
}

function transitionScollUno(){
  transitionScrollUnoBottom.classList.remove('hideDisplay');
  transitionScrollUnoBottom.classList.add('showDisplay');
  anime({
  	targets: transitionScrollUnoBottom,
    duration: 800,
  	easing: 'easeOutQuad',
    opacity : 1,
    bottom: '-60px'
  });
  setTimeout(function(){
    anime({
    	targets: transitionScrollUnoBottom,
      duration: 800,
    	easing: 'easeOutQuad',
      opacity : 0,
      bottom: '-600px'
    });
    setTimeout(function(){
      transitionScrollUnoBottom.classList.remove('showDisplay');
      transitionScrollUnoBottom.classList.add('hideDisplay');
    },100);
  },1100);
}



function transitionScollDos(){
  transitionScrollUnoTop.classList.remove('hideDisplay');
  transitionScrollUnoTop.classList.add('showDisplay');
  anime({
  	targets: transitionScrollUnoTop,
    duration: 800,
  	easing: 'easeOutQuad',
    opacity : 1,
    top: '0'
  });
  setTimeout(function(){
    anime({
    	targets: transitionScrollUnoTop,
      duration: 800,
    	easing: 'easeOutQuad',
      opacity : 0,
      top: '-600px'
    });
    setTimeout(function(){
      transitionScrollUnoBottom.classList.remove('showDisplay');
      transitionScrollUnoBottom.classList.add('hideDisplay');
    },100);
  },1100);
}


var debounceScrollNext, debounceScrollPrev;
window.addEventListener("wheel", function(e){
  console.log("Hola");
   if (e.deltaY > 0) {
      clearTimeout(debounceScrollNext);
      debounceScrollNext = setTimeout(function(){
          transitionScollUno();
          setTimeout(function(){
            console.log("Next");
            countTla('next');
          },1000);
      },50);
   }
   if (e.deltaY < 0) {
      clearTimeout(debounceScrollPrev);
      debounceScrollPrev = setTimeout(function(){
        transitionScollDos();
        setTimeout(function(){
          console.log("Preview");
          countTla('prev');
        },1000);
      },50);
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
      svgDom.style.backgroundColor = "rgba(0,0,0,0)";
      pathPotetProv.style.fill = "#ffc521";
      setTimeout(function(){
        anime({
          targets: svgDom,
          duration: 50,
          easing: 'easeOutQuad',
          backgroundColor: '#ffc521'
        });
      },530);
    break;
    case 1:
      svgDom.style.backgroundColor = "rgba(0,0,0,0)";
      pathPotetProv.style.fill = "#ffc521";
      setTimeout(function(){
        anime({
          targets: svgDom,
          duration: 50,
          easing: 'easeOutQuad',
          backgroundColor: '#ffc521'
        });
      },530);
    break;
    case 2:
      svgDom.style.backgroundColor = "rgba(0,0,0,0)";
      pathPotetProv.style.fill = "#f78f30";
      setTimeout(function(){
        anime({
          targets: svgDom,
          duration: 50,
          easing: 'easeOutQuad',
          backgroundColor: '#f78f30'
        });
      },530);
    break;
    case 3:
      svgDom.style.backgroundColor = "rgba(0,0,0,0)";
      pathPotetProv.style.fill = "#d33640";
      setTimeout(function(){
        anime({
          targets: svgDom,
          duration: 50,
          easing: 'easeOutQuad',
          backgroundColor: '#d33640'
        });
      },530);
    break;
    case 4:
      svgDom.style.backgroundColor = "rgba(0,0,0,0)";
      pathPotetProv.style.fill = "#d33640";
      setTimeout(function(){
        anime({
          targets: svgDom,
          duration: 50,
          easing: 'easeOutQuad',
          backgroundColor: '#d33640'
        });
      },530);
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
  	targets: potetSvg,
    duration: 700,
  	easing: 'easeOutQuad',
  	opacity: 1,
    right: '0'
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
    	targets: potetSvg,
      duration: 700,
    	easing: 'easeOutQuad',
    	opacity: 0,
      right: '-150%'
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
var startPosX;
function shuffleSrcElem(prod){
  //ocultar los elementos en X
  startPosX = window.innerWidth + 200;
  srcE = [];
  for (var i = 0; i < 6; i++) {
    srcE.push('img/tla/'+prod+'-'+ i +'.svg');
  }
  var newScr = shuffle(srcE);
  for (var i = 0; i < 6; i++) {
    elems[i].setAttribute('src', newScr[i]);
    elems[i].style.left =  startPosX + "px";
  }
}

function resizeElem(){
  var offsetLeft,
      leftElem,
      heightRange = window.innerHeight - 250;
  if(checkMobileIndex || window.innerWidth < 800){
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute('width', '90');
      //left
      leftElem =  Math.round(Math.random(heightRange) * heightRange);
      if(leftElem > heightRange){
        offsetLeft = 0;
        imgElem.style.top = leftElem + offsetLeft;
      } else {
        offsetLeft = 100;
        imgElem.style.top = leftElem + offsetLeft;
      }
    }
  } else {
    for (var i = 0; i < elems.length; i++) {
      elems[i].setAttribute('width', '130');
      //Left
      leftElem =  Math.round(Math.random(heightRange) * heightRange);
      if(leftElem > heightRange){
        offsetLeft = 0;
        elems[i].style.top = leftElem + offsetLeft;
      } else {
        offsetLeft = 100;
        elems[i].style.top = leftElem + offsetLeft;
      }
    }
  }
}

function gravedad(){
  startPosX = window.innerWidth + 200;
  middleW = window.innerWidth/2;
  var w = window.innerWidth;
  var pos1 = middleW - (0.4*w);
  var pos2 = middleW - (0.03*w);
  var pos3 = middleW + (0.05*w);
  var pos4 = middleW - (0.32*w);
  var pos5 = middleW + (0.3*w);
  var pos6 = middleW + (0.2*w);

  var posRange = [middleW - 400, '25', '20', '65', '0', '70','100'];
  for (var i = 0; i < 6; i++) {
    var posX = shuffle(posRange);
  }
    console.log("pos1(+100): " + pos1 + "\n" + "pos2(-800): " + pos2 + "\n" + "pos3(+300): " + pos3 + "\n" + "pos4(-300): " + pos4 + "\n" + "pos5(+220): " + pos5 + "\n" + "pos6(-220): " + pos6);

  anime({
			targets: elems[0],
      left: [
				{value:[pos1],duration: 700,easing: 'easeInQuad'},
        {value:[pos1],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[1],
      left: [
				{value:[pos2],duration: 700,easing: 'easeInQuad'},
        {value:[pos2],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[2],
      left: [
				{value:[pos3],duration: 700,easing: 'easeInQuad'},
        {value:[pos3],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[3],
      left: [
				{value:[pos4],duration: 700,easing: 'easeInQuad'},
        {value:[pos4],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[4],
      left: [
				{value:[pos5],duration: 700,easing: 'easeInQuad'},
        {value:[pos5],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
  anime({
			targets: elems[5],
      left: [
				{value:[pos6],duration: 700,easing: 'easeInQuad'},
        {value:[pos6],duration: 300,easing: 'easeInQuad'},
				{value:[startPosX],duration: 1000,easing: 'easeOutQuad'}
			],
      rotate: [
        {value:['0'],duration: 500,easing: 'easeInQuad'},
        {value:['1turn'],duration: 550,easing: 'easeOutQuad'},
      ]
	});
}

/* WIGGLE */

// function wiggleChange(e, c){
//   switch (c) {
//     case 'over':
//       e.classList.remove('wiggleOut');
//       e.classList.add('wiggleOver');
//     break;
//     case 'out':
//       e.classList.remove('wiggleOver');
//       e.classList.add('wiggleOut');
//     break;
//   }
// }

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

var arrowOverSliderInd = __('arrowOverSliderInd');

function sliderIndOver(c,i){
  switch (c) {
    case 'over':
      arrowOverSliderInd[i].setAttribute('src', 'img/icons/slider-arrowOver.svg')
    break;
    case 'out':
      arrowOverSliderInd[i].setAttribute('src', 'img/icons/slider-arrowOut.svg')
    break;
  }
}


var countSliderIndividual = 0;
var middle = _('#middle');
var imgSliderInd = __('imgSliderInd');
var captionSliderInd = _('#captionSliderInd');
function sliderIndividualCount(c){
  switch (c) {
    case 'prev':
      countSliderIndividual--;
      if(countSliderIndividual<0) countSliderIndividual = 4;
      sliderIndividual(countSliderIndividual);
    break;
    case 'next':
      countSliderIndividual++;
      if(countSliderIndividual>4) countSliderIndividual = 0;
      sliderIndividual(countSliderIndividual);
    break;
  }
}

var src1 = ['img/sliderI/p1.png','img/sliderI/p2.png','img/sliderI/p3.png','img/sliderI/p4.png','img/sliderI/p5.png'];
var src2 = ['img/sliderI/p5.png','img/sliderI/p1.png','img/sliderI/p2.png','img/sliderI/p3.png','img/sliderI/p4.png'];
var src3 = ['img/sliderI/p4.png','img/sliderI/p5.png','img/sliderI/p1.png','img/sliderI/p2.png','img/sliderI/p3.png'];
var src4 = ['img/sliderI/p3.png','img/sliderI/p4.png','img/sliderI/p5.png','img/sliderI/p1.png','img/sliderI/p2.png'];
var src5 = ['img/sliderI/p2.png','img/sliderI/p3.png','img/sliderI/p4.png','img/sliderI/p5.png','img/sliderI/p1.png'];

sliderIndividual(0);

function sliderIndividual(c){
  middle.style.width = "25%";
  for (var i = 0; i < imgSliderInd.length; i++) {
    captionSliderInd.style.opacity = "0";
    imgSliderInd[i].style.opacity = "0.1";
    imgSliderInd[i].setAttribute('src', 'img/sliderI/blank.png');
  }
  setTimeout(function(){
    switch (c) {
      case 0:
      captionSliderInd.innerHTML="Texto 1: Potet Sal de Mar México";
        for (var i = 0; i < imgSliderInd.length; i++) {
          imgSliderInd[i].setAttribute('src', src1[i]);
        }
        middle.setAttribute('current', src1[2]);
      break;
      case 1:
        captionSliderInd.innerHTML="Texto 2: Potet Sal de Mar";
        console.log("slider 2");
        for (var i = 0; i < imgSliderInd.length; i++) {
          imgSliderInd[i].setAttribute('src', src2[i]);
        }
        middle.setAttribute('current', src2[2]);
      break;
      case 2:
        captionSliderInd.innerHTML="Texto 3: Potet Habanero y Chile de Árbol";
        console.log("slider 3");
        for (var i = 0; i < imgSliderInd.length; i++) {
          imgSliderInd[i].setAttribute('src', src3[i]);
        }
        middle.setAttribute('current', src3[2]);
      break;
      case 3:
        console.log("slider 4");
        captionSliderInd.innerHTML="Texto 4: Potet Chile de Árbol";
        for (var i = 0; i < imgSliderInd.length; i++) {
          imgSliderInd[i].setAttribute('src', src4[i]);
        }
        middle.setAttribute('current', src4[2]);
      break;
      case 4:
        console.log("slider 5");
        captionSliderInd.innerHTML="Texto 5: Potet Habanero";
        for (var i = 0; i < imgSliderInd.length; i++) {
          imgSliderInd[i].setAttribute('src', src5[i]);
        }
        middle.setAttribute('current', src5[2]);
      break;
    }
  },500);
  setTimeout(function(){
    captionSliderInd.style.opacity = "1";
    middle.style.width = "50%";
    for (var i = 0; i < imgSliderInd.length; i++) {
      imgSliderInd[i].style.opacity = "1";
    }
  },1000)
}

function zoom(c){
  var current = middle.getAttribute('current');
  switch (c) {
    case 'over':
      imgSliderInd[2].setAttribute('src', 'img/sliderI/zoom.png');
    break;
    case 'out':
      imgSliderInd[2].setAttribute('src', current);
    break;
  }
}

var zoomWraper = _('#zoomWraper');
var zoomImg = _('#zoomImg');
function zoomImgS(c){
  var current = middle.getAttribute('current');
  switch (c) {
  case 'open':
    zoomImg.style.backgroundImage = 'url(' + current + ')';
    zoomWraper.style.display = "block";
    setTimeout(function(){
      zoomWraper.style.opacity = "1";
    },500);
  break;
  case 'close':
    zoomWraper.style.opacity = "0";
  setTimeout(function(){
    zoomWraper.style.display = "none";
  },500);
  break;
  }
}
