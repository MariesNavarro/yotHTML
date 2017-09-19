var overInfo = __('overInfo'),
    iconMore = __('iconMore'),
    moreHover = _('#moreHover'),
    imgProductoNos = __('imgProductoNos');

var loading = _('#loading');

window.onload = function (){
  setTimeout(function(){
    loading.style.display = "none";
  },5000);
  if(checkMobileIndex){
    moreHover.style.display = "block";
  } else {
    moreHover.style.display = "none";
  }
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

//unrotateImage rotateImage imgProductoNos
function overNosotros(c, i){
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
