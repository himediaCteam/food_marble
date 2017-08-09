/**
 * Created by Administrator on 2017-08-07.
 */


//$(function(){
//
//  function init(){
//    $('.food-image-list-item').eq(0).addClass('center');
//    $('.food-image-list-item').eq(1).addClass('right');
//    $('.food-image-list-item').eq(2).addClass('left');
//
//    //marginCtrlWrap();
//    //paging();
//  }
//
//  var currentIndex = 0;
//  var nextIndex = 0;
//  var prevIndex = 0;
//  var timeID;
//
//  function moveLeft(){
//    if(nextIndex >= $('.food-image-list-item').length){
//      nextIndex = 0;
//    }
//
//    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
//    $('.food-image-list-item').eq(currentIndex-1).removeClass('left ani').addClass('right');
//    $('.food-image-list-item').eq(currentIndex).removeClass('center ani').addClass('left ani');
//    $('.food-image-list-item').eq(nextIndex).removeClass('right').addClass('center ani');
//
//    currentIndex = nextIndex;
//    nextIndex++;
//  }
//
//  function moveRight(){
//    if(nextIndex <= -1){
//      nextIndex = $('.food-image-list-item').length-1;
//    }
//
//    if( prevIndex >= $('.food-image-list-item').length ){
//      prevIndex = 0;
//    }
//
//    $('.food-image-list-item').eq(prevIndex).removeClass('right ani').addClass('left');
//    $('.food-image-list-item').eq(currentIndex).removeClass('center ani').addClass('right ani');
//    $('.food-image-list-item').eq(nextIndex).removeClass('left').addClass('center ani');
//
//    currentIndex = nextIndex;
//    prevIndex = currentIndex + 1;
//    nextIndex--;
//  }
//
//  function marginCtrlWrap(){
//
//    var wrapWidth = $('.food-image-circle').width();
//    $('.food-image-circle').css({
//      'margin-left' : -( wrapWidth / 2 )
//    });
//  }
//
//  //function paging(){
//  //  var imgNumber = $('.food-image-list-item').length;
//  //  for(var i=0; i<imgNumber; i++){
//  //    $('.food-image-circle').append('<li class="food-image-circle-left"><a href="#" class="food-image-circle-link">' + (i+1) + '</a></li>');
//  //  }
//  //}
//
//
//
//  // 실행부
//  init();
//
//
//  $(document).on('click', '.food-image-circle', function(e){
//
//
//    var indexNumber = $(this).index('.food-image-circle');
//
//    if( currentIndex != indexNumber ){
//
//      if( currentIndex == 0 ){
//
//        if( indexNumber == $('.food-image-list-item').length-1 ){
//          activeClick('left');
//        } else {
//          activeClick('right');
//        }
//
//      } else if( currentIndex == $('.food-image-list-item').length-1 ){
//
//        if( indexNumber == 0 ){
//          activeClick('right');
//        } else {
//          activeClick('left');
//        }
//
//      } else {
//
//        if( currentIndex < indexNumber ){
//          activeClick('right');
//        } else {
//          activeClick('left');
//        }
//
//      }
//
//    }
//
//  });
//});




$(function(){


  $('.food-image-circle-left').on('click', function(){
    $('.food-image-list-item.fist').css({
      left : 714
    });
  });

  $('.food-image-circle-center').on('click', function(){

    $('.food-image-list-item.second').animate({
      left : 714
    }, 1000);
  });

  $('.food-image-circle-right').on('click', function(){
    $('.food-image-list-item.third').animate({
      width : 440,
      height: 714,
      left : 714
    });
  });


  $(function(){

    // 선언부
    function init(){
      $('.food-image .food-image-list-item').eq(0).css({left : 0});
      $('.food-image .food-image-list-item').eq(1).css({left : 714});
      $('.food-image .food-image-list-item').eq(2).css({left : -714});
      marginCtrlWrap();
      //paging();
    }
    var currentIndex = 0;
    var nextIndex = 0;
    var timeID;
    var checkID;

    function moveLeft(){
      // 마지막 이미지의 인덱스 이면 처음 인덱스 번호로 되돌려 줌.
      if(nextIndex >= $('.food-image .food-image-list-item').length){
        nextIndex = 0;
      }

      $('.food-image .food-image-list-item').eq(currentIndex).stop().animate({left:-400}, 1000, 'easeOutExpo');

      $('.food-image .food-image-list-item').eq(nextIndex).css({left:400}).stop().animate({left:0}, 1000, 'easeOutExpo');

      currentIndex = nextIndex;
      nextIndex++;
    }


    function moveRight(){

      if(nextIndex <= -1){
        nextIndex = $('.food-image-list-item').length-1;
      }

      $('.food-image .food-image-list-item').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutExpo');

      $('.food-image .food-image-list-item').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutExpo');

      currentIndex = nextIndex;
      nextIndex--;
    }

    function marginCtrlWrap(){
      var wrapWidth = $('.food-image .food-image-circle').width();
      $('.food-image .food-image-circle').css({
        'margin-left' : -( wrapWidth / 2 )
      });
    }
    //function paging(){
    //  var imgNumber = $('.food-image .food-image-list-item').length;
    //  for(var i=0; i<imgNumber; i++){
    //    $('.food-image .food-image-circle').append('<li class="food-image-circle-item"><a href="#" class="food-image-circle-link">' + (i+1) + '</a></li>');
    //  }
    //}
    function clickPaging(){
    }


    // 실행부
    init();

    $(document).on('click', '.food-image-circle-item', function(e){

      e.preventDefault();

      var indexNumber = $(this).index('.food-image-circle-item');
      if( currentIndex != indexNumber ){
        if( currentIndex == 0 ){
          if( indexNumber == $('.food-image-list-item').length-1 ){
            nextIndex = currentIndex - 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveRight();
            }
          } else {
            nextIndex = currentIndex + 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveLeft();
            }
          }
        } else if( currentIndex == $('.food-image-list-item').length-1 ){
          if( indexNumber == 0 ){
            nextIndex = currentIndex + 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveLeft();
            }
          } else {
            nextIndex = currentIndex - 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveRight();
            }
          }
        } else {
          if( currentIndex < indexNumber ){
            nextIndex = currentIndex + 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveLeft();
            }
          } else {
            nextIndex = currentIndex - 1;
            if( !$('.food-image-list-item').is(':animated') ){
              moveRight();
            }
          }
        }
      }
    });


  });




  //// css 선언부
  //function init(){
  //  $('.food-image-list-item').eq(0).addClass('center');
  //  $('.food-image-list-item').eq(1).addClass('right');
  //  $('.food-image-list-item').eq(2).addClass('left');
  //
  //  //marginCtrlWrap();
  //  //paging();
  //}
  //
  //var currentIndex = 0;
  //var nextIndex = 0;
  //var prevIndex = 0;
  //var timeID;
  //
  //function moveLeft(){
  //  if(nextIndex >= $('.food-image-list-item').length){
  //    nextIndex = 0;
  //
  //
  //


});
