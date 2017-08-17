$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 1;
  var prevIndex = 0;

  function init(){
    $('.food-image-list-item').eq(0).addClass('center');
    $('.food-image-list-item').eq(1).addClass('right');
    $('.food-image-list-item').eq(2).addClass('left');
  }


  function moveLeft() {

    if (nextIndex >= $('.food-image-list-item').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  // 실행부
  init();

  $('.food-image-list').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft();
  });
  //
  //$('.food-image-circle').on('click', function(){
  //
  //  nextIndex = currentIndex - 1;
  //  moveRight();
  //});

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
  var prevIndex = 0;

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

    if( prevIndex >= $('.event-list-item').length ){
      prevIndex = 0;
    }

    $('.event-list-item').eq(prevIndex).removeClass('right100 ani').addClass('left100');
    $('.event-list-item').eq(currentIndex).removeClass('center ani').addClass('right100 ani');
    $('.event-list-item').eq(nextIndex).removeClass('left100').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }

  // 실행부
  init();

  $('.event-arrow-wrap-right').on('click', function(){

    nextIndex = currentIndex + 1;
    moveLeft();

  });

  $('.event-arrow-wrap-left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight();

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDE7XHJcbiAgdmFyIHByZXZJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpIHtcclxuXHJcbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3rkKhcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgbW92ZUxlZnQoKTtcclxuICB9KTtcclxuICAvL1xyXG4gIC8vJCgnLmZvb2QtaW1hZ2UtY2lyY2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAvL1xyXG4gIC8vICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gIC8vICBtb3ZlUmlnaHQoKTtcclxuICAvL30pO1xyXG5cclxufSk7IiwiJChmdW5jdGlvbigpe1xuXG4gIHZhciBjYWxjdWxhdGVSYXRpbyA9IHtcbiAgICAvLyBqUXVlcnkgRE9NIOuMgOyDgeydhCDsoIDsnqXtlZjripQg7ZSE66Gc7Y287YuwXG5cbiAgICAkaW1hZ2VUb3AgOiAkKCcucmVzLWltYWdlLXRvcCcpLFxuICAgICRpbWFnZUJpZyA6ICQoJy5yZXMtaW1hZ2UtYmlnJyksXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXG5cbiAgICAvLyDtlbTri7kg67aA67aE7J2YIOqwkuydhCDqs4TsgrDtlZjripQg66mU7IaM65OcXG4gICAgLy8g66eI7Iqk7YGsIOyYgeyXrSDqs4TsgrBcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xuICAgIH0sXG4gICAgLy8g7J2066+47KeAIOqzhOyCsFxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiggJGltYWdlICl7XG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcbiAgICB9LFxuICAgIC8vIO2BsCDsnbTrr7jsp4Dsl5Ag7KCB7JqpXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XG4gICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLXdpZHRoJykuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyDsnpHsnYAg7J2066+47KeA7JeQIOyggeyaqVxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xuXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xuXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XG5cbiAgICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8g66eI7Jqw7IqkIOyYpOuyhOyLnCDsnbTrr7jsp4Ag67OA6rK9IO2VqOyImFxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XG4gICAgICAkKCcucmVzLWltYWdlLWJpZycpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgfSxcblxuICAgIGNoYW5nZUltYWdlMiA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XG4gICAgICB2YXIgc3JjMiA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnMicpLmF0dHIoJ3NyYycsIHNyYzIpO1xuXG4gICAgfVxuXG5cbiAgfTtcbiAgLy8g7ZWo7IiYIOyLpO2WiVxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XG5cbiAgLy8g7J2067Kk7Yq4IOyLpO2WiVxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xuICAgIC8vY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcbiAgfSk7XG5cbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIC8vY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZTIoICQodGhpcykgKTtcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xuXG4gIH0pO1xuXG59KTtcblxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gIHZhciBwcmV2SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDMpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDQpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja0IOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3si5ztgrRcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQxMDAgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwIGFuaScpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiggcHJldkluZGV4ID49ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGggKXtcclxuICAgICAgcHJldkluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEocHJldkluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAgYW5pJykuYWRkQ2xhc3MoJ2xlZnQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ2xlZnQxMDAnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG4gIGluaXQoKTtcclxuXHJcbiAgJCgnLmV2ZW50LWFycm93LXdyYXAtcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBtb3ZlTGVmdCgpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmV2ZW50LWFycm93LXdyYXAtbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBtb3ZlUmlnaHQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
