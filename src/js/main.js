$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    navigation: false,
    slidesNavigation: true,
    css3: true,
    menu: '#menu',
    controlArrows: true ,
    responsiveWidth: 1300,
    

  }); 
  
});


    

$(document).ready(function () {

    // feat image ratio size 소식 썸네일 이미지 가로사진 조절 
    $('.featImage > img').each(function (index, item) {
        if ($(this).height() / $(this).width() < 0.567) {
            $(this).addClass('landscape').removeClass('portrait');
        } else {
            $(this).addClass('portrait').removeClass('landscape');
        }
    });
});






//  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ //






