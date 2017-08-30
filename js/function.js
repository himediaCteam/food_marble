$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;


  function init(){
    $('.food-image-list-item.fs1').eq(0).addClass('center');
    $('.food-image-list-item.fs1').eq(1).addClass('right');
    $('.food-image-list-item.fs1').eq(2).addClass('left');
  }


  function moveLeft() {

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
  function moveRight(){

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

  // 푸드 페이지 아이콘 슬라이딩
  $(function(){

    $('.food-icon').on('click', function(e){

      e.preventDefault();

      var pageIndex = $(this).index('food-icon');

      $('.food-icon>a').removeClass('on');
      $('.food-icon').eq(pageIndex).children('a').addClass('on');

      $('.food-page').remove
    })

  });



  // 실행부
  init();

  $('.food-image-list-arrow-right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft();
  });

  $('.food-image-list-arrow-left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpIHtcclxuXHJcbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrTso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt65CoXHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0IGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmIChuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXg9JCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykubGVuZ3RoICl7XHJcbiAgICAgIHByZXZJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4KzE7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyDtkbjrk5wg7Y6Y7J207KeAIOyVhOydtOy9mCDsiqzrnbzsnbTrlKlcclxuICAkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmZvb2QtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyIHBhZ2VJbmRleCA9ICQodGhpcykuaW5kZXgoJ2Zvb2QtaWNvbicpO1xyXG5cclxuICAgICAgJCgnLmZvb2QtaWNvbj5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5mb29kLWljb24nKS5lcShwYWdlSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAkKCcuZm9vZC1wYWdlJykucmVtb3ZlXHJcbiAgICB9KVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIG1vdmVMZWZ0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBtb3ZlUmlnaHQoKTtcclxuICB9KTtcclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcblxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XG4gICAgLy8galF1ZXJ5IERPTSDrjIDsg4HsnYQg7KCA7J6l7ZWY64qUIO2UhOuhnO2NvO2LsFxuXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxuXG4gICAgLy8g7ZW064u5IOu2gOu2hOydmCDqsJLsnYQg6rOE7IKw7ZWY64qUIOuplOyGjOuTnFxuICAgIC8vIOuniOyKpO2BrCDsmIHsl60g6rOE7IKwXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcbiAgICB9LFxuICAgIC8vIOydtOuvuOyngCDqs4TsgrBcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XG4gICAgfSxcbiAgICAvLyDtgbAg7J2066+47KeA7JeQIOyggeyaqVxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8g7J6R7J2AIOydtOuvuOyngOyXkCDsoIHsmqlcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcblxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcblxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xuXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOuniOyasOyKpCDsmKTrsoTsi5wg7J2066+47KeAIOuzgOqyvSDtlajsiJhcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VJbWFnZTIgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xuICAgICAgdmFyIHNyYzIgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XG4gICAgICAkKCcucmVzLWltYWdlLWJpZzInKS5hdHRyKCdzcmMnLCBzcmMyKTtcblxuICAgIH1cblxuXG4gIH07XG4gIC8vIO2VqOyImCDsi6TtlolcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xuXG4gIC8vIOydtOuypO2KuCDsi6TtlolcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XG4gIH0pO1xuXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcblxuICB9KTtcblxuXG5cbn0pO1xuXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoNCkuYWRkQ2xhc3MoJ2xlZnQxMDAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrQg7KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reyLnO2CtFxyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCBhbmknKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQxMDAgYW5pJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmKCBkaXIgPT0gJ3JpZ2h0JyApe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5ldmVudC1hcnJvdy13cmFwMi4nICsgZGlyKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyerOq3gO2VqOyImFxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICAkKCcuZXZlbnQtYXJyb3ctd3JhcDIucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwMi5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
