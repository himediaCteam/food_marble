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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJnbmIuanMiLCJpbWFnZV9yb2xsaW5nLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBpbWFnZVdyYXAgPSBbXTtcclxuICB2YXIgY3VycmVudEluZGV4ID0gW107XHJcbiAgdmFyIG5leHRJbmRleCA9IFtdO1xyXG4gIHZhciBwcmV2SW5kZXggPSBbXTtcclxuXHJcbiAgZm9yKHZhciBpPTA7IGkgPCAkKCcuZm9vZC1pbWFnZS1saXN0JykubGVuZ3RoOyBpKysgKXtcclxuXHJcbiAgICBpbWFnZVdyYXBbaV0gPSAkKCcuZm9vZC1pbWFnZS1saXN0JykuZXEoaSkuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICBjdXJyZW50SW5kZXhbaV0gPSAwO1xyXG4gICAgbmV4dEluZGV4W2ldID0gMDtcclxuICAgIHByZXZJbmRleFtpXSA9IDA7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoIGluZGV4LCAkY3VycmVudFdyYXAgKXtcclxuICAgIGlmKCBuZXh0SW5kZXhbaW5kZXhdID49IGltYWdlV3JhcFtpbmRleF0gKXtcclxuICAgICAgbmV4dEluZGV4W2luZGV4XSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJGN1cnJlbnRXcmFwLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4XS0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcclxuICAgICRjdXJyZW50V3JhcC5jaGlsZHJlbigpLmVxKGN1cnJlbnRJbmRleFtpbmRleF0pLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQgYW5pJyk7XHJcbiAgICAkY3VycmVudFdyYXAuY2hpbGRyZW4oKS5lcShuZXh0SW5kZXhbaW5kZXhdKS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG4gICAgJGN1cnJlbnRXcmFwLm5leHQoKS5uZXh0KCkuY2hpbGRyZW4oKS5lcShjdXJyZW50SW5kZXhbaW5kZXhdKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICRjdXJyZW50V3JhcC5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEobmV4dEluZGV4W2luZGV4XSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4W2luZGV4XSA9IG5leHRJbmRleFtpbmRleF07XHJcbiAgICBuZXh0SW5kZXhbaW5kZXhdKys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoIGluZGV4MiwgJGN1cnJlbnRXcmFwMiApe1xyXG5cclxuICAgIGlmKG5leHRJbmRleFtpbmRleDJdIDw9IC0xKXtcclxuICAgICAgbmV4dEluZGV4W2luZGV4Ml0gPSBpbWFnZVdyYXBbaW5kZXgyXSAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIHByZXZJbmRleFtpbmRleDJdID49IGltYWdlV3JhcFtpbmRleDJdICl7XHJcbiAgICAgIHByZXZJbmRleFtpbmRleDJdID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAkY3VycmVudFdyYXAyLmNoaWxkcmVuKCkuZXEocHJldkluZGV4W2luZGV4Ml0pLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4gICAgJGN1cnJlbnRXcmFwMi5jaGlsZHJlbigpLmVxKGN1cnJlbnRJbmRleFtpbmRleDJdKS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdyaWdodCBhbmknKTtcclxuICAgICRjdXJyZW50V3JhcDIuY2hpbGRyZW4oKS5lcShuZXh0SW5kZXhbaW5kZXgyXSkucmVtb3ZlQ2xhc3MoJ2xlZnQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xyXG4gICAgJGN1cnJlbnRXcmFwMi5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEoY3VycmVudEluZGV4W2luZGV4Ml0pLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJGN1cnJlbnRXcmFwMi5uZXh0KCkubmV4dCgpLmNoaWxkcmVuKCkuZXEobmV4dEluZGV4W2luZGV4Ml0pLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleFtpbmRleDJdID0gbmV4dEluZGV4W2luZGV4Ml07XHJcbiAgICBwcmV2SW5kZXhbaW5kZXgyXSA9IGN1cnJlbnRJbmRleFtpbmRleDJdICsgMTtcclxuICAgIG5leHRJbmRleFtpbmRleDJdLS07XHJcblxyXG4gIH1cclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdy1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGluZGV4ID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuaW5kZXgoJy5mb29kLWltYWdlLWxpc3QnKTtcclxuICAgIHZhciAkY3VycmVudFdyYXAgPSAkKHRoaXMpLnBhcmVudCgpLnByZXYoKTtcclxuXHJcbiAgICBuZXh0SW5kZXhbaW5kZXhdID0gY3VycmVudEluZGV4W2luZGV4XSArIDE7XHJcbiAgICBtb3ZlTGVmdCggaW5kZXgsICRjdXJyZW50V3JhcCApO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1hcnJvdy1sZWZ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW5kZXgyID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkuaW5kZXgoJy5mb29kLWltYWdlLWxpc3QnKTtcclxuICAgIHZhciAkY3VycmVudFdyYXAyID0gJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCk7XHJcblxyXG4gICAgbmV4dEluZGV4W2luZGV4Ml0gPSBjdXJyZW50SW5kZXhbaW5kZXgyXSAtIDE7XHJcbiAgICBwcmV2SW5kZXhbaW5kZXgyXSA9IGN1cnJlbnRJbmRleFtpbmRleDJdICsgMTtcclxuICAgIG1vdmVSaWdodCggaW5kZXgyLCAkY3VycmVudFdyYXAyICk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgJCgnLmZvb2QtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgcGFnZUluZGV4ID0gKCAkKHRoaXMpLmluZGV4KCcuZm9vZC1pY29uJykgJSAzICk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFnZUluZGV4KTtcclxuXHJcbiAgICAkKCcuZm9vZC1pY29uPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5mb29kLWljb24nKS5lcShwYWdlSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJCgnLmZvb2QtcGFnZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmZvb2QtcGFnZScpLmVxKHBhZ2VJbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiIsIiQoZnVuY3Rpb24oKXtcblxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XG4gICAgLy8galF1ZXJ5IERPTSDrjIDsg4HsnYQg7KCA7J6l7ZWY64qUIO2UhOuhnO2NvO2LsFxuXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxuXG4gICAgLy8g7ZW064u5IOu2gOu2hOydmCDqsJLsnYQg6rOE7IKw7ZWY64qUIOuplOyGjOuTnFxuICAgIC8vIOuniOyKpO2BrCDsmIHsl60g6rOE7IKwXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcbiAgICB9LFxuICAgIC8vIOydtOuvuOyngCDqs4TsgrBcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XG4gICAgfSxcbiAgICAvLyDtgbAg7J2066+47KeA7JeQIOyggeyaqVxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8g7J6R7J2AIOydtOuvuOyngOyXkCDsoIHsmqlcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcblxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcblxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xuXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOuniOyasOyKpCDsmKTrsoTsi5wg7J2066+47KeAIOuzgOqyvSDtlajsiJhcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xuICAgIH0sXG5cbiAgICBjaGFuZ2VJbWFnZTIgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xuICAgICAgdmFyIHNyYzIgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XG4gICAgICAkKCcucmVzLWltYWdlLWJpZzInKS5hdHRyKCdzcmMnLCBzcmMyKTtcblxuICAgIH1cblxuXG4gIH07XG4gIC8vIO2VqOyImCDsi6TtlolcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xuXG4gIC8vIOydtOuypO2KuCDsi6TtlolcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlMiggJCh0aGlzKSApO1xuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XG4gIH0pO1xuXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAvL2NhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UyKCAkKHRoaXMpICk7XG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcblxuICB9KTtcblxuXG5cbn0pO1xuXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzAuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoICQodGhpcykuc2Nyb2xsVG9wKCkgPiA2OTAgKXtcclxuICAgICAgJCgnLmduYi10YWInKS5jc3Moe1xyXG5cclxuICAgICAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wIDogMFxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuZ25iLXRhYicpLmNzcyh7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uIDogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3AgOiA2ODdcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG5cclxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICB2YXIgbmV4dEluZGV4ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgyKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgzKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuXHJcbiAgICBpZihuZXh0SW5kZXggPj0gJCgnLmV2ZW50LWxpc3QtaXRlbScpLmxlbmd0aCl7XHJcbiAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcbiAgICAkKCcuZXZlbnQtcmFkaXVzLWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmV2ZW50LXJhZGl1cy1pdGVtJykuZXEobmV4dEluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgrKztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XHJcbiAgICAgIG5leHRJbmRleCA9ICQoJy5ldmVudC1saXN0LWl0ZW0nKS5sZW5ndGgtMTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4LTEpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygncmlnaHQxMDAgYW5pJyk7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygnbGVmdDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcbiAgICAkKCcuZXZlbnQtcmFkaXVzLWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLmV2ZW50LXJhZGl1cy1pdGVtJykuZXEobmV4dEluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICBuZXh0SW5kZXgtLTtcclxuICB9XHJcblxyXG4gIGluaXQoKTtcclxuXHJcbiAgdmFyIGFjdGl2ZUNsaWNrID0gZnVuY3Rpb24oZGlyZWN0aW9uKXtcclxuXHJcbiAgICB2YXIgZGlyID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIGlmKCBkaXIgPT0gJ3JpZ2h0JyApe1xyXG4gICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICBtb3ZlTGVmdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyICRzZWxlY3RvciA9ICQoJy5ldmVudC1hcnJvdy13cmFwMi4nICsgZGlyKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vIOyerOq3gO2VqOyImFxyXG4gICAgICAkc2VsZWN0b3Iub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYWN0aXZlQ2xpY2soZGlyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIOyLpO2Wieu2gFxyXG5cclxuICAkKCcuZXZlbnQtYXJyb3ctd3JhcDIucmlnaHQnKS5vbmUoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBhY3RpdmVDbGljaygncmlnaHQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5ldmVudC1hcnJvdy13cmFwMi5sZWZ0Jykub25lKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMwLlxyXG4gKi9cclxuLyogZGVmaW5pbmcgbG9jYXRpb25zIHRvIGRpc3BsYXkuXHJcbiBFYWNoIHBvc2l0aW9uIG11c3QgaGF2ZSBhIGtleSwgYW4gYWxwaGEgYW5kIGRlbHRhIHBvc2l0aW9uIChvciB4IGFuZCB5IGlmIHlvdSB3YW50IHRvIGRpc3BsYXkgYSBzdGF0aWMgbG9jYXRpb24pLlxyXG4gQW55IGFkZGl0aW9uYWwga2V5IGNhbiBiZSByZWFjaGVkIHZpYSBjYWxsYmFja3MgZnVuY3Rpb25zLlxyXG4gKi9cclxudmFyIGxvY2F0aW9ucyA9IHtcclxuICBvYmoxOiB7XHJcbiAgICBhbHBoYTogTWF0aC5QSSAvIDQsXHJcbiAgICBkZWx0YTogMCxcclxuICAgIG5hbWU6ICdsb2NhdGlvbiAxJ1xyXG4gIH0sXHJcbiAgb2JqMjoge1xyXG4gICAgYWxwaGE6IDEgKiBNYXRoLlBJIC8gNCxcclxuICAgIGRlbHRhOiAtMiAqIE1hdGguUEkgLyA0LFxyXG4gICAgbmFtZTogJ2xvY2F0aW9uIDInXHJcbiAgfSxcclxuICBvYmozOiB7XHJcbiAgICBhbHBoYTogMiAqIE1hdGguUEkgLyA0LFxyXG4gICAgZGVsdGE6IDAsXHJcbiAgICBuYW1lOiAnbG9jYXRpb24gMydcclxuICB9LFxyXG4gIG9iajQ6IHtcclxuICAgIGFscGhhOiAzICogTWF0aC5QSSAvIDQsXHJcbiAgICBkZWx0YTogMyAqIE1hdGguUEkgLyA0LFxyXG4gICAgbmFtZTogJ2xvY2F0aW9uIDQnXHJcbiAgfSxcclxuICBvYmo1OiB7XHJcbiAgICBhbHBoYTogMi4yICogTWF0aC5QSSAvIDQsXHJcbiAgICBkZWx0YTogLTEuMSAqIE1hdGguUEkgLyA0LFxyXG4gICAgbmFtZTogJ2xvY2F0aW9uIDUnXHJcbiAgfVxyXG59O1xyXG4kKCcjc3BoZXJlJykuZWFydGgzZCh7XHJcbiAgbG9jYXRpb25zRWxlbWVudDogJCgnI2xvY2F0aW9ucycpLFxyXG4gIGRyYWdFbGVtZW50OiAkKCcjbG9jYXRpb25zJyksIC8vIHdoZXJlIGRvIHdlIGNhdGNoIHRoZSBtb3VzZSBkcmFnXHJcbiAgbG9jYXRpb25zOiBsb2NhdGlvbnNcclxufSk7XHJcblxyXG4iXX0=
