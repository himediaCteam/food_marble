$(function(){

  var imageWrap = [];
  var currentIndex = [];
  var nextIndex = [];
  var prevIndex = [];

  for(var i=0; i < $('.food-image-list').length; i++ ){

    imageWrap[i] = $('.food-image-list').eq(i).children().length;
    currentIndex[i] = 0;
    nextIndex[i] = 0;
    prevIndex[i] = 0;

  }

  function moveLeft( index, $currentWrap ){
    if( nextIndex[index] >= imageWrap[index] ){
      nextIndex[index] = 0;
    }

    $currentWrap.children().eq(currentIndex[index]-1).removeClass('left ani').addClass('right');
    $currentWrap.children().eq(currentIndex[index]).removeClass('center ani').addClass('left ani');
    $currentWrap.children().eq(nextIndex[index]).removeClass('right').addClass('center ani');
    $currentWrap.next().next().children().eq(currentIndex[index]).removeClass('on');
    $currentWrap.next().next().children().eq(nextIndex[index]).addClass('on');

    currentIndex[index] = nextIndex[index];
    nextIndex[index]++;
  }

  function moveRight( index2, $currentWrap2 ){

    if(nextIndex[index2] <= -1){
      nextIndex[index2] = imageWrap[index2] - 1;
    }

    if( prevIndex[index2] >= imageWrap[index2] ){
      prevIndex[index2] = 0;
    }

    $currentWrap2.children().eq(prevIndex[index2]).removeClass('right ani').addClass('left');
    $currentWrap2.children().eq(currentIndex[index2]).removeClass('center ani').addClass('right ani');
    $currentWrap2.children().eq(nextIndex[index2]).removeClass('left').addClass('center ani');
    $currentWrap2.next().next().children().eq(currentIndex[index2]).removeClass('on');
    $currentWrap2.next().next().children().eq(nextIndex[index2]).addClass('on');

    currentIndex[index2] = nextIndex[index2];
    prevIndex[index2] = currentIndex[index2] + 1;
    nextIndex[index2]--;

  }

  $('.food-image-list-arrow-right').on('click', function(){

    var index = $(this).parent().prev().index('.food-image-list');
    var $currentWrap = $(this).parent().prev();

    nextIndex[index] = currentIndex[index] + 1;
    moveLeft( index, $currentWrap );

  });

  $('.food-image-list-arrow-left').on('click', function(){

    var index2 = $(this).parent().prev().index('.food-image-list');
    var $currentWrap2 = $(this).parent().prev();

    nextIndex[index2] = currentIndex[index2] - 1;
    prevIndex[index2] = currentIndex[index2] + 1;
    moveRight( index2, $currentWrap2 );

  });


  $('.food-icon').on('click', function(e){

    e.preventDefault();

    var pageIndex = ( $(this).index('.food-icon') % 3 );

    console.log(pageIndex);

    $('.food-icon>a').removeClass('on');
    $('.food-icon').eq(pageIndex).children('a').addClass('on');

    $('.food-page').removeClass('on');
    $('.food-page').eq(pageIndex).addClass('on');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xuXG4gIHZhciBpbWFnZVdyYXAgPSBbXTtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IFtdO1xuICB2YXIgbmV4dEluZGV4ID0gW107XG4gIHZhciBwcmV2SW5kZXggPSBbXTtcblxuICBmb3IodmFyIGk9MDsgaSA8ICQoJy5mb29kLWltYWdlLWxpc3QnKS5sZW5ndGg7IGkrKyApe1xuXG4gICAgaW1hZ2VXcmFwW2ldID0gJCgnLmZvb2QtaW1hZ2UtbGlzdCcpLmVxKGkpLmNoaWxkcmVuKCkubGVuZ3RoO1xuICAgIGN1cnJlbnRJbmRleFtpXSA9IDA7XG4gICAgbmV4dEluZGV4W2ldID0gMDtcbiAgICBwcmV2SW5kZXhbaV0gPSAwO1xuXG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlTGVmdCggaW5kZXgsICRjdXJyZW50V3JhcCApe1xuICAgIGlmKCBuZXh0SW5kZXhbaW5kZXhdID49IGltYWdlV3JhcFtpbmRleF0gKXtcbiAgICAgIG5leHRJbmRleFtpbmRleF0gPSAwO1xuICAgIH1cblxuICAgICRjdXJyZW50V3JhcC5jaGlsZHJlbigpLmVxKGN1cnJlbnRJbmRleFtpbmRleF0tMSkucmVtb3ZlQ2xhc3MoJ2xlZnQgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgJGN1cnJlbnRXcmFwLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4XSkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdCBhbmknKTtcbiAgICAkY3VycmVudFdyYXAuY2hpbGRyZW4oKS5lcShuZXh0SW5kZXhbaW5kZXhdKS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xuICAgICRjdXJyZW50V3JhcC5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4XSkucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJGN1cnJlbnRXcmFwLm5leHQoKS5uZXh0KCkuY2hpbGRyZW4oKS5lcShuZXh0SW5kZXhbaW5kZXhdKS5hZGRDbGFzcygnb24nKTtcblxuICAgIGN1cnJlbnRJbmRleFtpbmRleF0gPSBuZXh0SW5kZXhbaW5kZXhdO1xuICAgIG5leHRJbmRleFtpbmRleF0rKztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCggaW5kZXgyLCAkY3VycmVudFdyYXAyICl7XG5cbiAgICBpZihuZXh0SW5kZXhbaW5kZXgyXSA8PSAtMSl7XG4gICAgICBuZXh0SW5kZXhbaW5kZXgyXSA9IGltYWdlV3JhcFtpbmRleDJdIC0gMTtcbiAgICB9XG5cbiAgICBpZiggcHJldkluZGV4W2luZGV4Ml0gPj0gaW1hZ2VXcmFwW2luZGV4Ml0gKXtcbiAgICAgIHByZXZJbmRleFtpbmRleDJdID0gMDtcbiAgICB9XG5cbiAgICAkY3VycmVudFdyYXAyLmNoaWxkcmVuKCkuZXEocHJldkluZGV4W2luZGV4Ml0pLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xuICAgICRjdXJyZW50V3JhcDIuY2hpbGRyZW4oKS5lcShjdXJyZW50SW5kZXhbaW5kZXgyXSkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQgYW5pJyk7XG4gICAgJGN1cnJlbnRXcmFwMi5jaGlsZHJlbigpLmVxKG5leHRJbmRleFtpbmRleDJdKS5yZW1vdmVDbGFzcygnbGVmdCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XG4gICAgJGN1cnJlbnRXcmFwMi5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4Ml0pLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICRjdXJyZW50V3JhcDIubmV4dCgpLm5leHQoKS5jaGlsZHJlbigpLmVxKG5leHRJbmRleFtpbmRleDJdKS5hZGRDbGFzcygnb24nKTtcblxuICAgIGN1cnJlbnRJbmRleFtpbmRleDJdID0gbmV4dEluZGV4W2luZGV4Ml07XG4gICAgcHJldkluZGV4W2luZGV4Ml0gPSBjdXJyZW50SW5kZXhbaW5kZXgyXSArIDE7XG4gICAgbmV4dEluZGV4W2luZGV4Ml0tLTtcblxuICB9XG5cbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdy1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgaW5kZXggPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5pbmRleCgnLmZvb2QtaW1hZ2UtbGlzdCcpO1xuICAgIHZhciAkY3VycmVudFdyYXAgPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKTtcblxuICAgIG5leHRJbmRleFtpbmRleF0gPSBjdXJyZW50SW5kZXhbaW5kZXhdICsgMTtcbiAgICBtb3ZlTGVmdCggaW5kZXgsICRjdXJyZW50V3JhcCApO1xuXG4gIH0pO1xuXG4gICQoJy5mb29kLWltYWdlLWxpc3QtYXJyb3ctbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgaW5kZXgyID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuaW5kZXgoJy5mb29kLWltYWdlLWxpc3QnKTtcbiAgICB2YXIgJGN1cnJlbnRXcmFwMiA9ICQodGhpcykucGFyZW50KCkucHJldigpO1xuXG4gICAgbmV4dEluZGV4W2luZGV4Ml0gPSBjdXJyZW50SW5kZXhbaW5kZXgyXSAtIDE7XG4gICAgcHJldkluZGV4W2luZGV4Ml0gPSBjdXJyZW50SW5kZXhbaW5kZXgyXSArIDE7XG4gICAgbW92ZVJpZ2h0KCBpbmRleDIsICRjdXJyZW50V3JhcDIgKTtcblxuICB9KTtcblxuXG4gICQoJy5mb29kLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBwYWdlSW5kZXggPSAoICQodGhpcykuaW5kZXgoJy5mb29kLWljb24nKSAlIDMgKTtcblxuICAgIGNvbnNvbGUubG9nKHBhZ2VJbmRleCk7XG5cbiAgICAkKCcuZm9vZC1pY29uPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAkKCcuZm9vZC1pY29uJykuZXEocGFnZUluZGV4KS5jaGlsZHJlbignYScpLmFkZENsYXNzKCdvbicpO1xuXG4gICAgJCgnLmZvb2QtcGFnZScpLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICQoJy5mb29kLXBhZ2UnKS5lcShwYWdlSW5kZXgpLmFkZENsYXNzKCdvbicpO1xuICB9KTtcblxuXG59KTtcbiIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDrjIDsg4HsnYQg7KCA7J6l7ZWY64qUIO2UhOuhnO2NvO2LsFxyXG5cclxuICAgICRpbWFnZVRvcCA6ICQoJy5yZXMtaW1hZ2UtdG9wJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxyXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXHJcblxyXG4gICAgLy8g7ZW064u5IOu2gOu2hOydmCDqsJLsnYQg6rOE7IKw7ZWY64qUIOuplOyGjOuTnFxyXG4gICAgLy8g66eI7Iqk7YGsIOyYgeyXrSDqs4TsgrBcclxuICAgIGFyZWFWYWx1ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g7J2066+47KeAIOqzhOyCsFxyXG4gICAgaW1hZ2VWYWx1ZSA6IGZ1bmN0aW9uKCAkaW1hZ2UgKXtcclxuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIO2BsCDsnbTrr7jsp4Dsl5Ag7KCB7JqpXHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOyekeydgCDsnbTrr7jsp4Dsl5Ag7KCB7JqpXHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOuniOyasOyKpCDsmKTrsoTsi5wg7J2066+47KeAIOuzgOqyvSDtlajsiJhcclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VJbWFnZTIgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjMiA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcyJykuYXR0cignc3JjJywgc3JjMik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuICAvLyDtlajsiJgg7Iuk7ZaJXHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XHJcblxyXG4gIC8vIOydtOuypO2KuCDsi6TtlolcclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy9jYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuXHJcbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoNCkuYWRkQ2xhc3MoJ2xlZnQxMDAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4ID49ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgpe1xyXG4gICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGVxKCnsl5Ag7J2M7IiYIOqwkuydhCDrhKPslrQg7KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reyLnO2CtFxyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCBhbmknKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQxMDAgYW5pJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmKCBkaXIgPT0gJ3JpZ2h0JyApe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5ldmVudC1hcnJvdy13cmFwMi4nICsgZGlyKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyerOq3gO2VqOyImFxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICAkKCcuZXZlbnQtYXJyb3ctd3JhcDIucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwMi5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
