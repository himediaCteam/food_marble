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
    $('.event-radius-item').eq(currentIndex).removeClass('on');
    $('.event-radius-item').eq(nextIndex).addClass('on');

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
    $('.event-radius-item').eq(currentIndex).removeClass('on');
    $('.event-radius-item').eq(nextIndex).addClass('on');

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
/**
 * Created by Administrator on 2017-08-30.
 */
/* defining locations to display.
 Each position must have a key, an alpha and delta position (or x and y if you want to display a static location).
 Any additional key can be reached via callbacks functions.
 */
var locations = {
  obj1: {
    alpha: Math.PI / 4,
    delta: 0,
    name: 'location 1'
  },
  obj2: {
    alpha: 1 * Math.PI / 4,
    delta: -2 * Math.PI / 4,
    name: 'location 2'
  },
  obj3: {
    alpha: 2 * Math.PI / 4,
    delta: 0,
    name: 'location 3'
  },
  obj4: {
    alpha: 3 * Math.PI / 4,
    delta: 3 * Math.PI / 4,
    name: 'location 4'
  },
  obj5: {
    alpha: 2.2 * Math.PI / 4,
    delta: -1.1 * Math.PI / 4,
    name: 'location 5'
  }
};
$('#sphere').earth3d({
  locationsElement: $('#locations'),
  dragElement: $('#locations'), // where do we catch the mouse drag
  locations: locations
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJnbmIuanMiLCJpbWFnZV9yb2xsaW5nLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cbiAgdmFyIGltYWdlV3JhcCA9IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gW107XG4gIHZhciBuZXh0SW5kZXggPSBbXTtcbiAgdmFyIHByZXZJbmRleCA9IFtdO1xuXG4gIGZvcih2YXIgaT0wOyBpIDwgJCgnLmZvb2QtaW1hZ2UtbGlzdCcpLmxlbmd0aDsgaSsrICl7XG5cbiAgICBpbWFnZVdyYXBbaV0gPSAkKCcuZm9vZC1pbWFnZS1saXN0JykuZXEoaSkuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgY3VycmVudEluZGV4W2ldID0gMDtcbiAgICBuZXh0SW5kZXhbaV0gPSAwO1xuICAgIHByZXZJbmRleFtpXSA9IDA7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCBpbmRleCwgJGN1cnJlbnRXcmFwICl7XG4gICAgaWYoIG5leHRJbmRleFtpbmRleF0gPj0gaW1hZ2VXcmFwW2luZGV4XSApe1xuICAgICAgbmV4dEluZGV4W2luZGV4XSA9IDA7XG4gICAgfVxuXG4gICAgJGN1cnJlbnRXcmFwLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4XS0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAkY3VycmVudFdyYXAuY2hpbGRyZW4oKS5lcShjdXJyZW50SW5kZXhbaW5kZXhdKS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0IGFuaScpO1xuICAgICRjdXJyZW50V3JhcC5jaGlsZHJlbigpLmVxKG5leHRJbmRleFtpbmRleF0pLnJlbW92ZUNsYXNzKCdyaWdodCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XG4gICAgJGN1cnJlbnRXcmFwLm5leHQoKS5uZXh0KCkuY2hpbGRyZW4oKS5lcShjdXJyZW50SW5kZXhbaW5kZXhdKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAkY3VycmVudFdyYXAubmV4dCgpLm5leHQoKS5jaGlsZHJlbigpLmVxKG5leHRJbmRleFtpbmRleF0pLmFkZENsYXNzKCdvbicpO1xuXG4gICAgY3VycmVudEluZGV4W2luZGV4XSA9IG5leHRJbmRleFtpbmRleF07XG4gICAgbmV4dEluZGV4W2luZGV4XSsrO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCBpbmRleDIsICRjdXJyZW50V3JhcDIgKXtcblxuICAgIGlmKG5leHRJbmRleFtpbmRleDJdIDw9IC0xKXtcbiAgICAgIG5leHRJbmRleFtpbmRleDJdID0gaW1hZ2VXcmFwW2luZGV4Ml0gLSAxO1xuICAgIH1cblxuICAgIGlmKCBwcmV2SW5kZXhbaW5kZXgyXSA+PSBpbWFnZVdyYXBbaW5kZXgyXSApe1xuICAgICAgcHJldkluZGV4W2luZGV4Ml0gPSAwO1xuICAgIH1cblxuICAgICRjdXJyZW50V3JhcDIuY2hpbGRyZW4oKS5lcShwcmV2SW5kZXhbaW5kZXgyXSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0IGFuaScpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gICAgJGN1cnJlbnRXcmFwMi5jaGlsZHJlbigpLmVxKGN1cnJlbnRJbmRleFtpbmRleDJdKS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcbiAgICAkY3VycmVudFdyYXAyLmNoaWxkcmVuKCkuZXEobmV4dEluZGV4W2luZGV4Ml0pLnJlbW92ZUNsYXNzKCdsZWZ0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcbiAgICAkY3VycmVudFdyYXAyLm5leHQoKS5uZXh0KCkuY2hpbGRyZW4oKS5lcShjdXJyZW50SW5kZXhbaW5kZXgyXSkucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJGN1cnJlbnRXcmFwMi5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEobmV4dEluZGV4W2luZGV4Ml0pLmFkZENsYXNzKCdvbicpO1xuXG4gICAgY3VycmVudEluZGV4W2luZGV4Ml0gPSBuZXh0SW5kZXhbaW5kZXgyXTtcbiAgICBwcmV2SW5kZXhbaW5kZXgyXSA9IGN1cnJlbnRJbmRleFtpbmRleDJdICsgMTtcbiAgICBuZXh0SW5kZXhbaW5kZXgyXS0tO1xuXG4gIH1cblxuICAkKCcuZm9vZC1pbWFnZS1saXN0LWFycm93LXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgIHZhciBpbmRleCA9ICQodGhpcykucGFyZW50KCkucHJldigpLmluZGV4KCcuZm9vZC1pbWFnZS1saXN0Jyk7XG4gICAgdmFyICRjdXJyZW50V3JhcCA9ICQodGhpcykucGFyZW50KCkucHJldigpO1xuXG4gICAgbmV4dEluZGV4W2luZGV4XSA9IGN1cnJlbnRJbmRleFtpbmRleF0gKyAxO1xuICAgIG1vdmVMZWZ0KCBpbmRleCwgJGN1cnJlbnRXcmFwICk7XG5cbiAgfSk7XG5cbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgIHZhciBpbmRleDIgPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS5pbmRleCgnLmZvb2QtaW1hZ2UtbGlzdCcpO1xuICAgIHZhciAkY3VycmVudFdyYXAyID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCk7XG5cbiAgICBuZXh0SW5kZXhbaW5kZXgyXSA9IGN1cnJlbnRJbmRleFtpbmRleDJdIC0gMTtcbiAgICBwcmV2SW5kZXhbaW5kZXgyXSA9IGN1cnJlbnRJbmRleFtpbmRleDJdICsgMTtcbiAgICBtb3ZlUmlnaHQoIGluZGV4MiwgJGN1cnJlbnRXcmFwMiApO1xuXG4gIH0pO1xuXG5cbiAgJCgnLmZvb2QtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHBhZ2VJbmRleCA9ICggJCh0aGlzKS5pbmRleCgnLmZvb2QtaWNvbicpICUgMyApO1xuXG4gICAgY29uc29sZS5sb2cocGFnZUluZGV4KTtcblxuICAgICQoJy5mb29kLWljb24+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICQoJy5mb29kLWljb24nKS5lcShwYWdlSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgICAkKCcuZm9vZC1wYWdlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgJCgnLmZvb2QtcGFnZScpLmVxKHBhZ2VJbmRleCkuYWRkQ2xhc3MoJ29uJyk7XG4gIH0pO1xuXG5cbn0pO1xuIiwiJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAvLyBqUXVlcnkgRE9NIOuMgOyDgeydhCDsoIDsnqXtlZjripQg7ZSE66Gc7Y287YuwXHJcblxyXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcclxuICAgICRpbWFnZUJpZyA6ICQoJy5yZXMtaW1hZ2UtYmlnJyksXHJcbiAgICAkaW1hZ2VUaHVtYiA6ICQoJy5pbWFnZS10aHVtYm5haWwnKSxcclxuXHJcbiAgICAvLyDtlbTri7kg67aA67aE7J2YIOqwkuydhCDqs4TsgrDtlZjripQg66mU7IaM65OcXHJcbiAgICAvLyDrp4jsiqTtgawg7JiB7JetIOqzhOyCsFxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmFyZWFIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDsnbTrr7jsp4Ag6rOE7IKwXHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ2hlaWdodCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g7YGwIOydtOuvuOyngOyXkCDsoIHsmqlcclxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g7J6R7J2AIOydtOuvuOyngOyXkCDsoIHsmqlcclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g66eI7Jqw7IqkIOyYpOuyhOyLnCDsnbTrr7jsp4Ag67OA6rK9IO2VqOyImFxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZycpLmF0dHIoJ3NyYycsIHNyYyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNoYW5nZUltYWdlMiA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMyID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZzInKS5hdHRyKCdzcmMnLCBzcmMyKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICB9O1xyXG4gIC8vIO2VqOyImCDsi6TtlolcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5VGh1bWIoKTtcclxuXHJcbiAgLy8g7J2067Kk7Yq4IOyLpO2WiVxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIC8vY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZTIoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMC5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZiggJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDY5MCApe1xyXG4gICAgICAkKCcuZ25iLXRhYicpLmNzcyh7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uIDogJ2ZpeGVkJyxcclxuICAgICAgICB0b3AgOiAwXHJcblxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5nbmItdGFiJykuY3NzKHtcclxuXHJcbiAgICAgICAgcG9zaXRpb24gOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcCA6IDY4N1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g7ISg7Ja467aAXHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDMpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDQpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja0IOyjvOuptCDrkrcg7Iic7ISc67aA7YSwIOywqOuhgOuMgOuhnCDrp6Tsua3si5ztgrRcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ2xlZnQxMDAgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwIGFuaScpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuICAgICQoJy5ldmVudC1yYWRpdXMtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuZXZlbnQtcmFkaXVzLWl0ZW0nKS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleCsrO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgaWYobmV4dEluZGV4IDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4ID0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aC0xO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgtMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuICAgICQoJy5ldmVudC1yYWRpdXMtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuZXZlbnQtcmFkaXVzLWl0ZW0nKS5lcShuZXh0SW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgIG5leHRJbmRleC0tO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpO1xyXG5cclxuICB2YXIgYWN0aXZlQ2xpY2sgPSBmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG5cclxuICAgIHZhciBkaXIgPSBkaXJlY3Rpb247XHJcblxyXG4gICAgaWYoIGRpciA9PSAncmlnaHQnICl7XHJcbiAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBtb3ZlUmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgJHNlbGVjdG9yID0gJCgnLmV2ZW50LWFycm93LXdyYXAyLicgKyBkaXIpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgLy8g7J6s6reA7ZWo7IiYXHJcbiAgICAgICRzZWxlY3Rvci5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhY3RpdmVDbGljayhkaXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwMi5yaWdodCcpLm9uZSgnY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmV2ZW50LWFycm93LXdyYXAyLmxlZnQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzAuXHJcbiAqL1xyXG4vKiBkZWZpbmluZyBsb2NhdGlvbnMgdG8gZGlzcGxheS5cclxuIEVhY2ggcG9zaXRpb24gbXVzdCBoYXZlIGEga2V5LCBhbiBhbHBoYSBhbmQgZGVsdGEgcG9zaXRpb24gKG9yIHggYW5kIHkgaWYgeW91IHdhbnQgdG8gZGlzcGxheSBhIHN0YXRpYyBsb2NhdGlvbikuXHJcbiBBbnkgYWRkaXRpb25hbCBrZXkgY2FuIGJlIHJlYWNoZWQgdmlhIGNhbGxiYWNrcyBmdW5jdGlvbnMuXHJcbiAqL1xyXG52YXIgbG9jYXRpb25zID0ge1xyXG4gIG9iajE6IHtcclxuICAgIGFscGhhOiBNYXRoLlBJIC8gNCxcclxuICAgIGRlbHRhOiAwLFxyXG4gICAgbmFtZTogJ2xvY2F0aW9uIDEnXHJcbiAgfSxcclxuICBvYmoyOiB7XHJcbiAgICBhbHBoYTogMSAqIE1hdGguUEkgLyA0LFxyXG4gICAgZGVsdGE6IC0yICogTWF0aC5QSSAvIDQsXHJcbiAgICBuYW1lOiAnbG9jYXRpb24gMidcclxuICB9LFxyXG4gIG9iajM6IHtcclxuICAgIGFscGhhOiAyICogTWF0aC5QSSAvIDQsXHJcbiAgICBkZWx0YTogMCxcclxuICAgIG5hbWU6ICdsb2NhdGlvbiAzJ1xyXG4gIH0sXHJcbiAgb2JqNDoge1xyXG4gICAgYWxwaGE6IDMgKiBNYXRoLlBJIC8gNCxcclxuICAgIGRlbHRhOiAzICogTWF0aC5QSSAvIDQsXHJcbiAgICBuYW1lOiAnbG9jYXRpb24gNCdcclxuICB9LFxyXG4gIG9iajU6IHtcclxuICAgIGFscGhhOiAyLjIgKiBNYXRoLlBJIC8gNCxcclxuICAgIGRlbHRhOiAtMS4xICogTWF0aC5QSSAvIDQsXHJcbiAgICBuYW1lOiAnbG9jYXRpb24gNSdcclxuICB9XHJcbn07XHJcbiQoJyNzcGhlcmUnKS5lYXJ0aDNkKHtcclxuICBsb2NhdGlvbnNFbGVtZW50OiAkKCcjbG9jYXRpb25zJyksXHJcbiAgZHJhZ0VsZW1lbnQ6ICQoJyNsb2NhdGlvbnMnKSwgLy8gd2hlcmUgZG8gd2UgY2F0Y2ggdGhlIG1vdXNlIGRyYWdcclxuICBsb2NhdGlvbnM6IGxvY2F0aW9uc1xyXG59KTtcclxuXHJcbiJdfQ==
