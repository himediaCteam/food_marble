$(function(){

  // ì„ ì–¸ë¶€

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

    // eq()ì— ìŒìˆ˜ ê°’ì„ ë„£ì–´ì£¼ë©´ ë’· ìˆœì„œë¶€í„° ì°¨ë¡€ëŒ€ë¡œ ë§¤ì¹­ë¨
    $('.food-image-list-item').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  // ì‹¤í–‰ë¶€
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
    // jQuery DOM ´ë»óÀ» ÀúÀåÇÏ´Â ÇÁ·ÎÆÛÆ¼

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

    // ÇØ´ç ºÎºÐÀÇ °ªÀ» °è»êÇÏ´Â ¸Þ¼Òµå
    // ¸¶½ºÅ© ¿µ¿ª °è»ê
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // ÀÌ¹ÌÁö °è»ê
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // Å« ÀÌ¹ÌÁö¿¡ Àû¿ë
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // ÀÛÀº ÀÌ¹ÌÁö¿¡ Àû¿ë
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
    // ¸¶¿ì½º ¿À¹ö½Ã ÀÌ¹ÌÁö º¯°æ ÇÔ¼ö
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.res-image-big').attr('src', src);

    }
  };
  // ÇÔ¼ö ½ÇÇà
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // ÀÌº¥Æ® ½ÇÇà
  $('.res-image-bottom-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });


});


/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  // ¼±¾ðºÎ

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

    // eq()¿¡ À½¼ö °ªÀ» ³Ö¾î ÁÖ¸é µÞ ¼ø¼­ºÎÅÍ Â÷·Ê´ë·Î ¸ÅÄª½ÃÅ´
    $('.event-list-item').eq(currentIndex-1).removeClass('left100 ani').addClass('right100');
    $('.event-list-item').eq(currentIndex).removeClass('center ani').addClass('left100 ani');
    $('.event-list-item').eq(nextIndex).removeClass('right100').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){

  }

  // ½ÇÇàºÎ
  init();

  $('.event-list-item-image').on('click', function(){

    nextIndex = currentIndex + 1;
    moveLeft();

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2RfcGFnZV9yb2xsaW5nLmpzIiwiZ2VybWFueV9yZXMuanMiLCJpbWFnZV9yb2xsaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cbiAgLy8g7ISg7Ja467aAXG5cbiAgdmFyIGN1cnJlbnRJbmRleCA9IDA7XG4gIHZhciBuZXh0SW5kZXggPSAxO1xuICB2YXIgcHJldkluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBpbml0KCl7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodCcpO1xuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdsZWZ0Jyk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG1vdmVMZWZ0KCkge1xuXG4gICAgaWYgKG5leHRJbmRleCA+PSAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5sZW5ndGgpe1xuICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBlcSgp7JeQIOydjOyImCDqsJLsnYQg64Sj7Ja07KO866m0IOuStyDsiJzshJzrtoDthLAg7LCo66GA64yA66GcIOunpOy5reuQqFxuICAgICQoJy5mb29kLWltYWdlLWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdCBhbmknKS5hZGRDbGFzcygncmlnaHQnKTtcbiAgICAkKCcuZm9vZC1pbWFnZS1saXN0LWl0ZW0nKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXIgYW5pJykuYWRkQ2xhc3MoJ2xlZnQgYW5pJyk7XG4gICAgJCgnLmZvb2QtaW1hZ2UtbGlzdC1pdGVtJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQnKS5hZGRDbGFzcygnY2VudGVyIGFuaScpO1xuXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgIG5leHRJbmRleCsrO1xuICB9XG5cbiAgLy8g7Iuk7ZaJ67aAXG4gIGluaXQoKTtcblxuICAkKCcuZm9vZC1pbWFnZS1saXN0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuICAgIG1vdmVMZWZ0KCk7XG4gIH0pO1xuICAvL1xuICAvLyQoJy5mb29kLWltYWdlLWNpcmNsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gIC8vXG4gIC8vICBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAvLyAgbW92ZVJpZ2h0KCk7XG4gIC8vfSk7XG5cbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDvv73vv73vv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAkaW1hZ2VUb3AgOiAkKCcucmVzLWltYWdlLXRvcCcpLFxyXG4gICAgJGltYWdlQmlnIDogJCgnLnJlcy1pbWFnZS1iaWcnKSxcclxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxyXG5cclxuICAgIC8vIO+/vdi077+9IO+/vc6677+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73evNK177+9XHJcbiAgICAvLyDvv73vv73vv73vv73FqSDvv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgaW1hZ2VWYWx1ZSA6IGZ1bmN0aW9uKCAkaW1hZ2UgKXtcclxuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIMWrIO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xyXG4gICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC1oZWlnaHQnKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLXdpZHRoJykuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73vv70g77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/vey9uiDvv73vv73vv73vv73vv73vv70g77+9zLnvv73vv73vv70g77+977+977+977+9IO+/vdS877+9XHJcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnJykuYXR0cignc3JjJywgc3JjKTtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyDvv73UvO+/vSDvv73vv73vv73vv71cclxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5VGh1bWIoKTtcclxuXHJcbiAgLy8g77+9zLrvv73GriDvv73vv73vv73vv71cclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTA1LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgLy8g77+977+977+977+977+977+9XHJcblxyXG4gIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDEpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDIpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDMpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKDQpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlTGVmdCgpe1xyXG5cclxuICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtJykubGVuZ3RoKXtcclxuICAgICAgbmV4dEluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlcSgp77+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv70g77+91r7vv70g77+91rjvv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73KtO+/ve+/ve+/vSDvv73vv73Equ+/ve+/vcW0XHJcbiAgICAkKCcuZXZlbnQtbGlzdC1pdGVtJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwIGFuaScpLmFkZENsYXNzKCdyaWdodDEwMCcpO1xyXG4gICAgJCgnLmV2ZW50LWxpc3QtaXRlbScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlciBhbmknKS5hZGRDbGFzcygnbGVmdDEwMCBhbmknKTtcclxuICAgICQoJy5ldmVudC1saXN0LWl0ZW0nKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXIgYW5pJyk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xyXG4gICAgbmV4dEluZGV4Kys7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlUmlnaHQoKXtcclxuXHJcbiAgfVxyXG5cclxuICAvLyDvv73vv73vv73vv73vv73vv71cclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICBtb3ZlTGVmdCgpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
