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

  $(document).on('click', '.tabs-panel__item', function () {
    var tabsPanel = $(this).parent('.tabs-panel');
    var tabsContent = tabsPanel.next('.tabs-content');
    var id = $(this).attr('href');

    tabsPanel.find('.tabs-panel__item--active').removeClass('tabs-panel__item--active');
    $(this).addClass('tabs-panel__item--active');

    tabsContent.find('.tabs-content__item--active').removeClass('tabs-content__item--active');
    $(id).addClass('tabs-content__item--active');

    return false;
  });

  $('.slidet-vertical').on('click', '.slidet-vertical__btn', function () {
    var btn = $(this);
    var parent = btn.parent('.slidet-vertical');
    var activeBlock = parent.find('.slidet-vertical__item--active');

    activeBlock.addClass('slidet-vertical__item--hidden');
    activeBlock.next('.slidet-vertical__item').addClass('slidet-vertical__item--active');
    activeBlock.removeClass('slidet-vertical__item--active');

    setTimeout(function () {
      btn.before(activeBlock);
      activeBlock.removeClass('slidet-vertical__item--hidden');
    }, 500);

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

  $(".owl-carousel").owlCarousel({
    margin: 30,
    loop: true,
    responsive: {
      '1110' : {
        items: 3,
        nav: true,
        dots: false
      },
      '920' : {
        items: 2,
        nav: true,
        dots: false
      },
      '768': {
        items: 2,
        nav: false,
        dots: true
      },
      '576': {
        items: 1,
        nav: false,
        dots: true
      },
      '320': {
        items: 1,
        nav: false,
        dots: true
      }
    }
  });

  var servicesList = $('.services-main__list');
  var masonryInit = false;

  $('input[type="tel"').inputmask('+7 (999) 999-99-99')

  servicesList.on('click', '.service-block', function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 1110) {
      var id = $(this).data('id');
      var block = $(this).clone();

      servicesList.masonry('remove', this);
      servicesList.append(block).masonry('appended', block);
      servicesList.masonry();

      $('.services-main__item--active').removeClass('services-main__item--active');
      $('#' + id).addClass('services-main__item--active');

      return false;
    }
  });

  function initMasonry () {
    var windowWidth = $(window).width();

    if (windowWidth < 1110) {
      if (masonryInit) {
        servicesList.masonry('destroy');

        masonryInit = false
      }
    } else {
      if (!masonryInit) {
        servicesList.masonry({
          columnWidth: '.service-block',
          gutter: 15,
          itemSelector: '.service-block'
        });

        masonryInit = true
      }
    }
  }

  initMasonry();

  $(window).resize(function () {
    initMasonry();
  });
});