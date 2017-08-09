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
<<<<<<< HEAD


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlcm1hbnlfcmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbWFnZV9yb2xsaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAvLyBqUXVlcnkgRE9NIO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73vv73vv73vv73vv73vv73GvFxyXG5cclxuICAgICRpbWFnZVRvcCA6ICQoJy5yZXMtaW1hZ2UtdG9wJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxyXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXHJcblxyXG4gICAgLy8g77+92LTvv70g77+9zrrvv73vv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/vd680rXvv71cclxuICAgIC8vIO+/ve+/ve+/ve+/vcWpIO+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFyZWFWYWx1ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g77+9zLnvv73vv73vv70g77+977+977+977+9XHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ2hlaWdodCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gxasg77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+97L26IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv70g77+91Lzvv71cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG4gIC8vIO+/vdS877+9IO+/ve+/ve+/ve+/vVxyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xyXG5cclxuICAvLyDvv73Muu+/vcauIO+/ve+/ve+/ve+/vVxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4iXX0=
=======
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfcm9sbGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNy5cclxuICovXHJcblxyXG5cclxuLy8kKGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICBmdW5jdGlvbiBpbml0KCl7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbi8vXHJcbi8vICAgIC8vbWFyZ2luQ3RybFdyYXAoKTtcclxuLy8gICAgLy9wYWdpbmcoKTtcclxuLy8gIH1cclxuLy9cclxuLy8gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4vLyAgdmFyIG5leHRJbmRleCA9IDA7XHJcbi8vICB2YXIgcHJldkluZGV4ID0gMDtcclxuLy8gIHZhciB0aW1lSUQ7XHJcbi8vXHJcbi8vICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4vLyAgICBpZihuZXh0SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuLy8gICAgICBuZXh0SW5kZXggPSAwO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIC8vIGVxKCnvv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/vSDvv73Wvu+/vSDvv73WuO+/vSDvv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/vcq077+977+977+9IO+/ve+/vcSq77+977+9xbRcclxuLy8gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0IGFuaScpLmFkZENsYXNzKCdyaWdodCcpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQgYW5pJyk7XHJcbi8vICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKG5leHRJbmRleCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vLyAgICBuZXh0SW5kZXgrKztcclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xyXG4vLyAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4vLyAgICAgIG5leHRJbmRleCA9ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xO1xyXG4vLyAgICB9XHJcbi8vXHJcbi8vICAgIGlmKCBwcmV2SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoICl7XHJcbi8vICAgICAgcHJldkluZGV4ID0gMDtcclxuLy8gICAgfVxyXG4vL1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodCBhbmknKS5hZGRDbGFzcygnbGVmdCcpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0IGFuaScpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0JykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcclxuLy9cclxuLy8gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4vLyAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4vLyAgICBuZXh0SW5kZXgtLTtcclxuLy8gIH1cclxuLy9cclxuLy8gIGZ1bmN0aW9uIG1hcmdpbkN0cmxXcmFwKCl7XHJcbi8vXHJcbi8vICAgIHZhciB3cmFwV2lkdGggPSAkKCcuZm9vZC1pbWFnZS1jaXJjbGUnKS53aWR0aCgpO1xyXG4vLyAgICAkKCcuZm9vZC1pbWFnZS1jaXJjbGUnKS5jc3Moe1xyXG4vLyAgICAgICdtYXJnaW4tbGVmdCcgOiAtKCB3cmFwV2lkdGggLyAyIClcclxuLy8gICAgfSk7XHJcbi8vICB9XHJcbi8vXHJcbi8vICAvL2Z1bmN0aW9uIHBhZ2luZygpe1xyXG4vLyAgLy8gIHZhciBpbWdOdW1iZXIgPSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGg7XHJcbi8vICAvLyAgZm9yKHZhciBpPTA7IGk8aW1nTnVtYmVyOyBpKyspe1xyXG4vLyAgLy8gICAgJCgnLmZvb2QtaW1hZ2UtY2lyY2xlJykuYXBwZW5kKCc8bGkgY2xhc3M9XCJmb29kLWltYWdlLWNpcmNsZS1sZWZ0XCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImZvb2QtaW1hZ2UtY2lyY2xlLWxpbmtcIj4nICsgKGkrMSkgKyAnPC9hPjwvbGk+Jyk7XHJcbi8vICAvLyAgfVxyXG4vLyAgLy99XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAvLyDvv73vv73vv73vv73vv73vv71cclxuLy8gIGluaXQoKTtcclxuLy9cclxuLy9cclxuLy8gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZm9vZC1pbWFnZS1jaXJjbGUnLCBmdW5jdGlvbihlKXtcclxuLy9cclxuLy9cclxuLy8gICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLmZvb2QtaW1hZ2UtY2lyY2xlJyk7XHJcbi8vXHJcbi8vICAgIGlmKCBjdXJyZW50SW5kZXggIT0gaW5kZXhOdW1iZXIgKXtcclxuLy9cclxuLy8gICAgICBpZiggY3VycmVudEluZGV4ID09IDAgKXtcclxuLy9cclxuLy8gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgtMSApe1xyXG4vLyAgICAgICAgICBhY3RpdmVDbGljaygnbGVmdCcpO1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ3JpZ2h0Jyk7XHJcbi8vICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgfSBlbHNlIGlmKCBjdXJyZW50SW5kZXggPT0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoLTEgKXtcclxuLy9cclxuLy8gICAgICAgIGlmKCBpbmRleE51bWJlciA9PSAwICl7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuLy8gICAgICAgIH1cclxuLy9cclxuLy8gICAgICB9IGVsc2Uge1xyXG4vL1xyXG4vLyAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbi8vICAgICAgICAgIGFjdGl2ZUNsaWNrKCdyaWdodCcpO1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgYWN0aXZlQ2xpY2soJ2xlZnQnKTtcclxuLy8gICAgICAgIH1cclxuLy9cclxuLy8gICAgICB9XHJcbi8vXHJcbi8vICAgIH1cclxuLy9cclxuLy8gIH0pO1xyXG4vL30pO1xyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtY2lyY2xlLWxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLmZpc3QnKS5jc3Moe1xyXG4gICAgICBsZWZ0IDogNzE0XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtY2lyY2xlLWNlbnRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtLnNlY29uZCcpLmFuaW1hdGUoe1xyXG4gICAgICBsZWZ0IDogNzE0XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmZvb2QtaW1hZ2UtY2lyY2xlLXJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbS50aGlyZCcpLmFuaW1hdGUoe1xyXG4gICAgICB3aWR0aCA6IDQ0MCxcclxuICAgICAgaGVpZ2h0OiA3MTQsXHJcbiAgICAgIGxlZnQgOiA3MTRcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgwKS5jc3Moe2xlZnQgOiAwfSk7XHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDEpLmNzcyh7bGVmdCA6IDcxNH0pO1xyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcSgyKS5jc3Moe2xlZnQgOiAtNzE0fSk7XHJcbiAgICAgIG1hcmdpbkN0cmxXcmFwKCk7XHJcbiAgICAgIC8vcGFnaW5nKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gICAgdmFyIHRpbWVJRDtcclxuICAgIHZhciBjaGVja0lEO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73Ote+/ve+/ve+/vSDvv73MuO+/vSDDs++/ve+/vSDvv73Ote+/ve+/ve+/vSDvv73vv73Io++/ve+/vSDvv73Hte+/ve+/ve+/vSDvv73vv70uXHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgpe1xyXG4gICAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6LTQwMH0sIDEwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6NDAwfSkuc3RvcCgpLmFuaW1hdGUoe2xlZnQ6MH0sIDEwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgICBuZXh0SW5kZXgrKztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCl7XHJcblxyXG4gICAgICBpZihuZXh0SW5kZXggPD0gLTEpe1xyXG4gICAgICAgIG5leHRJbmRleCA9ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjQwMH0sIDIwMDAsICdlYXNlT3V0RXhwbycpO1xyXG5cclxuICAgICAgJCgnLmZvb2QtaW1hZ2UgLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5jc3Moe2xlZnQ6LTQwMH0pLnN0b3AoKS5hbmltYXRlKHtsZWZ0OjB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgbmV4dEluZGV4LS07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFyZ2luQ3RybFdyYXAoKXtcclxuICAgICAgdmFyIHdyYXBXaWR0aCA9ICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWNpcmNsZScpLndpZHRoKCk7XHJcbiAgICAgICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWNpcmNsZScpLmNzcyh7XHJcbiAgICAgICAgJ21hcmdpbi1sZWZ0JyA6IC0oIHdyYXBXaWR0aCAvIDIgKVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vZnVuY3Rpb24gcGFnaW5nKCl7XHJcbiAgICAvLyAgdmFyIGltZ051bWJlciA9ICQoJy5mb29kLWltYWdlIC5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aDtcclxuICAgIC8vICBmb3IodmFyIGk9MDsgaTxpbWdOdW1iZXI7IGkrKyl7XHJcbiAgICAvLyAgICAkKCcuZm9vZC1pbWFnZSAuZm9vZC1pbWFnZS1jaXJjbGUnKS5hcHBlbmQoJzxsaSBjbGFzcz1cImZvb2QtaW1hZ2UtY2lyY2xlLWl0ZW1cIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9vZC1pbWFnZS1jaXJjbGUtbGlua1wiPicgKyAoaSsxKSArICc8L2E+PC9saT4nKTtcclxuICAgIC8vICB9XHJcbiAgICAvL31cclxuICAgIGZ1bmN0aW9uIGNsaWNrUGFnaW5nKCl7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIO+/ve+/ve+/ve+/ve+/ve+/vVxyXG4gICAgaW5pdCgpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZm9vZC1pbWFnZS1jaXJjbGUtaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyIGluZGV4TnVtYmVyID0gJCh0aGlzKS5pbmRleCgnLmZvb2QtaW1hZ2UtY2lyY2xlLWl0ZW0nKTtcclxuICAgICAgaWYoIGN1cnJlbnRJbmRleCAhPSBpbmRleE51bWJlciApe1xyXG4gICAgICAgIGlmKCBjdXJyZW50SW5kZXggPT0gMCApe1xyXG4gICAgICAgICAgaWYoIGluZGV4TnVtYmVyID09ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xICl7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiggY3VycmVudEluZGV4ID09ICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmxlbmd0aC0xICl7XHJcbiAgICAgICAgICBpZiggaW5kZXhOdW1iZXIgPT0gMCApe1xyXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgICAgICBpZiggISQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmlzKCc6YW5pbWF0ZWQnKSApe1xyXG4gICAgICAgICAgICAgIG1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYoIGN1cnJlbnRJbmRleCA8IGluZGV4TnVtYmVyICl7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgICAgIGlmKCAhJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuaXMoJzphbmltYXRlZCcpICl7XHJcbiAgICAgICAgICAgICAgbW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgICAgICAgaWYoICEkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5pcygnOmFuaW1hdGVkJykgKXtcclxuICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgLy8vLyBjc3Mg77+977+977+977+977+977+9XHJcbiAgLy9mdW5jdGlvbiBpbml0KCl7XHJcbiAgLy8gICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDApLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAvLyAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0Jyk7XHJcbiAgLy8gICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XHJcbiAgLy9cclxuICAvLyAgLy9tYXJnaW5DdHJsV3JhcCgpO1xyXG4gIC8vICAvL3BhZ2luZygpO1xyXG4gIC8vfVxyXG4gIC8vXHJcbiAgLy92YXIgY3VycmVudEluZGV4ID0gMDtcclxuICAvL3ZhciBuZXh0SW5kZXggPSAwO1xyXG4gIC8vdmFyIHByZXZJbmRleCA9IDA7XHJcbiAgLy92YXIgdGltZUlEO1xyXG4gIC8vXHJcbiAgLy9mdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG4gIC8vICBpZihuZXh0SW5kZXggPj0gJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuICAvLyAgICBuZXh0SW5kZXggPSAwO1xyXG4gIC8vXHJcbiAgLy9cclxuICAvL1xyXG5cclxuXHJcbn0pO1xyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBjYWxjdWxhdGVSYXRpbyA9IHtcclxuICAgIC8vIGpRdWVyeSBET00g77+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/ve+/ve+/ve+/ve+/ve+/vca8XHJcblxyXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcclxuICAgICRpbWFnZUJpZyA6ICQoJy5yZXMtaW1hZ2UtYmlnJyksXHJcbiAgICAkaW1hZ2VUaHVtYiA6ICQoJy5pbWFnZS10aHVtYm5haWwnKSxcclxuXHJcbiAgICAvLyDvv73YtO+/vSDvv73Ouu+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+9w7wg77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAvL2FyZWFXaWR0aCA6IDAsXHJcbiAgICAvL2FyZWFIZWlnaHQgOiAwLFxyXG4gICAgLy9pbWFnZVdpZHRoIDogMCxcclxuICAgIC8vaW1hZ2VIZWlnaHQgOiAwLFxyXG4gICAgLy9hcmVhUmF0aW8gOiAwLFxyXG4gICAgLy9pbWFnZVJhdGlvIDogMCxcclxuXHJcbiAgICAvLyDvv73YtO+/vSDvv73Ouu+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+93rzSte+/vVxyXG4gICAgLy8g77+977+977+977+9xakg77+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmFyZWFIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiggJGltYWdlICl7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCd3aWR0aCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDFqyDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+977+9IO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlUaHVtYiA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuXHJcbiAgICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73svbog77+977+977+977+977+977+9IO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vSDvv73UvO+/vVxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZycpLmF0dHIoJ3NyYycsIHNyYyk7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g77+91Lzvv70g77+977+977+977+9XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XHJcblxyXG4gIC8vIO+/vcy677+9xq4g77+977+977+977+9XHJcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcblxyXG59KTsiXX0=
>>>>>>> 6cf99c62520fbbf49bfd869d8733331a925af923
