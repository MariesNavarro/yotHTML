var overInfo = __('overInfo'),
    iconMore = __('iconMore'),
    imgProductoNos = __('imgProductoNos');

var loading = _('#loading');

window.onload = function (){
  setTimeout(function(){
    loading.style.display = "none";
  },5000);
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
      overInfo[i].style.opacity = "0.8";
      iconMore[i].classList.remove('unrotateIcon');
      iconMore[i].classList.add('rotateIcon');
    break;
    case 'out':
      overInfo[i].style.opacity = "0";
      iconMore[i].classList.remove('rotateIcon');
      iconMore[i].classList.add('unrotateIcon');
    break;
  }
}
