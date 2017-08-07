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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlX3JvbGxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImltYWdlX3JvbGxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMDUuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcblxyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMCkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEoMSkuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSgyKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKDMpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcSg0KS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcclxuICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVMZWZ0KCl7XHJcbiAgICAgIGlmKG5leHRJbmRleCA+PSAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykubGVuZ3RoKXtcclxuICAgICAgICBuZXh0SW5kZXggPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBlcSgp77+977+9IO+/ve+/ve+/ve+/vSDvv73vv73vv73vv70g77+91r7vv70g77+91rjvv70g77+977+9IO+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vSDvv73vv73vv73KtO+/ve+/ve+/vSDvv73vv73Equ+/ve+/vcW0XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgtMikucmVtb3ZlQ2xhc3MoJ2xlZnQyMDAnKS5hZGRDbGFzcygncmlnaHQyMDAnKTtcclxuICAgICAgJCgnLmV2ZW50LWxpc3QtaXRlbS1pbWFnZScpLmVxKGN1cnJlbnRJbmRleC0xKS5yZW1vdmVDbGFzcygnbGVmdDEwMCcpLmFkZENsYXNzKCdsZWZ0MjAwJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShjdXJyZW50SW5kZXgpLnJlbW92ZUNsYXNzKCdjZW50ZXInKS5hZGRDbGFzcygnbGVmdDEwMCcpO1xyXG4gICAgICAkKCcuZXZlbnQtbGlzdC1pdGVtLWltYWdlJykuZXEobmV4dEluZGV4KS5yZW1vdmVDbGFzcygncmlnaHQxMDAnKS5hZGRDbGFzcygnY2VudGVyJyk7XHJcbiAgICAgICQoJy5ldmVudC1saXN0LWl0ZW0taW1hZ2UnKS5lcShuZXh0SW5kZXgrMSkucmVtb3ZlQ2xhc3MoJ3JpZ2h0MjAwJykuYWRkQ2xhc3MoJ3JpZ2h0MTAwJyk7XHJcblxyXG4gICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XHJcbiAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
