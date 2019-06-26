$(document).ready(function(){

  $(document).on('click', '.main-menu__btn', function () {
    $(this).addClass('main-menu__btn--hidden');
    $('.main-menu__block').addClass('main-menu__block--show');
    return false;
  });

  $(document).on('click', '.main-menu__close', function () {
    $('.main-menu__btn--hidden').removeClass('main-menu__btn--hidden');
    $('.main-menu__block--show').removeClass('main-menu__block--show');
    return false;
  });

  $(window).scroll(function(){
    var menuTop = 230;
    var scrollTop = $(this).scrollTop();

    if (scrollTop >= menuTop) {
      $('.main-menu').addClass('main-menu--fixed');
    } else {
      $('.main-menu').removeClass('main-menu--fixed');
    }
  });

  $('.popup').fancybox({
    baseClass: 'popup'
  });

  $(document).on('change', '.form__file input', function () {
    var inputText = 'Прикрепить файл'
    if (this.files.length > 0) {
      inputText = this.files[0].name;
    }

    $(this).prev('span').text(inputText);
  });
});