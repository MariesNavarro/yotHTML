function SliderYot(wr, type){
  this.type = type;
  this.c = 0;
  this.wrap = document.getElementById(wr);
  this.wrap.classList.add('wrap_slider');
  var ul = document.createElement("UL");
  ul.classList.add('ul_slider');
  this.wrap.appendChild(ul);
  for (var i = 0; i < 2; i++) {
    var arr = document.createElement("DIV");
    arr.classList.add('arrow_slider');
    arr.setAttribute('onmouseover', 'chBckIcn("over","img/icons/arrow-",this)');
    arr.setAttribute('onmouseout', 'chBckIcn("out","img/icons/arrow-",this)');
    this.wrap.appendChild(arr);
  }
  var arrs = __('.arrow_slider');
  arrs[0].classList.add('arr_prev');
  arrs[0].setAttribute('data-arr', 'prev');
  arrs[1].classList.add('arr_next');
  arrs[1].setAttribute('data-arr', 'next');
  arrs[0].setAttribute('onclick', wr+".evArrow('prev')");
  arrs[1].setAttribute('onclick', wr+".evArrow('next')");
  for (var i = 0; i < 3; i++) {
    var li = document.createElement("LI");
    li.classList.add('li_slider');
    ul.appendChild(li);
  }
  var lis = __('.li_slider');
  lis[1].classList.add('current');
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
  var imgs = __('.img_slider');
  setUrls(0,this.type);
  this.evArrow = function(d){
		switch (d) {
			case 'prev':
        var cnt, ty;
        this.c-=1;
        if(this.c < 0){this.c = 4}
        cnt = this.c;
        ty = this.type;
        ul.classList.add('transition_slider');
        ul.style.left = "0";
        setTimeout(function(){
          ul.children[0].classList.add('current');
        },250);
        setTimeout(function(){
          ul.classList.remove('transition_slider');
          ul.style.left = "-100%";
          ul.children[0].classList.remove('current');
          setUrls(cnt, ty);
        },1000);
			break;
			case 'next':
        var cnt, ty;
        this.c+=1;
        if(this.c > 4){this.c = 0}
        cnt = this.c;
        ty = this.type;
        ul.classList.add('transition_slider');
        ul.style.left = "-200%";
        setTimeout(function(){
          ul.children[2].classList.add('current');
        },250);
        setTimeout(function(){
          ul.classList.remove('transition_slider');
          ul.style.left = "-100%";
          ul.children[2].classList.remove('current');
          setUrls(cnt, ty);
        },1000);
			break;
		}
	}
}

var urls0 = ['4','5','1','5','1','2','1','2','3'];
var urls1 = ['5','1','2','1','2','3','2','3','4'];
var urls2 = ['1','2','3','2','3','4','3','4','5'];
var urls3 = ['2','3','4','3','4','5','4','5','1'];
var urls4 = ['3','4','5','4','5','1','5','1','2'];

function setUrls(c, t){
  var imgs = __('.img_slider'), arr;
  switch (c) {
    case 0:
      arr = urls0;
    break;
    case 1:
      arr = urls1;
    break;
    case 2:
      arr = urls2;
    break;
    case 3:
      arr = urls3;
    break;
    case 4:
      arr = urls4;
    break;
  }
  innerFor(c);
  function innerFor(c){
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('src', 'img/'+t+'/s-'+arr[i]+'.png');
    }
  }
}

function chBckIcn(c,src,t){
  t.style.backgroundImage = "url('"+src+c+".svg')";
}
