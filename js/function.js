$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 1;


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

  // 실행부
  init();

  $('.food-image-list.fs1').on('click', function(){
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xuXG4gIC8vIOyEoOyWuOu2gFxuXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xuICB2YXIgbmV4dEluZGV4ID0gMTtcblxuXG4gIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcSgxKS5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEoMikuYWRkQ2xhc3MoJ2xlZnQnKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gbW92ZUxlZnQoKSB7XG5cbiAgICBpZiAobmV4dEluZGV4ID49ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5sZW5ndGgpe1xuICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja07KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reuQqFxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS5mczEnKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZzMScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0uZnMxJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgIG5leHRJbmRleCsrO1xuICB9XG5cbiAgLy8g7Iuk7ZaJ67aAXG4gIGluaXQoKTtcblxuICAkKCcuZm9vZC1pbWFnZS1saXN0LmZzMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICBtb3ZlTGVmdCgpO1xuICB9KTtcbiAgLy9cbiAgLy8kKCcuZm9vZC1pbWFnZS1jaXJjbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAvL1xuICAvLyAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgLy8gIG1vdmVSaWdodCgpO1xuICAvL30pO1xuXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBjYWxjdWxhdGVSYXRpbyA9IHtcclxuICAgIC8vIGpRdWVyeSBET00g64yA7IOB7J2EIOyggOyepe2VmOuKlCDtlITroZztjbzti7BcclxuXHJcbiAgICAkaW1hZ2VUb3AgOiAkKCcucmVzLWltYWdlLXRvcCcpLFxyXG4gICAgJGltYWdlQmlnIDogJCgnLnJlcy1pbWFnZS1iaWcnKSxcclxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxyXG5cclxuICAgIC8vIO2VtOuLuSDrtoDrtoTsnZgg6rCS7J2EIOqzhOyCsO2VmOuKlCDrqZTshozrk5xcclxuICAgIC8vIOuniOyKpO2BrCDsmIHsl60g6rOE7IKwXHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIOydtOuvuOyngCDqs4TsgrBcclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiggJGltYWdlICl7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCd3aWR0aCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDtgbAg7J2066+47KeA7JeQIOyggeyaqVxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xyXG4gICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC1oZWlnaHQnKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLXdpZHRoJykuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDsnpHsnYAg7J2066+47KeA7JeQIOyggeyaqVxyXG4gICAgYXBwbHlUaHVtYiA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuXHJcbiAgICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDrp4jsmrDsiqQg7Jik67KE7IucIOydtOuvuOyngCDrs4Dqsr0g7ZWo7IiYXHJcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnJykuYXR0cignc3JjJywgc3JjKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlSW1hZ2UyIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYzIgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnMicpLmF0dHIoJ3NyYycsIHNyYzIpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcbiAgLy8g7ZWo7IiYIOyLpO2WiVxyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xyXG5cclxuICAvLyDsnbTrsqTtirgg7Iuk7ZaJXHJcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgLy9jYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZTIoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuICB2YXIgcHJldkluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgzKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICBuZXh0SW5kZXggPSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoICl7XHJcbiAgICAgIHByZXZJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKHByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgbmV4dEluZGV4LS07XHJcbiAgfVxyXG5cclxuICAvLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwLXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgbW92ZUxlZnQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwLWxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgbW92ZVJpZ2h0KCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
