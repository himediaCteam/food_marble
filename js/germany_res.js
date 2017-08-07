$(function(){

  var calculateRatio = {
    // jQuery DOM 대상을 저장하는 프로퍼티

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

    // 해당 부분의 값을 저장하는 객체 프로퍼티

    //areaWidth : 0,
    //areaHeight : 0,
    //imageWidth : 0,
    //imageHeight : 0,
    //areaRatio : 0,
    //imageRatio : 0,

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

  //$('.res-image-wrap').on('mouseleave', function(){
  //  calculateRatio.changeImage( $('.res-image-bottom-wrap').eq(0) );
  //  calculateRatio.applyBig();
  //});

});
/**
 * Created by Administrator on 2017-08-05.
 */

$(function(){

  $('.event-list-item-image').on('click', function(){

    function init(){

      $('.event-list-item-image').eq(0).addClass('center');
      $('.event-list-item-image').eq(1).addClass('right100');
      $('.event-list-item-image').eq(2).addClass('right200');
      $('.event-list-item-image').eq(3).addClass('left200');
      $('.event-list-item-image').eq(4).addClass('left100');

    }

    var currentIndex = 0;
    var nextIndex = 0;

    function moveLeft(){
      if(nextIndex >= $('.event-list-item-image').length){
        nextIndex = 0;
      }

      // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
      $('.event-list-item-image').eq(currentIndex-2).removeClass('left200').addClass('right200');
      $('.event-list-item-image').eq(currentIndex-1).removeClass('left100').addClass('left200');
      $('.event-list-item-image').eq(currentIndex).removeClass('center').addClass('left100');
      $('.event-list-item-image').eq(nextIndex).removeClass('right100').addClass('center');
      $('.event-list-item-image').eq(nextIndex+1).removeClass('right200').addClass('right100');

      currentIndex = nextIndex;
      nextIndex++;
    }

    moveLeft();

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlcm1hbnlfcmVzLmpzIiwiaW1hZ2Vfcm9sbGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZXJtYW55X3Jlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIGNhbGN1bGF0ZVJhdGlvID0ge1xyXG4gICAgLy8galF1ZXJ5IERPTSDvv73vv73vv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAkaW1hZ2VUb3AgOiAkKCcucmVzLWltYWdlLXRvcCcpLFxyXG4gICAgJGltYWdlQmlnIDogJCgnLnJlcy1pbWFnZS1iaWcnKSxcclxuICAgICRpbWFnZVRodW1iIDogJCgnLmltYWdlLXRodW1ibmFpbCcpLFxyXG5cclxuICAgIC8vIO+/vdi077+9IO+/vc6677+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73vv73DvCDvv73vv73vv73vv73vv73vv73GvFxyXG5cclxuICAgIC8vYXJlYVdpZHRoIDogMCxcclxuICAgIC8vYXJlYUhlaWdodCA6IDAsXHJcbiAgICAvL2ltYWdlV2lkdGggOiAwLFxyXG4gICAgLy9pbWFnZUhlaWdodCA6IDAsXHJcbiAgICAvL2FyZWFSYXRpbyA6IDAsXHJcbiAgICAvL2ltYWdlUmF0aW8gOiAwLFxyXG5cclxuICAgIC8vIO+/vdi077+9IO+/vc6677+977+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv73vv73PtO+/vSDvv73evNK177+9XHJcbiAgICAvLyDvv73vv73vv73vv73FqSDvv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcmVhVmFsdWUgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFXaWR0aCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnd2lkdGgnKSk7XHJcbiAgICAgIHRoaXMuYXJlYUhlaWdodCA9IHBhcnNlSW50KHRoaXMuJGltYWdlVG9wLmNzcygnaGVpZ2h0JykpO1xyXG4gICAgICB0aGlzLmFyZWFSYXRpbyA9IHRoaXMuYXJlYVdpZHRoIC8gdGhpcy5hcmVhSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgaW1hZ2VWYWx1ZSA6IGZ1bmN0aW9uKCAkaW1hZ2UgKXtcclxuICAgICAgdGhpcy5pbWFnZVdpZHRoID0gcGFyc2VJbnQoICRpbWFnZS5jc3MoJ3dpZHRoJykgKTtcclxuICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCdoZWlnaHQnKSApO1xyXG4gICAgICB0aGlzLmltYWdlUmF0aW8gPSB0aGlzLmltYWdlV2lkdGggLyB0aGlzLmltYWdlSGVpZ2h0O1xyXG4gICAgfSxcclxuICAgIC8vIMWrIO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlCaWcgOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG4gICAgICB0aGlzLmltYWdlVmFsdWUodGhpcy4kaW1hZ2VCaWcpO1xyXG4gICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC1oZWlnaHQnKS5hZGRDbGFzcygnZnVsbC13aWR0aCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJGltYWdlQmlnLnJlbW92ZUNsYXNzKCdmdWxsLXdpZHRoJykuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73vv70g77+9zLnvv73vv73vv73vv73vv70g77+977+977+977+9XHJcbiAgICBhcHBseVRodW1iIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHRoaXMuYXJlYVZhbHVlKCk7XHJcblxyXG4gICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLiRpbWFnZVRodW1iLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlVGh1bWIuZXEoaSkpO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5hcmVhUmF0aW8gPiB0aGlzLmltYWdlUmF0aW8gKXtcclxuICAgICAgICAgIHRoaXMuJGltYWdlVGh1bWIuZXEoaSkuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIO+/ve+/ve+/vey9uiDvv73vv73vv73vv73vv73vv70g77+9zLnvv73vv73vv70g77+977+977+977+9IO+/vdS877+9XHJcbiAgICBjaGFuZ2VJbWFnZSA6IGZ1bmN0aW9uKCAkb3ZlckltYWdlICl7XHJcbiAgICAgIHZhciBzcmMgPSAkb3ZlckltYWdlLmNoaWxkcmVuKCkuYXR0cignc3JjJyk7XHJcbiAgICAgICQoJy5yZXMtaW1hZ2UtYmlnJykuYXR0cignc3JjJywgc3JjKTtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyDvv73UvO+/vSDvv73vv73vv73vv71cclxuICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIGNhbGN1bGF0ZVJhdGlvLmFwcGx5VGh1bWIoKTtcclxuXHJcbiAgLy8g77+9zLrvv73GriDvv73vv73vv73vv71cclxuICAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKHRoaXMpICk7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIH0pO1xyXG5cclxuICAvLyQoJy5yZXMtaW1hZ2Utd3JhcCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAvLyAgY2FsY3VsYXRlUmF0aW8uY2hhbmdlSW1hZ2UoICQoJy5yZXMtaW1hZ2UtYm90dG9tLXdyYXAnKS5lcSgwKSApO1xyXG4gIC8vICBjYWxjdWxhdGVSYXRpby5hcHBseUJpZygpO1xyXG4gIC8vfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSgyKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKDMpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlcSgp77+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv70g77+91r7vv70g77+91rjvv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73KtO+/ve+/ve+/vSDvv73vv73Equ+/ve+/vcW0XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMikucmVtb3ZlQ2xhc3MoJ2xlZnQyMDAnKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCcpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXInKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAnKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShuZXh0SW5kZXgrMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MjAwJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcblxyXG4gICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
