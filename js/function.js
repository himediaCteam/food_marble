$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;


  function init(){
    $('.food-image-list-item.fs1').eq(0).addClass('center');
    $('.food-image-list-item.fs1').eq(1).addClass('right');
    $('.food-image-list-item.fs1').eq(2).addClass('left');
    $('.food-image-list-item.fs2').eq(0).addClass('center');
    $('.food-image-list-item.fs2').eq(1).addClass('right');
    $('.food-image-list-item.fs2').eq(2).addClass('left');
    $('.food-image-list-item.fs3').eq(0).addClass('center');
    $('.food-image-list-item.fs3').eq(1).addClass('right');
    $('.food-image-list-item.fs3').eq(2).addClass('left');
  }


  function moveLeft1() {

    if (nextIndex >= $('.food-image-list-item.fs1').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs1').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs1').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs1').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveLeft2() {

    if (nextIndex >= $('.food-image-list-item.fs2').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs2').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs2').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs2').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveLeft3() {

    if (nextIndex >= $('.food-image-list-item.fs3').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs3').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs3').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs3').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }


  function moveRight1(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs1').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs1').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs1').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs1').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs1').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  function moveRight2(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs2').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs2').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs2').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs2').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs2').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  function moveRight3(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs3').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs3').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs3').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs3').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs3').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  // 푸드 페이지 아이콘 슬라이딩
  $(function(){

    $('.food-icon').on('click', function(e){

      e.preventDefault();

      var pageIndex = ( $(this).index('.food-icon') % 3 );

      console.log(pageIndex);

      $('.food-icon>a').removeClass('on');
      $('.food-icon').eq(pageIndex).children('a').addClass('on');

      $('.food-page').removeClass('on');
      $('.food-page').eq(pageIndex).addClass('on');
    })

  });



  // 실행부
  init();

  $('.food-image-list-arrow.s1.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft1();
  });
  $('.food-image-list-arrow.s2.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft2();
  });
  $('.food-image-list-arrow.s3.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft3();
  });

  $('.food-image-list-arrow.s1.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight1();
  });
  $('.food-image-list-arrow2.s2.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight2();
  });
  $('.food-image-list-arrow3.s3.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight3();
  });

});
$(function(){

  var calculateRatio = {
    // jQuery DOM 대상을 저장하는 프로퍼티

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

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
    },

    changeImage2 : function( $overImage ){
      var src2 = $overImage.children().attr('src');
      $('.res-image-big2').attr('src', src2);

    }


  };
  // 함수 실행
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // 이벤트 실행
  $('.res-image-bottom-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    //calculateRatio.changeImage2( $(this) );
    calculateRatio.applyBig();
  });

  $('.res-image-bottom-wrap2').on('click', function(){
    //calculateRatio.changeImage( $(this) );
    calculateRatio.changeImage2( $(this) );
    calculateRatio.applyBig();

  });



});


/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;

  function init(){
    $('.event-list-item').eq(0).addClass('center');
    $('.event-list-item').eq(1).addClass('right100');
    $('.event-list-item').eq(2).addClass('right100');
    $('.event-list-item').eq(3).addClass('right100');
    $('.event-list-item').eq(4).addClass('left100');
  }

  function moveLeft(){

    if(nextIndex >= $('.event-list-item').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.event-list-item').eq(currentIndex-1).removeClass('left100 ani').addClass('right100');
    $('.event-list-item').eq(currentIndex).removeClass('center ani').addClass('left100 ani');
    $('.event-list-item').eq(nextIndex).removeClass('right100').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.event-list-item').length-1;
    }

    $('.event-list-item').eq(nextIndex-1).removeClass('right100 ani').addClass('left100');
    $('.event-list-item').eq(currentIndex).removeClass('center ani').addClass('right100 ani');
    $('.event-list-item').eq(nextIndex).removeClass('left100').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex--;
  }

  init();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      moveRight();
    }

    var $selector = $('.event-arrow-wrap2.' + dir);

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

    }, 1000);

  };

  // 실행부

  $('.event-arrow-wrap2.right').one('click', function(){

    activeClick('right');

  });

  $('.event-arrow-wrap2.left').one('click', function(){

    activeClick('left');

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xuXG4gIC8vIOyEoOyWuOu2gFxuXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgdmFyIHByZXZJbmRleCA9IDA7XG5cblxuICBmdW5jdGlvbiBpbml0KCl7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMyJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMycpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMzJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMycpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0MSgpIHtcblxuICAgIGlmIChuZXh0SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmxlbmd0aCl7XG4gICAgICBuZXh0SW5kZXggPSAwO1xuICAgIH1cblxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrTso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt65CoXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XG5cbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgbmV4dEluZGV4Kys7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlTGVmdDIoKSB7XG5cbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczInKS5sZW5ndGgpe1xuICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja07KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reuQqFxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczInKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMyJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgIG5leHRJbmRleCsrO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUxlZnQzKCkge1xuXG4gICAgaWYgKG5leHRJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMzJykubGVuZ3RoKXtcbiAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3rkKhcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMzJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0IGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczMnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQgYW5pJyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMycpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICBuZXh0SW5kZXgrKztcbiAgfVxuXG5cbiAgZnVuY3Rpb24gbW92ZVJpZ2h0MSgpe1xuXG4gICAgaWYgKG5leHRJbmRleCA8PSAtMSl7XG4gICAgICBuZXh0SW5kZXg9JCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmxlbmd0aC0xO1xuICAgIH1cbiAgICBpZiggcHJldkluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5sZW5ndGggKXtcbiAgICAgIHByZXZJbmRleCA9IDA7XG4gICAgfVxuXG5cbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQgYW5pJykuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XG5cbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4KzE7XG4gICAgbmV4dEluZGV4LS07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVSaWdodDIoKXtcblxuICAgIGlmIChuZXh0SW5kZXggPD0gLTEpe1xuICAgICAgbmV4dEluZGV4PSQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczInKS5sZW5ndGgtMTtcbiAgICB9XG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMyJykubGVuZ3RoICl7XG4gICAgICBwcmV2SW5kZXggPSAwO1xuICAgIH1cblxuXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKHByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0IGFuaScpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMicpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCsxO1xuICAgIG5leHRJbmRleC0tO1xuXG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlUmlnaHQzKCl7XG5cbiAgICBpZiAobmV4dEluZGV4IDw9IC0xKXtcbiAgICAgIG5leHRJbmRleD0kKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMzJykubGVuZ3RoLTE7XG4gICAgfVxuICAgIGlmKCBwcmV2SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMycpLmxlbmd0aCApe1xuICAgICAgcHJldkluZGV4ID0gMDtcbiAgICB9XG5cblxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczMnKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczMnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0IGFuaScpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczMnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXgrMTtcbiAgICBuZXh0SW5kZXgtLTtcblxuICB9XG5cbiAgLy8g7ZG465OcIO2OmOydtOyngCDslYTsnbTsvZgg7Iqs65287J2065SpXG4gICQoZnVuY3Rpb24oKXtcblxuICAgICQoJy5mb29kLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgcGFnZUluZGV4ID0gKCAkKHRoaXMpLmluZGV4KCcuZm9vZC1pY29uJykgJSAzICk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHBhZ2VJbmRleCk7XG5cbiAgICAgICQoJy5mb29kLWljb24+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgJCgnLmZvb2QtaWNvbicpLmVxKHBhZ2VJbmRleCkuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnb24nKTtcblxuICAgICAgJCgnLmZvb2QtcGFnZScpLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgJCgnLmZvb2QtcGFnZScpLmVxKHBhZ2VJbmRleCkuYWRkQ2xhc3MoJ29uJyk7XG4gICAgfSlcblxuICB9KTtcblxuXG5cbiAgLy8g7Iuk7ZaJ67aAXG4gIGluaXQoKTtcblxuICAkKCcuZm9vZC1pbWFnZS1saXN0LWFycm93LnMxLnJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIG1vdmVMZWZ0MSgpO1xuICB9KTtcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdy5zMi5yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICBtb3ZlTGVmdDIoKTtcbiAgfSk7XG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3cuczMucmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgbW92ZUxlZnQzKCk7XG4gIH0pO1xuXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3cuczEubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgbW92ZVJpZ2h0MSgpO1xuICB9KTtcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdzIuczIubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgbW92ZVJpZ2h0MigpO1xuICB9KTtcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdzMuczMubGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgbW92ZVJpZ2h0MygpO1xuICB9KTtcblxufSk7IiwiJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAvLyBqUXVlcnkgRE9NIOuMgOyDgeydhCDsoIDsnqXtlZjripQg7ZSE66Gc7Y287YuwXHJcblxyXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcclxuICAgICRpbWFnZUJpZyA6ICQoJy5yZXMtaW1hZ2UtYmlnJyksXHJcbiAgICAkaW1hZ2VUaHVtYiA6ICQoJy5pbWFnZS10aHVtYm5haWwnKSxcclxuXHJcbiAgICAvLyDtlbTri7kg67aA67aE7J2YIOqwkuydhCDqs4TsgrDtlZjripQg66mU7IaM65OcXHJcbiAgICAvLyDrp4jsiqTtgawg7JiB7JetIOqzhOyCsFxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmFyZWFIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDsnbTrr7jsp4Ag6rOE7IKwXHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ2hlaWdodCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g7YGwIOydtOuvuOyngOyXkCDsoIHsmqlcclxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g7J6R7J2AIOydtOuvuOyngOyXkCDsoIHsmqlcclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g66eI7Jqw7IqkIOyYpOuyhOyLnCDsnbTrr7jsp4Ag67OA6rK9IO2VqOyImFxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZycpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUltYWdlMiA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMyID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZzInKS5hdHRyKCdzcmMnLCBzcmMyKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9O1xyXG4gIC8vIO2VqOyImCDsi6TtlolcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5VGh1bWIoKTtcclxuXHJcbiAgLy8g7J2067Kk7Yq4IOyLpO2WiVxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIC8vY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZTIoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgzKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleC0xKS5yZW1vdmVDbGFzcygncmlnaHQxMDAgYW5pJykuYWRkQ2xhc3MoJ2xlZnQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQxMDAnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpciA9PSAncmlnaHQnICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmV2ZW50LWFycm93LXdyYXAyLicgKyBkaXIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7J6s6reA7ZWo7IiYXHJcbiAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwMi5yaWdodCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmV2ZW50LWFycm93LXdyYXAyLmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
