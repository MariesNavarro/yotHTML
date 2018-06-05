var backgroundsHome = ["img/sot/background.jpg"];

var backgroundsProductos = ["img/tlayolis/background.jpg", "img/potet/background.jpg","img/sot/background-sot-producto-desktop.jpg", "img/sot/background-sot-producto-mobile.jpg", "img/potet/background-potet-producto-desktop.jpg", "img/potet/background-potet-producto-mobile.jpg", "img/tlayolis/background-tlayolis-producto-desktop.jpg", "img/tlayolis/background-tlayolis-producto-mobile.jpg"];

var nosotrosImg = ['img/nosotros/nosotros-mision.jpg', 'img/nosotros/nosotros-vision.jpg'];

var sotProducto = ["img/sot/background-sot-producto-desktop.jpg", "img/sot/background-sot-producto-mobile.jpg"];

var potetProducto = ["img/potet/background-potet-producto-desktop.jpg", "img/potet/background-potet-producto-mobile.jpg"];

var tlayolisProducto = ["img/tlayolis/background-tlayolis-producto-desktop.jpg", "img/tlayolis/background-tlayolis-producto-mobile.jpg"];

var xhrList = [], urlList = [];
var wrLoad = document.getElementById('loading');

function xhReq(list){
  for (var i = 0; i < list.length; i++) {
    xhrList[i] = new XMLHttpRequest();
    xhrList[i].open('GET', list[i], true);
    xhrList[i].responseType = "blob";
    xhrList[i].onload = function (e){
      if(this.readyState == 4){
        fadeOutBack();
      }
    }
    xhrList[i].send();
  }
}

function fadeOutBack(){
  wrLoad.style.opacity = 0;
  setTimeout(function(){
    wrLoad.style.display = "none";
  },1500);
}
