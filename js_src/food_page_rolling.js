$(function(){

  // 선언부

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

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  // 실행부
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