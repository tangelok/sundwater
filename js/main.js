/* ----------------------------------------
Buttons
------------------------------------------- */
$('#read-more-problem').on('click', function () {
     window.location.href="problem.html"
  });
$('#read-more-solution').on('click', function () {
     window.location.href="solution.html"
  });
$('#read-more-about').on('click', function () {
     window.location.href="about.html"
  });


  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }



  /* ----------------------------------------
  Responsive Design
  ------------------------------------------- */
  $('.hamburger').on('click', function (){
    $('.side-nav').toggleClass('open');
  });
  $('.exit').on('click', function(){
    $('.side-nav').removeClass('open');
  });


  /* ----------------------------------------
  Animation
  ------------------------------------------- */

  // $(window).on('scroll', function () {
  // var distanceScrolled = $(window).scrollTop();
  //
  // console.log('The distance scrolled is: ' + distanceScrolled);
  //  if (distanceScrolled>=85) {
  // 	 $('.home-problem-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.home-problem-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=520) {
  //   $('.home-stats').fadeIn(750);
  //  }
  //  else {
  //   $('.home-stats').fadeOut(750);
  //  }
  //  if (distanceScrolled>=850) {
  //   $('.home-solution-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.home-solution-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=1460) {
  //   $('.home-description-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.home-description-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=1875) {
  //   $('.faq-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.faq-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=2420) {
  //   $('.newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.newsletter').fadeOut(750);
  //  }
  //  if (distanceScrolled>=245) {
  //   $('.problem-main-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.problem-main-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=420) {
  //   $('.problem-stats-wrapper-1').fadeIn(750);
  //  }
  //  else {
  //   $('.problem-stats-wrapper-1').fadeOut(750);
  //  }
  //  if (distanceScrolled>=850) {
  //   $('.problem-description-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.problem-description-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=1270) {
  //   $('.problem-stats-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.problem-stats-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=1600) {
  //   $('.problem-newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.problem-newsletter').fadeOut(750);
  //  }
  //  if (distanceScrolled>=5) {
  //   $('.solution-main-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.solution-main-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=360) {
  //   $('.solution-description-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.solution-description-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=770) {
  //   $('.solution-impact-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.solution-impact-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=1180) {
  //   $('.solution-stats-wrapper').fadeIn(750);
  //  }
  //  else {
  //   $('.solution-stats-wrapper').fadeOut(750);
  //  }
  //  if (distanceScrolled>=2420) {
  //   $('.solution-newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.solution-newsletter').fadeOut(750);
  //  }
  //  if (distanceScrolled>=540) {
  //   $('.about-principles-img').fadeIn(750);
  //  }
  //  else {
  //   $('.about-principles-img').fadeOut(750);
  //  }
  //  if (distanceScrolled>=890) {
  //   $('.about-newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.about-newsletter').fadeOut(750);
  //  }
  //  if (distanceScrolled>=130) {
  //   $('.news-main-row').fadeIn(750);
  //  }
  //  else {
  //   $('.news-main-row').fadeOut(750);
  //  }
  //  if (distanceScrolled>=910) {
  //   $('.news-newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.news-newsletter').fadeOut(750);
  //  }
  //  if (distanceScrolled>=130) {
  //   $('.contact-main').fadeIn(750);
  //  }
  //  else {
  //   $('.contact-main').fadeOut(750);
  //  }
  //  if (distanceScrolled>=920) {
  //   $('.contact-newsletter').fadeIn(750);
  //  }
  //  else {
  //   $('.contact-newsletter').fadeOut(750);
  //  }
  // });
