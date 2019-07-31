$(document).ready(function(){

  $('.header').addClass('header--show');
  $('.banner__content').addClass('banner__content--show');
  $('.main-menu').addClass('main-menu--show');

  $(document).on('click', '.main-menu__btn', function () {
    $(this).addClass('main-menu__btn--hidden');
    $('.main-menu__block').addClass('main-menu__block--show');
    return false;
  });

  $(document).on('click', '.article-detail__structure a', function(){
		var id = $(this).attr('href');
		var top = 0;

		if ($(id).length != 0) {
			var top =  $(id).offset().top;
  		$('html, body').animate({ scrollTop: top }, 500);
		}
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

    history.pushState(null, null, window.location.pathname + id);

    return false;
  });

  $(document).on('click', '.article-main-list__item', function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 1110) {
      var article = $(this);
      var id = article.data('href');

      $('.article-main-preview__item--active').removeClass('article-main-preview__item--active');
      $(id).addClass('article-main-preview__item--active');

      $('.article-main-list__item').addClass('article-main-list__item--active');
      article.removeClass('article-main-list__item--active');

      setTimeout(function () {
        $('.article-main-list').append(article);
      }, 250);

      return false;
    }
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

  $(".carousel").owlCarousel({
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

  $(".carousel-sections").owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      '1110' : {
        items: 2,
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

  $(".carousel-services").owlCarousel({
    margin: 15,
    loop: false,
    nav: false,
    dots: true,
    responsive: {
      '768': {
        items: 3
      },
      '576': {
        items: 2
      },
      '320': {
        items: 1
      }
    }
  });

  var servicesList = $('.services-main__list');
  var masonryInit = false;

  $('input[type="tel"').inputmask('+7 (999) 999-99-99');

  servicesList.on('click', '.service-block', function () {
    var windowWidth = $(window).width();

    if (windowWidth >= 1110) {
      var id = $(this).data('id');
      // var block = $(this).clone();

      // servicesList.masonry('remove', this);
      // servicesList.append(block).masonry('appended', block);
      // servicesList.masonry();

      $('.services-main__item--active').removeClass('services-main__item--active');
      $('#' + id).addClass('services-main__item--active');

      $('.service-block--active').removeClass('service-block--active');
      $(this).addClass('service-block--active');

      return false;
    }
  });

  // function initMasonry () {
  //   var windowWidth = $(window).width();

  //   if (windowWidth < 1110) {
  //     if (masonryInit) {
  //       servicesList.masonry('destroy');

  //       masonryInit = false
  //     }
  //   } else {
  //     if (!masonryInit) {
  //       servicesList.masonry({
  //         columnWidth: '.service-block',
  //         gutter: 15,
  //         itemSelector: '.service-block'
  //       });

  //       masonryInit = true
  //     }
  //   }
  // }

  // initMasonry();

  // $(window).resize(function () {
  //   initMasonry();
  // });
});