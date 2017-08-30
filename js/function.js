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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpIHtcclxuXHJcbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrTso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt65CoXHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0IGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmIChuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXg9JCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykubGVuZ3RoICl7XHJcbiAgICAgIHByZXZJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XHJcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgcHJldkluZGV4ID0gY3VycmVudEluZGV4KzE7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuXHJcbiAgfVxyXG5cclxuICAvLyDtkbjrk5wg7Y6Y7J207KeAIOyVhOydtOy9mCDsiqzrnbzsnbTrlKlcclxuICAkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmZvb2QtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyIHBhZ2VJbmRleCA9ICQodGhpcykuaW5kZXgoJ2Zvb2QtaWNvbicpO1xyXG5cclxuICAgICAgJCgnLmZvb2QtaWNvbj5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQoJy5mb29kLWljb24nKS5lcShwYWdlSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAkKCcuZm9vZC1wYWdlJykucmVtb3ZlXHJcbiAgICB9KVxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3ctcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgIG1vdmVMZWZ0KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBtb3ZlUmlnaHQoKTtcclxuICB9KTtcclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDrjIDsg4HsnYQg7KCA7J6l7ZWY64qUIO2UhOuhnO2NvO2LsFxyXG5cclxuICAgICRpbWFnZVRvcCA6ICQoJy5yZXMtaW1hZ2UtdG9wJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxyXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXHJcblxyXG4gICAgLy8g7ZW064u5IOu2gOu2hOydmCDqsJLsnYQg6rOE7IKw7ZWY64qUIOuplOyGjOuTnFxyXG4gICAgLy8g66eI7Iqk7YGsIOyYgeyXrSDqs4TsgrBcclxuICAgIGFyZWFWYWx1ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g7J2066+47KeAIOqzhOyCsFxyXG4gICAgaW1hZ2VWYWx1ZSA6IGZ1bmN0aW9uKCAkaW1hZ2UgKXtcclxuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIO2BsCDsnbTrr7jsp4Dsl5Ag7KCB7JqpXHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOyekeydgCDsnbTrr7jsp4Dsl5Ag7KCB7JqpXHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOuniOyasOyKpCDsmKTrsoTsi5wg7J2066+47KeAIOuzgOqyvSDtlajsiJhcclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VJbWFnZTIgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjMiA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcyJykuYXR0cignc3JjJywgc3JjMik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuICAvLyDtlajsiJgg7Iuk7ZaJXHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XHJcblxyXG4gIC8vIOydtOuypO2KuCDsi6TtlolcclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy9jYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAvLyDshKDslrjrtoBcblxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcbiAgdmFyIG5leHRJbmRleCA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdCgpe1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDQpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xuXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgpe1xuICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja0IOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3si5ztgrRcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQxMDAgYW5pJyk7XG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICBuZXh0SW5kZXgrKztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xuXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcbiAgICAgIG5leHRJbmRleCA9ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgtMTtcbiAgICB9XG5cbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4LTEpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICBuZXh0SW5kZXgtLTtcbiAgfVxuXG4gIGluaXQoKTtcblxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xuXG4gICAgdmFyIGRpciA9IGRpcmVjdGlvbjtcblxuICAgIGlmKCBkaXIgPT0gJ3JpZ2h0JyApe1xuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgIG1vdmVMZWZ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgICBtb3ZlUmlnaHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmV2ZW50LWFycm93LXdyYXAyLicgKyBkaXIpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgLy8g7J6s6reA7ZWo7IiYXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGFjdGl2ZUNsaWNrKGRpcik7XG4gICAgICB9KTtcblxuICAgIH0sIDEwMDApO1xuXG4gIH07XG5cbiAgLy8g7Iuk7ZaJ67aAXG5cbiAgJCgnLmV2ZW50LWFycm93LXdyYXAyLnJpZ2h0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcblxuICB9KTtcblxuICAkKCcuZXZlbnQtYXJyb3ctd3JhcDIubGVmdCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcblxuICB9KTtcblxufSk7Il19
