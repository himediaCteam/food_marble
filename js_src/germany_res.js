$(function(){

  var calculateRatio = {
    // jQuery DOM ����� �����ϴ� ������Ƽ

    $imageTop : $('.res-image-top'),
    $imageBig : $('.res-image-big'),
    $imageThumb : $('.image-thumbnail'),

    // �ش� �κ��� ���� �����ϴ� ��ü ������Ƽ

    //areaWidth : 0,
    //areaHeight : 0,
    //imageWidth : 0,
    //imageHeight : 0,
    //areaRatio : 0,
    //imageRatio : 0,

    // �ش� �κ��� ���� ����ϴ� �޼ҵ�
    // ����ũ ���� ���
    areaValue : function(){
      this.areaWidth = parseInt(this.$imageTop.css('width'));
      this.areaHeight = parseInt(this.$imageTop.css('height'));
      this.areaRatio = this.areaWidth / this.areaHeight;
    },
    // �̹��� ���
    imageValue : function( $image ){
      this.imageWidth = parseInt( $image.css('width') );
      this.imageHeight = parseInt( $image.css('height') );
      this.imageRatio = this.imageWidth / this.imageHeight;
    },
    // ū �̹����� ����
    applyBig : function(){
      this.areaValue();
      this.imageValue(this.$imageBig);
      if( this.areaRatio > this.imageRatio ){
        this.$imageBig.removeClass('full-height').addClass('full-width');
      } else {
        this.$imageBig.removeClass('full-width').addClass('full-height');
      }
    },
    // ���� �̹����� ����
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
    // ���콺 ������ �̹��� ���� �Լ�
    changeImage : function( $overImage ){
      var src = $overImage.children().attr('src');
      $('.res-image-big').attr('src', src);

    }
  };
  // �Լ� ����
  calculateRatio.applyBig();
  calculateRatio.applyThumb();

  // �̺�Ʈ ����
  $('.res-image-bottom-wrap').on('click', function(){
    calculateRatio.changeImage( $(this) );
    calculateRatio.applyBig();
  });
  

});