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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlcm1hbnlfcmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VybWFueV9yZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBjYWxjdWxhdGVSYXRpbyA9IHtcclxuICAgIC8vIGpRdWVyeSBET00g77+977+977+977+977+977+9IO+/ve+/ve+/ve+/ve+/vc+077+9IO+/ve+/ve+/ve+/ve+/ve+/vca8XHJcblxyXG4gICAgJGltYWdlVG9wIDogJCgnLnJlcy1pbWFnZS10b3AnKSxcclxuICAgICRpbWFnZUJpZyA6ICQoJy5yZXMtaW1hZ2UtYmlnJyksXHJcbiAgICAkaW1hZ2VUaHVtYiA6ICQoJy5pbWFnZS10aHVtYm5haWwnKSxcclxuXHJcbiAgICAvLyDvv73YtO+/vSDvv73Ouu+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+977+9w7wg77+977+977+977+977+977+9xrxcclxuXHJcbiAgICAvL2FyZWFXaWR0aCA6IDAsXHJcbiAgICAvL2FyZWFIZWlnaHQgOiAwLFxyXG4gICAgLy9pbWFnZVdpZHRoIDogMCxcclxuICAgIC8vaW1hZ2VIZWlnaHQgOiAwLFxyXG4gICAgLy9hcmVhUmF0aW8gOiAwLFxyXG4gICAgLy9pbWFnZVJhdGlvIDogMCxcclxuXHJcbiAgICAvLyDvv73YtO+/vSDvv73Ouu+/ve+/ve+/vSDvv73vv73vv73vv70g77+977+977+977+977+9z7Tvv70g77+93rzSte+/vVxyXG4gICAgLy8g77+977+977+977+9xakg77+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXJlYVZhbHVlIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhV2lkdGggPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ3dpZHRoJykpO1xyXG4gICAgICB0aGlzLmFyZWFIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRpbWFnZVRvcC5jc3MoJ2hlaWdodCcpKTtcclxuICAgICAgdGhpcy5hcmVhUmF0aW8gPSB0aGlzLmFyZWFXaWR0aCAvIHRoaXMuYXJlYUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDvv73Mue+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGltYWdlVmFsdWUgOiBmdW5jdGlvbiggJGltYWdlICl7XHJcbiAgICAgIHRoaXMuaW1hZ2VXaWR0aCA9IHBhcnNlSW50KCAkaW1hZ2UuY3NzKCd3aWR0aCcpICk7XHJcbiAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBwYXJzZUludCggJGltYWdlLmNzcygnaGVpZ2h0JykgKTtcclxuICAgICAgdGhpcy5pbWFnZVJhdGlvID0gdGhpcy5pbWFnZVdpZHRoIC8gdGhpcy5pbWFnZUhlaWdodDtcclxuICAgIH0sXHJcbiAgICAvLyDFqyDvv73Mue+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73vv71cclxuICAgIGFwcGx5QmlnIDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5hcmVhVmFsdWUoKTtcclxuICAgICAgdGhpcy5pbWFnZVZhbHVlKHRoaXMuJGltYWdlQmlnKTtcclxuICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgdGhpcy4kaW1hZ2VCaWcucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0JykuYWRkQ2xhc3MoJ2Z1bGwtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRpbWFnZUJpZy5yZW1vdmVDbGFzcygnZnVsbC13aWR0aCcpLmFkZENsYXNzKCdmdWxsLWhlaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g77+977+977+977+9IO+/vcy577+977+977+977+977+9IO+/ve+/ve+/ve+/vVxyXG4gICAgYXBwbHlUaHVtYiA6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB0aGlzLmFyZWFWYWx1ZSgpO1xyXG5cclxuICAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy4kaW1hZ2VUaHVtYi5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VWYWx1ZSh0aGlzLiRpbWFnZVRodW1iLmVxKGkpKTtcclxuXHJcbiAgICAgICAgaWYoIHRoaXMuYXJlYVJhdGlvID4gdGhpcy5pbWFnZVJhdGlvICl7XHJcbiAgICAgICAgICB0aGlzLiRpbWFnZVRodW1iLmVxKGkpLmFkZENsYXNzKCdmdWxsLXdpZHRoJyk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgdGhpcy4kaW1hZ2VUaHVtYi5lcShpKS5hZGRDbGFzcygnZnVsbC1oZWlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDvv73vv73vv73svbog77+977+977+977+977+977+9IO+/vcy577+977+977+9IO+/ve+/ve+/ve+/vSDvv73UvO+/vVxyXG4gICAgY2hhbmdlSW1hZ2UgOiBmdW5jdGlvbiggJG92ZXJJbWFnZSApe1xyXG4gICAgICB2YXIgc3JjID0gJG92ZXJJbWFnZS5jaGlsZHJlbigpLmF0dHIoJ3NyYycpO1xyXG4gICAgICAkKCcucmVzLWltYWdlLWJpZycpLmF0dHIoJ3NyYycsIHNyYyk7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g77+91Lzvv70g77+977+977+977+9XHJcbiAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICBjYWxjdWxhdGVSYXRpby5hcHBseVRodW1iKCk7XHJcblxyXG4gIC8vIO+/vcy677+9xq4g77+977+977+977+9XHJcbiAgJCgnLnJlcy1pbWFnZS1ib3R0b20td3JhcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWxjdWxhdGVSYXRpby5jaGFuZ2VJbWFnZSggJCh0aGlzKSApO1xyXG4gICAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICB9KTtcclxuXHJcbiAgLy8kKCcucmVzLWltYWdlLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgLy8gIGNhbGN1bGF0ZVJhdGlvLmNoYW5nZUltYWdlKCAkKCcucmVzLWltYWdlLWJvdHRvbS13cmFwJykuZXEoMCkgKTtcclxuICAvLyAgY2FsY3VsYXRlUmF0aW8uYXBwbHlCaWcoKTtcclxuICAvL30pO1xyXG5cclxufSk7Il19
