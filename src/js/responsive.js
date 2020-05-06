define([], function () {

    require(['mainVisualSlide']);
    require(['contentsSlide']);
    require(['parellaxScroll'], function (parellaxScroll) {
        parellaxScroll.setDeviceFunction();
    });
    require(['moveTop'], function (moveTop) {
        moveTop.initialize({
            buttonElement: '[data-move="top"]'
        })
    });
    require(['jquery', 'lazyLoad'], function ($, lazyload) {
        $(function () {
            $('img.lazy').lazyload({effect: 'fadeIn'});
        });
    })

    require(['leftBanner'], function (leftBanner) {
        leftBanner.initialize({
            leftMenuWrapper: '#left-menu-wrapper',
            leftMenuButton: '[data-tooltip]',
            leftToggleButton: '.left-menu-bar--active-btn',
            moblieGnbOpenButton: '[data-gnb-active="mobile-button"]',
            mobileLeftBannerDim: '.left-menu-bg--is-mobile'
        });
    });

    require(['changeWrapperBackground'], function(changeWrapperBackground){
        changeWrapperBackground.initialize();
    });

    require(['moveNextContent'], function (moveNextContent) {
        moveNextContent.initialize();
    })

    require(['modal'], function (modal) {
        modal();
    })

});
