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
    init();

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlX3JvbGxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW1hZ2Vfcm9sbGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0wNS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSgwKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSgxKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKDIpLmFkZENsYXNzKCdyaWdodDIwMCcpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMykuYWRkQ2xhc3MoJ2xlZnQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKDQpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgdmFyIG5leHRJbmRleCA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcclxuICAgICAgaWYobmV4dEluZGV4ID49ICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5sZW5ndGgpe1xyXG4gICAgICAgIG5leHRJbmRleCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVxKCnvv73vv70g77+977+977+977+9IO+/ve+/ve+/ve+/vSDvv73Wvu+/vSDvv73WuO+/vSDvv73vv70g77+977+977+977+977+977+977+977+9IO+/ve+/ve+/vcq077+977+977+9IO+/ve+/vcSq77+977+9xbRcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0yKS5yZW1vdmVDbGFzcygnbGVmdDIwMCcpLmFkZENsYXNzKCdyaWdodDIwMCcpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoY3VycmVudEluZGV4LTEpLnJlbW92ZUNsYXNzKCdsZWZ0MTAwJykuYWRkQ2xhc3MoJ2xlZnQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKGN1cnJlbnRJbmRleCkucmVtb3ZlQ2xhc3MoJ2NlbnRlcicpLmFkZENsYXNzKCdsZWZ0MTAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShuZXh0SW5kZXgpLnJlbW92ZUNsYXNzKCdyaWdodDEwMCcpLmFkZENsYXNzKCdjZW50ZXInKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKG5leHRJbmRleCsxKS5yZW1vdmVDbGFzcygncmlnaHQyMDAnKS5hZGRDbGFzcygncmlnaHQxMDAnKTtcclxuXHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgbmV4dEluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKTtcclxuICAgIGluaXQoKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
