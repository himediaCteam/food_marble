$(function(){

  // 선언부

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;


  function init(){
    $('.food-image-list-item.fs1').eq(0).addClass('center');
    $('.food-image-list-item.fs1').eq(1).addClass('right');
    $('.food-image-list-item.fs1').eq(2).addClass('left');
    $('.food-image-list-item.fs2').eq(0).addClass('center');
    $('.food-image-list-item.fs2').eq(1).addClass('right');
    $('.food-image-list-item.fs2').eq(2).addClass('left');
    $('.food-image-list-item.fs3').eq(0).addClass('center');
    $('.food-image-list-item.fs3').eq(1).addClass('right');
    $('.food-image-list-item.fs3').eq(2).addClass('left');
  }


  function moveLeft1() {

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

  function moveLeft2() {

    if (nextIndex >= $('.food-image-list-item.fs2').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs2').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs2').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs2').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveLeft3() {

    if (nextIndex >= $('.food-image-list-item.fs3').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어주면 뒷 순서부터 차례대로 매칭됨
    $('.food-image-list-item.fs3').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.food-image-list-item.fs3').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.food-image-list-item.fs3').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }


  function moveRight1(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs1').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs1').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs1').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs1').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs1').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  function moveRight2(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs2').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs2').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs2').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs2').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs2').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  function moveRight3(){

    if (nextIndex <= -1){
      nextIndex=$('.food-image-list-item.fs3').length-1;
    }
    if( prevIndex >= $('.food-image-list-item.fs3').length ){
      prevIndex = 0;
    }


    $('.food-image-list-item.fs3').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.food-image-list-item.fs3').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.food-image-list-item.fs3').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex+1;
    nextIndex--;

  }

  // 푸드 페이지 아이콘 슬라이딩
  $(function(){

    $('.food-icon').on('click', function(e){

      e.preventDefault();

      var pageIndex = ( $(this).index('.food-icon') % 3 );

      console.log(pageIndex);

      $('.food-icon>a').removeClass('on');
      $('.food-icon').eq(pageIndex).children('a').addClass('on');

      $('.food-page').removeClass('on');
      $('.food-page').eq(pageIndex).addClass('on');
    })

  });



  // 실행부
  init();

  $('.food-image-list-arrow.s1.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft1();
  });
  $('.food-image-list-arrow.s2.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft2();
  });
  $('.food-image-list-arrow.s3.right').on('click', function(){
    nextIndex = currentIndex + 1;
    moveLeft3();
  });

  $('.food-image-list-arrow.s1.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight1();
  });
  $('.food-image-list-arrow2.s2.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight2();
  });
  $('.food-image-list-arrow3.s3.left').on('click', function(){

    nextIndex = currentIndex - 1;
    prevIndex = currentIndex + 1;
    moveRight3();
  });

});