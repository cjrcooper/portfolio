$(document).ready(function(){


  $('.name-tag-line').fadeIn(1000)
  $('.skills, nav').fadeIn(2000);

<<<<<<< HEAD
=======


>>>>>>> ca150c0331babdd64613d09dc70e521ab8baff72
  var bodyHeight = $('body').height();
  var sectionHeight = bodyHeight/4;
  console.log(sectionHeight)

<<<<<<< HEAD
  $('#scroll').on('click', function(){
    $("html, body").animate({
      scrollTop: sectionHeight + 'px'
    });
  });

=======
>>>>>>> ca150c0331babdd64613d09dc70e521ab8baff72

  $('.about').on('click', function(){
    $("html, body").animate({
      scrollTop: sectionHeight + 'px'
    });
  })

  $('.interests').on('click', function(){
    $("html, body").animate({
      scrollTop: (sectionHeight*2) + 'px'
    });
  })

  $('.contact').on('click', function(){
    $("html, body").animate({
      scrollTop: bodyHeight + 'px'
    });
  })
});
<<<<<<< HEAD





$(document).ready(function(){


  var y = function(){
      TweenMax.to('.st1', 2 , {opacity:1});
      TweenMax.to('.st3', 2 , {opacity:1});
      TweenMax.to('.triangle', 2, {opacity:1}).delay(1);
      TweenMax.to('.thickLine', 2, {opacity:1}).delay(1);
      TweenMax.to('.main-container', 2, {opacity:1}).delay(1);
      TweenMax.to('.home, .about, .interests, .contact', 2, {opacity:1}).delay(1);

    };

var x = function(){
  TweenMax.to('#slashLine', 2 , {rotation:360, onComplete: y})
};

x();


  // var winWidth = $(window).width();
  //
  // var resize
  // if (winWidth <= 480) {
  //   $('.sml-4').insertAfter('.sml-3');
  //   $('.sml-3').insertBefore('.sml-5');
  // } else {
  //   $('.sml-4').insertBefore('.sml-5');
  //   $('.sml-3').insertBefore('.about-sml-container-br');
  // }
});
=======
>>>>>>> ca150c0331babdd64613d09dc70e521ab8baff72
