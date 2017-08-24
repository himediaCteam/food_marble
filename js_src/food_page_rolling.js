$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 1;


  function init(){
    $('.food-image-list-item.fs1').eq(0).addClass('center');
    $('.food-image-list-item.fs1').eq(1).addClass('right');
    $('.food-image-list-item.fs1').eq(2).addClass('left');
  }


  function moveLeft() {

    if (nextIndex >= $('.food-image-list-item.fs1').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs1').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs1').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs1').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  // 실행부
  init();

  $('.food-image-list.fs1').on('click', function(){
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