// Function
function setAttr(value,value1,value2){
  value.setAttribute(value1,value2);
}
function removeAttr(value,value1,value2){
  value.removeAttribute(value1,value2);
}




// Animate Product
var animateProduct = document.querySelectorAll(".product__contain,.infor__avt,.infor__i4-name,.infor__i4-dsc");

for (var i = 0; i < animateProduct.length; i++) {
  if ($(window).width() < 480) {
    setAttr(animateProduct[i],"data-aos","fade-left")
  }
  else{
    removeAttr(animateProduct[i],"data-aos","fade-left");

    if ($(window).width() > 480)  {
      setAttr(animateProduct[i],"data-aos","fade-up")
    }
    else{
      removeAttr(animateProduct[i],"data-aos","fade-up");
    }
  }

}
// end animate

// AOS LIb
AOS.init({
  disable: false,
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
});



// hover 3d

  var attr = document.querySelectorAll(".header__logo,.header__infor,.product,.infor__avt,.infor__i4-name,.infor__i4-dsc");
  for (var i = 0; i < attr.length; i++) {
    if ($(window).width() > 768) {
      setAttr(attr[i],"data-tilt","");
      setAttr(attr[i],"data-tilt-max","50");
      setAttr(attr[i],"data-speed","400");
      setAttr(attr[i],"data-perspective","500");
      VanillaTilt.init(attr[i], {
        max: 25,
        speed: 400
      });
    }
    else{
      removeAttr(attr[i],"data-tilt","");
      removeAttr(attr[i],"data-tilt-max","50");
      removeAttr(attr[i],"data-speed","400");
      removeAttr(attr[i],"data-perspective","500");
    }
    
  }
  


// Loader
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1,500)
    },5000)
}

init();



// Scale Cursor
function mouseOver() {
    document.getElementById('cursor').style.transform='scale(3)';
  }
  
  function mouseOut() {
        document.getElementById('cursor').style.transform='scale(1)';
  
  }
  
// Curosr hover
var curosrHover = document.querySelectorAll(".header__logo, .header__infor, .product,.infor__i4-name,.infor__i4-school,.infor__i4-dsc");
  for (var i = 0; i < curosrHover.length; i++) {
    setAttr(curosrHover[i],"onmouseover","mouseOver()");
    setAttr(curosrHover[i],"onmouseout","mouseOut()");
  }


var followCursor = (
  function() {
  var cursor = document.getElementById('cursor');
  cursor.style.position = 'fixed';

  return {
    init: function() {
      document.body.appendChild(cursor);
    },

    run: function(e) {
      var e = e || window.event;
      cursor.style.left = (e.clientX - 5) + 'px';
      cursor.style.top = (e.clientY - 5) + 'px';
    }
  };
}());



// modal

const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelector(".close-modal");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    document.querySelector(".logo").classList.add("close");
    document.querySelector(".logo-hasback").classList.add("active");

  });
});

close_modals.addEventListener("click",function(){
    var modal = document.querySelectorAll(".modal-container > .modal");
    modal.forEach(function(item){
        item.classList.remove("active");
    });
    document.querySelector(".logo").classList.remove("close");
    document.querySelector(".logo-hasback").classList.remove("active");
})

// end modal

var nextBtn = document.querySelectorAll(".caption__main");

nextBtn.forEach((next) => {
    next.addEventListener("click",() => {
        var temp = next.getAttribute("id");
        var modal = document.querySelectorAll(".modal");
      
        for(var i=0;i< modal.length;i++){
            var a = modal[temp];
            a.classList.add("active");
        }
    });
});



window.onload = function() {
  followCursor.init();
  document.body.onmousemove = followCursor.run;
}

// end cursor



