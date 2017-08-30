/**
 * Created by Administrator on 2017-08-30.
 */

$(function(){

  $(window).scroll(function(){

    if( $(this).scrollTop() > 690 ){
      $('.gnb-tab').css({

        position : 'fixed',
        top : 0

      });
    } else {
      $('.gnb-tab').css({

        position : 'absolute',
        top : 687

      });
    }

  });

});