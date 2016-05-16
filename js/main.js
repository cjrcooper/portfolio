$(document).ready(function(){


  $('.name-tag-line').fadeIn(1000)
  $('.skills, nav').fadeIn(2000);



  var bodyHeight = $('body').height();
  var sectionHeight = bodyHeight/4;
  console.log(sectionHeight)


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
