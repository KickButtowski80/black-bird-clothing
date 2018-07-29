$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.logo').css({
      'transform' : 'translate(0px, ' + wScroll / 2 +  '%)'
    });
    $('.back-bird').css({
      'transform' : 'translate(0px, ' + wScroll / 4 +  '%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -' + wScroll / 40 +  '%)'
    });

    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2) ){
      $('.clothes-pics .row .col-md-4').each(function(i){
        setTimeout(function(){
            $('.clothes-pics .row .col-md-4').eq(i).addClass('is-showing');
        }, 150 *( i+1));

      })
    }

    if (wScroll > $('.about-me').offset().top - $(window).height()) {
       $('.about-me').css('background-position',"center "+  wScroll - ($('.about-me').offset().top )  +"px");
       var opacity = wScroll- ($('.about-me').offset().top  - 800 )    ;
       $('.window-tint').css('opacity', opacity);
    }

      if (wScroll > $('.blog-posts').offset().top - $(window).height()) {
          var offset1 =Math.min(0,wScroll - $('.blog-posts').offset().top + $(window).height()-300);

          $('.post-1').css("transform" , "translate("+ offset1 + "px , 0px)");
          $('.post-2').css("transform" , "translateY("+ offset1 + "px)");
          $('.post-4').css("transform" , "translate("+ Math.abs(offset1) + "px , 0px)");

      }
});
