
$(function(){

  var calculateRatio = {
    // jQuery DOM ¥ÎªÛ¿ª ¿˙¿Â«œ¥¬ «¡∑Œ∆€∆º

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

    // «ÿ¥Á ∫Œ∫–¿« ∞™¿ª ∞ËªÍ«œ¥¬ ∏ﬁº“µÂ
    // ∏∂Ω∫≈© øµø™ ∞ËªÍ
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // ¿ÃπÃ¡ˆ ∞ËªÍ
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // ≈´ ¿ÃπÃ¡ˆø° ¿˚øÎ
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // ¿€¿∫ ¿ÃπÃ¡ˆø° ¿˚øÎ
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
    // ∏∂øÏΩ∫ ø¿πˆΩ√ ¿ÃπÃ¡ˆ ∫Ø∞Ê «‘ºˆ
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.res-image-big').attr('src', src);

    }
  };
  // «‘ºˆ Ω««‡
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // ¿Ã∫•∆Æ Ω««‡
  $('.res-image-bottom-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });


});


/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // ÏÑ†Ïñ∏Î∂Ä

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

    // eq()Ïóê ÏùåÏàò Í∞íÏùÑ ÎÑ£Ïñ¥ Ï£ºÎ©¥ Îí∑ ÏàúÏÑúÎ∂ÄÌÑ∞ Ï∞®Î°ÄÎåÄÎ°ú Îß§Ïπ≠ÏãúÌÇ¥
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

  // Ïã§ÌñâÎ∂Ä
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgY2FsY3VsYXRlUmF0aW8gPSB7XHJcbiAgICAvLyBqUXVlcnkgRE9NIO+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73vv73vv73vv73vv73vv73GvFxyXG5cclxuICAgICRpbWFnZVRvcCA6ICQoJy5yZXMtaW1hZ2UtdG9wJyksXHJcbiAgICAkaW1hZ2VCaWcgOiAkKCcucmVzLWltYWdlLWJpZycpLFxyXG4gICAgJGltYWdlVGh1bWIgOiAkKCcuaW1hZ2UtdGh1bWJuYWlsJyksXHJcblxyXG4gICAgLy8g77+92LTvv70g77+9zrrvv73vv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/vd680rXvv71cclxuICAgIC8vIO+/ve+/ve+/ve+/vcWpIO+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFyZWFWYWx1ZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVdpZHRoID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCd3aWR0aCcpKTtcclxuICAgICAgdGhpcy5hcmVhSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy4kaW1hZ2VUb3AuY3NzKCdoZWlnaHQnKSk7XHJcbiAgICAgIHRoaXMuYXJlYVJhdGlvID0gdGhpcy5hcmVhV2lkdGggLyB0aGlzLmFyZWFIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8g77+9zLnvv73vv73vv70g77+977+977+977+9XHJcbiAgICBpbWFnZVZhbHVlIDogZnVuY3Rpb24oICRpbWFnZSApe1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBwYXJzZUludCggJGltYWdlLmNzcygnd2lkdGgnKSApO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ2hlaWdodCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VSYXRpbyA9IHRoaXMuaW1hZ2VXaWR0aCAvIHRoaXMuaW1hZ2VIZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gxasg77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseUJpZyA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZUJpZyk7XHJcbiAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLWhlaWdodCcpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtd2lkdGgnKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5VGh1bWIgOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuXHJcbiAgICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuJGltYWdlVGh1bWIubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VUaHVtYi5lcShpKSk7XHJcblxyXG4gICAgICAgIGlmKCB0aGlzLmFyZWFSYXRpbyA+IHRoaXMuaW1hZ2VSYXRpbyApe1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+97L26IO+/ve+/ve+/ve+/ve+/ve+/vSDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv70g77+91Lzvv71cclxuICAgIGNoYW5nZUltYWdlIDogZnVuY3Rpb24oICRvdmVySW1hZ2UgKXtcclxuICAgICAgdmFyIHNyYyA9ICRvdmVySW1hZ2UuY2hpbGRyZW4oKS5hdHRyKCdzcmMnKTtcclxuICAgICAgJCgnLnJlcy1pbWFnZS1iaWcnKS5hdHRyKCdzcmMnLCBzcmMpO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG4gIC8vIO+/vdS877+9IO+/ve+/ve+/ve+/vVxyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlUaHVtYigpO1xyXG5cclxuICAvLyDvv73Muu+/vcauIO+/ve+/ve+/ve+/vVxyXG4gICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQodGhpcykgKTtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmFwcGx5QmlnKCk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAvLyDshKDslrjrtoBcblxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcbiAgdmFyIG5leHRJbmRleCA9IDA7XG4gIHZhciBwcmV2SW5kZXggPSAwO1xuXG4gIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSgxKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMikuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDMpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcblxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoKXtcbiAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gZXEoKeyXkCDsnYzsiJgg6rCS7J2EIOuEo+yWtCDso7zrqbQg65K3IOyInOyEnOu2gO2EsCDssKjroYDrjIDroZwg66ek7Lmt7Iuc7YK0XG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCBhbmknKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4KS5yZW1vdmVDbGFzcygnY2VudGVyIGFuaScpLmFkZENsYXNzKCdsZWZ0MTAwIGFuaScpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XG5cbiAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgbmV4dEluZGV4Kys7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcblxuICAgIGlmKG5leHRJbmRleCA8PSAtMSl7XG4gICAgICBuZXh0SW5kZXggPSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoLTE7XG4gICAgfVxuXG4gICAgaWYoIHByZXZJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoICl7XG4gICAgICBwcmV2SW5kZXggPSAwO1xuICAgIH1cblxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShwcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwIGFuaScpO1xuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2NlbnRlciBhbmknKTtcblxuICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIG5leHRJbmRleC0tO1xuICB9XG5cbiAgLy8g7Iuk7ZaJ67aAXG4gIGluaXQoKTtcblxuICAkKCcuZXZlbnQtYXJyb3ctd3JhcC1yaWdodCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIG1vdmVMZWZ0KCk7XG5cbiAgfSk7XG5cbiAgJCgnLmV2ZW50LWFycm93LXdyYXAtbGVmdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgbW92ZVJpZ2h0KCk7XG5cbiAgfSk7XG5cbn0pOyJdfQ==
