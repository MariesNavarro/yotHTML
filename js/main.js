window.onload = function (){

}

window.onresize = function(){
  var size = _('#size').innerHTML = "Width: " + window.innerWidth + "px Height: " + window.innerHeight + "px";
}


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

function overArrow(c, e){
  switch (c) {
    case 'on':
      e.setAttribute('src', 'img/icons/slider-arrowOver.svg');
    break;
    case 'out':
      e.setAttribute('src', 'img/icons/slider-arrowOut.svg');
    break;
  }
}

var iteSlider = 0;

function countSlider(c){
  switch (c) {
    case 'prev':
      iteSlider--;
      if(iteSlider < 0) iteSlider = 2;
      slider(iteSlider);
      break;
    case 'next':
      iteSlider++;
      if(iteSlider > 2) iteSlider = 0;
      slider(iteSlider);
      break;
  }
}
slider(0);
function slider(n){
  var b = _('#backHome'),
      sot = _('#sot'),
      potet = _('#potet'),
      tlayolis = _('#tlayolis');

  switch (n) {
    case 0:
      b.style.left = "0";
      potet.classList.remove('showOpacity');
      potet.classList.add('hideOpacity');
      tlayolis.classList.remove('showOpacity');
      tlayolis.classList.add('hideOpacity');

      potet.classList.remove('showDisplay');
      potet.classList.add('hideDisplay');
      tlayolis.classList.remove('showDisplay');
      tlayolis.classList.add('hideDisplay');

      sot.classList.remove('hideDisplay');
      sot.classList.add('showDisplay');
      setTimeout(function(){
        sot.classList.remove('hideOpacity');
        sot.classList.add('showOpacity');
      },500);
    break;
    case 1:
      b.style.left = "-100vw";
      sot.classList.remove('showOpacity');
      sot.classList.add('hideOpacity');
      tlayolis.classList.remove('showOpacity');
      tlayolis.classList.add('hideOpacity');

      sot.classList.remove('showDisplay');
      sot.classList.add('hideDisplay');
      tlayolis.classList.remove('showDisplay');
      tlayolis.classList.add('hideDisplay');

      potet.classList.remove('hideDisplay');
      potet.classList.add('showDisplay');
      setTimeout(function(){
        potet.classList.remove('hideOpacity');
        potet.classList.add('showOpacity');
      },500);
    break;
    case 2:
      b.style.left = "-200vw";
      sot.classList.remove('showOpacity');
      sot.classList.add('hideOpacity');
      potet.classList.remove('showOpacity');
      potet.classList.add('hideOpacity');

      sot.classList.remove('showDisplay');
      sot.classList.add('hideDisplay');
      potet.classList.remove('showDisplay');
      potet.classList.add('hideDisplay');

      tlayolis.classList.remove('hideDisplay');
      tlayolis.classList.add('showDisplay');
      setTimeout(function(){
        tlayolis.classList.remove('hideOpacity');
        tlayolis.classList.add('showOpacity');
      },500);

    break;
  }

}




// function toggleOpacity(e, f){
//   switch (f) {
//     case 'fadeIn':
//       for (var i = 0; i < e.length; i++) {
//         e[i].style.opacity = "1";
//       }
//     break;
//     case 'fadeOut':
//       for (var i = 0; i < e.length; i++) {
//         e[i].style.opacity = "1";
//       }
//     break;
//   }
// }
