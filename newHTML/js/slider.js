var ulrs = [
  'img/potet/s-potet-2.png',
  'img/potet/s-potet-3.png',
  'img/potet/s-potet-4.png',
  'img/potet/s-potet-5.png',
  'img/potet/s-potet-1.png',
  'img/potet/s-potet-2.png',
  'img/potet/s-potet-3.png'
]

function SliderYot(wr){
  this.wrap = document.getElementById(wr);
  this.wrap.classList.add('wrap_slider');
  //crear ul (slider)
  var ul = document.createElement("UL");
  ul.classList.add('ul_slider');
  this.wrap.appendChild(ul);
  //crear flechas
  //ponerles clase arrow
  for (var i = 0; i < 2; i++) {
    var arr = document.createElement("DIV");
    arr.classList.add('arrow_slider');
    //poner over changeBackIcon
    arr.setAttribute('onmouseover', 'chBckIcn("over","img/icons/arrow-",this)');
    arr.setAttribute('onmouseout', 'chBckIcn("out","img/icons/arrow-",this)');
    this.wrap.appendChild(arr);
  }
  //get flechas
  var arrs = __('.arrow_slider');
  //distinguir flecha prev/next
  arrs[0].classList.add('arr_prev');
  arrs[0].setAttribute('data-arr', 'prev');
  arrs[1].classList.add('arr_next');
  arrs[1].setAttribute('data-arr', 'next');
  //poner ev click slider.Count
  arrs[0].setAttribute('onclick', wr+".evArrow('prev')");
  arrs[1].setAttribute('onclick', wr+".evArrow('next')");
  //crear li
  for (var i = 0; i < 3; i++) {
    var li = document.createElement("LI");
    li.classList.add('li_slider');
    ul.appendChild(li);
  }
  //get lis
  var lis = __('.li_slider');
  //current
  lis[1].classList.add('current');
  //poner los items(div) por cada li y en cada div > img
  for (var i = 0; i < 3; i++) {
    var item = document.createElement("DIV");
    var img = document.createElement("IMG");
    img.classList.add('img_slider');
    item.appendChild(img);
    lis[0].appendChild(item);
  }
  for (var i = 0; i < 3; i++) {
    var item = document.createElement("DIV");
    var img = document.createElement("IMG");
    img.classList.add('img_slider');
    item.appendChild(img);
    lis[1].appendChild(item);
  }
  for (var i = 0; i < 3; i++) {
    var item = document.createElement("DIV");
    var img = document.createElement("IMG");
    img.classList.add('img_slider');
    item.appendChild(img);
    lis[2].appendChild(item);
  }
  //poner los src de las img
  var imgs = __('.img_slider');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('src', ulrs[i]);
  }

  //metodo slider arrow
  this.evArrow = function(d){
		switch (d) {
			case 'prev':
      console.log("Prev");
        ul.classList.add('transition_slider');
        ul.style.left = "0";
        setTimeout(function(){
          // ul.children[2].remove();
          ul.children[0].classList.add('current');
        },250);
        setTimeout(function(){
          ul.classList.remove('transition_slider');
          ul.style.left = "-100%";
          ul.children[0].classList.remove('current');
        },500);
			break;
			case 'next':
        ul.style.left = "-200%";
			break;
		}
	}
}



function setUrls(c){
  // var
}



function chBckIcn(c,src,t){
  t.style.backgroundImage = "url('"+src+c+".svg')";
}
