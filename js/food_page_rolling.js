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

$(function(){

  var calculateRatio = {
    // jQuery DOM 대상을 저장하는 프로퍼티

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

    // 해당 부분의 값을 저장하는 객체 프로퍼티

    //areaWidth : 0,
    //areaHeight : 0,
    //imageWidth : 0,
    //imageHeight : 0,
    //areaRatio : 0,
    //imageRatio : 0,

    // 해당 부분의 값을 계산하는 메소드
    // 마스크 영역 계산
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // 이미지 계산
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // 큰 이미지에 적용
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // 작은 이미지에 적용
    applyThumb : function(){

      this.areaValue();

      for(var i=0; i<this.$imageThumb.length; i++){

        this.imageValue(this.$imageThumb.eq(i));

        if( this.areaRatio > this.imageRatio ){
          this.$imageThumb.eq(i).addClass('full-width');
        } else{
          this.$imageThumb.eq(i).addClass('full-height');
        }
      }
    },
    // 마우스 오버시 이미지 변경 함수
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.res-image-big').attr('src', src);

    }
  };
  // 함수 실행
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // 이벤트 실행
  $('.res-image-bottom-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });

  //$('.res-image-wrap').on('mouseleave', function(){
  //  calculateRatio.changeImage( $('.res-image-bottom-wrap').eq(0) );
  //  calculateRatio.applyBig();
  //});

});
/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  $('.event-list-item-image').on('click', function(){

    function init(){

      $('.event-list-item-image').eq(0).addClass('center');
      $('.event-list-item-image').eq(1).addClass('right100');
      $('.event-list-item-image').eq(2).addClass('right200');
      $('.event-list-item-image').eq(3).addClass('left200');
      $('.event-list-item-image').eq(4).addClass('left100');

    }

    var currentIndex = 0;
    var nextIndex = 0;

    function moveLeft(){
      if(nextIndex >= $('.event-list-item-image').length){
        nextIndex = 0;
      }

      // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
      $('.event-list-item-image').eq(currentIndex-2).removeClass('left200').addClass('right200');
      $('.event-list-item-image').eq(currentIndex-1).removeClass('left100').addClass('left200');
      $('.event-list-item-image').eq(currentIndex).removeClass('center').addClass('left100');
      $('.event-list-item-image').eq(nextIndex).removeClass('right100').addClass('center');
      $('.event-list-item-image').eq(nextIndex+1).removeClass('right200').addClass('right100');

      currentIndex = nextIndex;
      nextIndex++;
    }

    moveLeft();

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA3LlxyXG4gKi9cclxuXHJcblxyXG4vLyQoZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gIGZ1bmN0aW9uIGluaXQoKXtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuLy9cclxuLy8gICAgLy9tYXJnaW5DdHJsV3JhcCgpO1xyXG4vLyAgICAvL3BhZ2luZygpO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbi8vICB2YXIgbmV4dEluZGV4ID0gMDtcclxuLy8gIHZhciBwcmV2SW5kZXggPSAwO1xyXG4vLyAgdmFyIHRpbWVJRDtcclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbi8vICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9IDA7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgLy8gZXEoKe+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+9IO+/vda+77+9IO+/vda477+9IO+/ve+/vSDvv73vv73vv73vv73vv73vv73vv73vv70g77+977+977+9yrTvv73vv73vv70g77+977+9xKrvv73vv73FtFxyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG4vL1xyXG4vLyAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbi8vICAgIG5leHRJbmRleCsrO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcbi8vICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbi8vICAgICAgbmV4dEluZGV4ID0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTE7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGggKXtcclxuLy8gICAgICBwcmV2SW5kZXggPSAwO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKHByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0IGFuaScpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG4vL1xyXG4vLyAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbi8vICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbi8vICAgIG5leHRJbmRleC0tO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuLy9cclxuLy8gICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5mb29kLWltYWdlLWNpcmNsZScpLndpZHRoKCk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWNpcmNsZScpLmNzcyh7XHJcbi8vICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4vLyAgICB9KTtcclxuLy8gIH1cclxuLy9cclxuLy8gIC8vZnVuY3Rpb24gcGFnaW5nKCl7XHJcbi8vICAvLyAgdmFyIGltZ051bWJlciA9ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aDtcclxuLy8gIC8vICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcbi8vICAvLyAgICAkKCcuZm9vZC1pbWFnZS1jaXJjbGUnKS5hcHBlbmQoJzxsaSBjbGFzcz1cImZvb2QtaW1hZ2UtY2lyY2xlLWxlZnRcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9vZC1pbWFnZS1jaXJjbGUtbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuLy8gIC8vICB9XHJcbi8vICAvL31cclxuLy9cclxuLy9cclxuLy9cclxuLy8gIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4vLyAgaW5pdCgpO1xyXG4vL1xyXG4vL1xyXG4vLyAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5mb29kLWltYWdlLWNpcmNsZScsIGZ1bmN0aW9uKGUpe1xyXG4vL1xyXG4vL1xyXG4vLyAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcuZm9vZC1pbWFnZS1jaXJjbGUnKTtcclxuLy9cclxuLy8gICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlciApe1xyXG4vL1xyXG4vLyAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG4vL1xyXG4vLyAgICAgICAgaWYoIGluZGV4TnVtYmVyID09ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xICl7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuLy8gICAgICAgIH1cclxuLy9cclxuLy8gICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG4vL1xyXG4vLyAgICAgICAgaWYoIGluZGV4TnVtYmVyID09IDAgKXtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4vLyAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgIH0gZWxzZSB7XHJcbi8vXHJcbi8vICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbi8vICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4vLyAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgIH1cclxuLy9cclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgfSk7XHJcbi8vfSk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcuZm9vZC1pbWFnZS1jaXJjbGUtbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZmlzdCcpLmNzcyh7XHJcbiAgICAgIGxlZnQgOiA3MTRcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZm9vZC1pbWFnZS1jaXJjbGUtY2VudGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uc2Vjb25kJykuYW5pbWF0ZSh7XHJcbiAgICAgIGxlZnQgOiA3MTRcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuZm9vZC1pbWFnZS1jaXJjbGUtcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLnRoaXJkJykuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoIDogNDQwLFxyXG4gICAgICBoZWlnaHQ6IDcxNCxcclxuICAgICAgbGVmdCA6IDcxNFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy8g77+977+977+977+977+977+9XHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDApLmNzcyh7bGVmdCA6IDB9KTtcclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMSkuY3NzKHtsZWZ0IDogNzE0fSk7XHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDIpLmNzcyh7bGVmdCA6IC03MTR9KTtcclxuICAgICAgbWFyZ2luQ3RybFdyYXAoKTtcclxuICAgICAgLy9wYWdpbmcoKTtcclxuICAgIH1cclxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgICB2YXIgdGltZUlEO1xyXG4gICAgdmFyIGNoZWNrSUQ7XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgICAgLy8g77+977+977+977+977+977+9IO+/vcy577+977+977+977+977+9IO+/vc6177+977+977+9IO+/vcy477+9IMOz77+977+9IO+/vc6177+977+977+9IO+/ve+/vcij77+977+9IO+/vce177+977+977+9IO+/ve+/vS5cclxuICAgICAgaWYobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDotNDAwfSwgMTAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDo0MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMTAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgICAgbmV4dEluZGV4ID0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6NDAwfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLmNzcyh7bGVmdDotNDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgICBuZXh0SW5kZXgtLTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG4gICAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtY2lyY2xlJykud2lkdGgoKTtcclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtY2lyY2xlJykuY3NzKHtcclxuICAgICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9mdW5jdGlvbiBwYWdpbmcoKXtcclxuICAgIC8vICB2YXIgaW1nTnVtYmVyID0gJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoO1xyXG4gICAgLy8gIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuICAgIC8vICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWNpcmNsZScpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZm9vZC1pbWFnZS1jaXJjbGUtaXRlbVwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmb29kLWltYWdlLWNpcmNsZS1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG4gICAgLy8gIH1cclxuICAgIC8vfVxyXG4gICAgZnVuY3Rpb24gY2xpY2tQYWdpbmcoKXtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g77+977+977+977+977+977+9XHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5mb29kLWltYWdlLWNpcmNsZS1pdGVtJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgaW5kZXhOdW1iZXIgPSAkKHRoaXMpLmluZGV4KCcuZm9vZC1pbWFnZS1jaXJjbGUtaXRlbScpO1xyXG4gICAgICBpZiggY3VycmVudEluZGV4ICE9IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcbiAgICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTEgKXtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTEgKXtcclxuICAgICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiggY3VycmVudEluZGV4IDwgaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAvLy8vIGNzcyDvv73vv73vv73vv73vv73vv71cclxuICAvL2Z1bmN0aW9uIGluaXQoKXtcclxuICAvLyAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gIC8vICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAvLyAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICAvL1xyXG4gIC8vICAvL21hcmdpbkN0cmxXcmFwKCk7XHJcbiAgLy8gIC8vcGFnaW5nKCk7XHJcbiAgLy99XHJcbiAgLy9cclxuICAvL3ZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIC8vdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgLy92YXIgcHJldkluZGV4ID0gMDtcclxuICAvL3ZhciB0aW1lSUQ7XHJcbiAgLy9cclxuICAvL2Z1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgLy8gIGlmKG5leHRJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgpe1xyXG4gIC8vICAgIG5leHRJbmRleCA9IDA7XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vXHJcblxyXG5cclxufSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDvv73vv73vv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAkaW1hZ2VUb3AgOiAkKCcucmVzLWltYWdlLXRvcCcpLFxyXG4gICAgJGltYWdlQmlnIDogJCgnLnJlcy1pbWFnZS1iaWcnKSxcclxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxyXG5cclxuICAgIC8vIO+/vdi077+9IO+/vc6677+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73vv73DvCDvv73vv73vv73vv73vv73vv73GvFxyXG5cclxuICAgIC8vYXJlYVdpZHRoIDogMCxcclxuICAgIC8vYXJlYUhlaWdodCA6IDAsXHJcbiAgICAvL2ltYWdlV2lkdGggOiAwLFxyXG4gICAgLy9pbWFnZUhlaWdodCA6IDAsXHJcbiAgICAvL2FyZWFSYXRpbyA6IDAsXHJcbiAgICAvL2ltYWdlUmF0aW8gOiAwLFxyXG5cclxuICAgIC8vIO+/vdi077+9IO+/vc6677+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73evNK177+9XHJcbiAgICAvLyDvv73vv73vv73vv73FqSDvv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgaW1hZ2VWYWx1ZSA6IGZ1bmN0aW9uKCAkaW1hZ2UgKXtcclxuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIMWrIO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xyXG4gICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC1oZWlnaHQnKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLXdpZHRoJykuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73vv70g77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/vey9uiDvv73vv73vv73vv73vv73vv70g77+9zLnvv73vv73vv70g77+977+977+977+9IO+/vdS877+9XHJcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnJykuYXR0cignc3JjJywgc3JjKTtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyDvv73UvO+/vSDvv73vv73vv73vv71cclxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5VGh1bWIoKTtcclxuXHJcbiAgLy8g77+9zLrvv73GriDvv73vv73vv73vv71cclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuICAvLyQoJy5yZXMtaW1hZ2Utd3JhcCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAvLyAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5lcSgwKSApO1xyXG4gIC8vICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIC8vfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSgyKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKDMpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlcSgp77+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv70g77+91r7vv70g77+91rjvv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73KtO+/ve+/ve+/vSDvv73vv73Equ+/ve+/vcW0XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMikucmVtb3ZlQ2xhc3MoJ2xlZnQyMDAnKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCcpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXInKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAnKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShuZXh0SW5kZXgrMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MjAwJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcblxyXG4gICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
