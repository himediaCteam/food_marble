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
