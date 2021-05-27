"use strict"
$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow:3,
        infinite:true,
        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 567,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
    });
  });
  //////////////////////menu
  $('.burger').on('click', function(){
    if($('.small-nav').css('height') == '0px'){
      $('.small-nav').css('height', '80px');
    }
  })
  $('body').on('click', function(e){
    if($('.small-nav').css('height') != '0px'){
let target = e.target;

if(target.tagName != 'UL' && target.tagName != 'LI'){
  $('.small-nav').css('height', '0px');
}else{
  return;
}
    }
  })
/////////////////paralax//////////////////
function paralax(e, targetClass, speed){
  const x = e.pageX/$(window).width();
const y = e.pageY/$(window).height();
$(`${targetClass}`).css(
  'transform',
  'translate3d(' + x * speed + 'px, ' + y * speed + 'px, 0px)'
)
}
if($(window).width() >= 1024){
  $('body').on('mousemove', (e)=>{
   paralax(e, '.prevew-img img:first-child', 30);
   paralax(e, '.prevew-img img:last-child', 60);
   paralax(e, '.element-1_2', -60);
   paralax(e, '.element-1', -30);
   paralax(e, '.img-element-3', 30);
   paralax(e, '.img-element-4', -30);
   paralax(e, '.elem-2', 30);
    paralax(e, '.elem-3', -30);
    paralax(e, '.elem-4', 10);
    paralax(e, '.img-elem-1', 10);
    paralax(e, '.img-elem-2', 30);
  })

}
///////////////slowlyNav//////////////////
function slowlyNav(goal){
// let target = e.target;
// let goal = $('target').attr('href');
alert(goal);
}
$('ul').on('click', 'a', function(event){
  event.preventDefault();
  let id  = $(this).attr('href'),
    top = ($(id).offset().top);
  $('body,html').animate({scrollTop: top}, 1000);
})
$('.sroll-top').on('click', function(event){
  event.preventDefault();
   // top = $(window).top();
  $('body,html').animate({scrollTop: 0}, 1000);
})
///////////////////////preloader///////////////

function preloader(){
  $(".loader-wrapper").css({
   'opacity': '0'
  }); 
  setTimeout(function(){
   $(".loader-wrapper").css(
       'display','none'
      );
}, 1000)
};
setTimeout(preloader, 0);

/////////

