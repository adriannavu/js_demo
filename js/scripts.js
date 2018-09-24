console.log('scripts loaded');

var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-button');
var content = document.getElementById('content');
var tooltip = document.getElementById('tooltip');
var moreInfo = document.getElementById('moreInfo');

burger.addEventListener('click', function() {
  console.log('burger clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '0.3';
});

closeBtn.addEventListener('click', function() {
  console.log('closeBtn clicked');
  mobileNav.style.width = '0%';
  mobileNav.style.transition = '0.5s ease';
  content.style.opacity = '1';
})

moreInfo.addEventListener('mouseenter', function() {
  console.log('moreInfo hovered over');
  tooltip.style.opacity = '1';
  var x = event.screenX; // Get the horizontal coordinate
  var y = event.screenY; // Get the vertical coorindate
  console.log(x);
  console.log(y);
  tooltip.style.top = (y - 125) + 'px';
  tooltip.style.left = (x - 125) + 'px';
})

moreInfo.addEventListener('mouseleave', function() {
  console.log('moreInfo hovered over');
  tooltip.style.opacity = '0';
})