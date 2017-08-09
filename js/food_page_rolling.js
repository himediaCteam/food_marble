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


});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZm9vZF9wYWdlX3JvbGxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDcuXHJcbiAqL1xyXG5cclxuXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgZnVuY3Rpb24gaW5pdCgpe1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4vL1xyXG4vLyAgICAvL21hcmdpbkN0cmxXcmFwKCk7XHJcbi8vICAgIC8vcGFnaW5nKCk7XHJcbi8vICB9XHJcbi8vXHJcbi8vICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuLy8gIHZhciBuZXh0SW5kZXggPSAwO1xyXG4vLyAgdmFyIHByZXZJbmRleCA9IDA7XHJcbi8vICB2YXIgdGltZUlEO1xyXG4vL1xyXG4vLyAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuLy8gICAgaWYobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbi8vICAgICAgbmV4dEluZGV4ID0gMDtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICAvLyBlcSgp77+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv70g77+91r7vv70g77+91rjvv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73KtO+/ve+/ve+/vSDvv73vv73Equ+/ve+/vcW0XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcbi8vXHJcbi8vICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuLy8gICAgbmV4dEluZGV4Kys7XHJcbi8vICB9XHJcbi8vXHJcbi8vICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuLy8gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuLy8gICAgICBuZXh0SW5kZXggPSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMTtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICBpZiggcHJldkluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aCApe1xyXG4vLyAgICAgIHByZXZJbmRleCA9IDA7XHJcbi8vICAgIH1cclxuLy9cclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQgYW5pJykuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcbi8vXHJcbi8vICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuLy8gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuLy8gICAgbmV4dEluZGV4LS07XHJcbi8vICB9XHJcbi8vXHJcbi8vICBmdW5jdGlvbiBtYXJnaW5DdHJsV3JhcCgpe1xyXG4vL1xyXG4vLyAgICB2YXIgd3JhcFdpZHRoID0gJCgnLmZvb2QtaW1hZ2UtY2lyY2xlJykud2lkdGgoKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtY2lyY2xlJykuY3NzKHtcclxuLy8gICAgICAnbWFyZ2luLWxlZnQnIDogLSggd3JhcFdpZHRoIC8gMiApXHJcbi8vICAgIH0pO1xyXG4vLyAgfVxyXG4vL1xyXG4vLyAgLy9mdW5jdGlvbiBwYWdpbmcoKXtcclxuLy8gIC8vICB2YXIgaW1nTnVtYmVyID0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoO1xyXG4vLyAgLy8gIGZvcih2YXIgaT0wOyBpPGltZ051bWJlcjsgaSsrKXtcclxuLy8gIC8vICAgICQoJy5mb29kLWltYWdlLWNpcmNsZScpLmFwcGVuZCgnPGxpIGNsYXNzPVwiZm9vZC1pbWFnZS1jaXJjbGUtbGVmdFwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmb29kLWltYWdlLWNpcmNsZS1saW5rXCI+JyArIChpKzEpICsgJzwvYT48L2xpPicpO1xyXG4vLyAgLy8gIH1cclxuLy8gIC8vfVxyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgLy8g77+977+977+977+977+977+9XHJcbi8vICBpbml0KCk7XHJcbi8vXHJcbi8vXHJcbi8vICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZvb2QtaW1hZ2UtY2lyY2xlJywgZnVuY3Rpb24oZSl7XHJcbi8vXHJcbi8vXHJcbi8vICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5mb29kLWltYWdlLWNpcmNsZScpO1xyXG4vL1xyXG4vLyAgICBpZiggY3VycmVudEluZGV4ICE9IGluZGV4TnVtYmVyICl7XHJcbi8vXHJcbi8vICAgICAgaWYoIGN1cnJlbnRJbmRleCA9PSAwICl7XHJcbi8vXHJcbi8vICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTEgKXtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuLy8gICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4vLyAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgIH0gZWxzZSBpZiggY3VycmVudEluZGV4ID09ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xICl7XHJcbi8vXHJcbi8vICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gMCApe1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuLy8gICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbi8vICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgfSBlbHNlIHtcclxuLy9cclxuLy8gICAgICAgIGlmKCBjdXJyZW50SW5kZXggPCBpbmRleE51bWJlciApe1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuLy8gICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdsZWZ0Jyk7XHJcbi8vICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgfVxyXG4vL1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICB9KTtcclxuLy99KTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICQoJy5mb29kLWltYWdlLWNpcmNsZS1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5maXN0JykuY3NzKHtcclxuICAgICAgbGVmdCA6IDcxNFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWNpcmNsZS1jZW50ZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5zZWNvbmQnKS5hbmltYXRlKHtcclxuICAgICAgbGVmdCA6IDcxNFxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWNpcmNsZS1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0udGhpcmQnKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGggOiA0NDAsXHJcbiAgICAgIGhlaWdodDogNzE0LFxyXG4gICAgICBsZWZ0IDogNzE0XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv71cclxuICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMCkuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgxKS5jc3Moe2xlZnQgOiA3MTR9KTtcclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMikuY3NzKHtsZWZ0IDogLTcxNH0pO1xyXG4gICAgICBtYXJnaW5DdHJsV3JhcCgpO1xyXG4gICAgICAvL3BhZ2luZygpO1xyXG4gICAgfVxyXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICAgIHZhciB0aW1lSUQ7XHJcbiAgICB2YXIgY2hlY2tJRDtcclxuXHJcbiAgICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gICAgICAvLyDvv73vv73vv73vv73vv73vv70g77+9zLnvv73vv73vv73vv73vv70g77+9zrXvv73vv73vv70g77+9zLjvv70gw7Pvv73vv70g77+9zrXvv73vv73vv70g77+977+9yKPvv73vv70g77+9x7Xvv73vv73vv70g77+977+9LlxyXG4gICAgICBpZihuZXh0SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuICAgICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0Oi00MDB9LCAxMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0OjQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAxMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgbmV4dEluZGV4Kys7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgICBuZXh0SW5kZXggPSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDo0MDB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkuY3NzKHtsZWZ0Oi00MDB9KS5zdG9wKCkuYW5pbWF0ZSh7bGVmdDowfSwgMjAwMCwgJ2Vhc2VPdXRFeHBvJyk7XHJcblxyXG4gICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgIG5leHRJbmRleC0tO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbiAgICAgIHZhciB3cmFwV2lkdGggPSAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1jaXJjbGUnKS53aWR0aCgpO1xyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1jaXJjbGUnKS5jc3Moe1xyXG4gICAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL2Z1bmN0aW9uIHBhZ2luZygpe1xyXG4gICAgLy8gIHZhciBpbWdOdW1iZXIgPSAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGg7XHJcbiAgICAvLyAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG4gICAgLy8gICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtY2lyY2xlJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJmb29kLWltYWdlLWNpcmNsZS1pdGVtXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvb2QtaW1hZ2UtY2lyY2xlLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbiAgICAvLyAgfVxyXG4gICAgLy99XHJcbiAgICBmdW5jdGlvbiBjbGlja1BhZ2luZygpe1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDvv73vv73vv73vv73vv73vv71cclxuICAgIGluaXQoKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZvb2QtaW1hZ2UtY2lyY2xlLWl0ZW0nLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5mb29kLWltYWdlLWNpcmNsZS1pdGVtJyk7XHJcbiAgICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuICAgICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuICAgICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoIGN1cnJlbnRJbmRleCA9PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG4gICAgICAgICAgaWYoIGluZGV4TnVtYmVyID09IDAgKXtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmKCBjdXJyZW50SW5kZXggPCBpbmRleE51bWJlciApe1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gIC8vLy8gY3NzIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gIC8vZnVuY3Rpb24gaW5pdCgpe1xyXG4gIC8vICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgLy8gICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gIC8vICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gIC8vXHJcbiAgLy8gIC8vbWFyZ2luQ3RybFdyYXAoKTtcclxuICAvLyAgLy9wYWdpbmcoKTtcclxuICAvL31cclxuICAvL1xyXG4gIC8vdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgLy92YXIgbmV4dEluZGV4ID0gMDtcclxuICAvL3ZhciBwcmV2SW5kZXggPSAwO1xyXG4gIC8vdmFyIHRpbWVJRDtcclxuICAvL1xyXG4gIC8vZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAvLyAgaWYobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgLy8gICAgbmV4dEluZGV4ID0gMDtcclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuXHJcblxyXG59KTtcclxuIiwiJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAvLyBqUXVlcnkgRE9NIO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73vv73vv73vv73vv73vv73GvFxyXG5cclxuICAgICRpbWFnZVRvcCA6ICQoJy5yZXMtaW1hZ2UtdG9wJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxyXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXHJcblxyXG4gICAgLy8g77+92LTvv70g77+9zrrvv73vv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/ve+/vcO8IO+/ve+/ve+/ve+/ve+/ve+/vca8XHJcblxyXG4gICAgLy9hcmVhV2lkdGggOiAwLFxyXG4gICAgLy9hcmVhSGVpZ2h0IDogMCxcclxuICAgIC8vaW1hZ2VXaWR0aCA6IDAsXHJcbiAgICAvL2ltYWdlSGVpZ2h0IDogMCxcclxuICAgIC8vYXJlYVJhdGlvIDogMCxcclxuICAgIC8vaW1hZ2VSYXRpbyA6IDAsXHJcblxyXG4gICAgLy8g77+92LTvv70g77+9zrrvv73vv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/vd680rXvv71cclxuICAgIC8vIO+/ve+/ve+/ve+/vcWpIO+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFyZWFWYWx1ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g77+9zLnvv73vv73vv70g77+977+977+977+9XHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ2hlaWdodCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gxasg77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+97L26IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv70g77+91Lzvv71cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG4gIC8vIO+/vdS877+9IO+/ve+/ve+/ve+/vVxyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xyXG5cclxuICAvLyDvv73Muu+/vcauIO+/ve+/ve+/ve+/vVxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7Il19
