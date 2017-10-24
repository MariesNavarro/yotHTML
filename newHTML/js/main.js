function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

function countLoading(){
  var p = _('#loading>#percentage');
  var w = _('#loading');
  var x = 0;
  var count = setInterval(function(){
    x++;
    if(x == 1) {
      console.log("Hey");
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


function changeIcon(t, c){
  console.log("Hola");
}
