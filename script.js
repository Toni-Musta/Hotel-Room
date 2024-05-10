$(function() {
    $('.owl-carousel.testimonial-carousel').owlCarousel({
      nav: true,
      navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        750: {
          items: 2,
        }
      }
    });
  });


  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});


  var $slider = $('.slider');
  var $slideBox = $slider.find('.slide-box');
  var $leftControl = $slider.find('.slide-left');
  var $rightControl = $slider.find('.slide-right');
  var $slides = $slider.find('.slide');
  var numItems = $slider.find('.slide').length;
  var position = 0;


  var windowWidth = $(window).width();
  $slides.width(windowWidth);
  $leftControl.on('click', function(){
    var width = $slider.width();
    position = position - 1 >= 0 ? position - 1 : numItems - 1;
    if(position != numItems-1){
      $slider.find('.slide').eq(position + 1).css('margin-left', 0);
    }
    else{
      $slider.find('.slide:gt(0)').each(function(index){
        $(this).css('margin-left', width * -1 + 'px');
      });
    }
  });

  $rightControl.on('click', function(){
    var width = $slider.width();
    position = position + 1 < numItems ? position + 1 : 0;
    if(position != 0){
      $slider.find('.slide').eq(position).css('margin-left',  width * -1 + 'px');
    }
    else{
      $slider.find('.slide').css('margin-left', 0);
    }
  });

  $(window).resize(function(){
   $slides.width($(window).width()).height($(window).height);
  });


    
    const elements = document.querySelectorAll('.fadeinleft');
const elements1 = document.querySelectorAll('.fade-in');
const elements2 = document.querySelectorAll('.fadeinright');
const elements3 = document.querySelectorAll('.fadeindown');
const options = {
    root:null,
    rootMargin: '0px',
    threshold: .4
}
const callbacks = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-left');
        }
    });
}
const callbacks1 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}
const callbacks2 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-right');
        }
    });
}
const callbacks3 = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active-down');
        }
    });
}
let observer = new IntersectionObserver(callbacks, options);
let observer1 = new IntersectionObserver(callbacks1, options);
let observer2 = new IntersectionObserver(callbacks2, options);
let observer3 = new IntersectionObserver(callbacks3, options);
elements.forEach(elements =>{
    observer.observe(elements);
})
elements1.forEach(elements1 =>{
    observer1.observe(elements1);
})
elements2.forEach(elements2 =>{
    observer2.observe(elements2);
})
elements3.forEach(elements3 =>{
    observer3.observe(elements3);
})

  

//OWL CAROUSE//
 $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:4
       }
   }
 })
 

 
 //slideshow style interval
var autoSwap = setInterval( swap,3500);

//pause slideshow and reinstantiate on mouseout
$('ul, span').hover(
  function () {
    clearInterval(autoSwap);
}, 
  function () {
   autoSwap = setInterval( swap,3500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap images function
function swap(action) {
  var direction = action;
  
  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }
    
    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');
    
    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }
  
  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;
        
        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }
    
      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;
      
        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }
   
      return position;
    }  
  
   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise'); 
  }
  else {
    swap('clockwise'); 
  }
});


