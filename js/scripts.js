(function ($) {

  Drupal.behaviors.BrowserClass = {
    attach: function ( context, settings ) {
      if ($.browser.msie && $.browser.version == 10) { // Detects IE10
        $("html").addClass("ie10");
      }
      if (!!navigator.userAgent.match(/Trident\/7\./)) { // Detects IE11
        $("html").addClass("ie11");
      }   
    }
  };

  Drupal.behaviors.headingHeightOnScroll = {
    attach: function ( context, settings ) {
      $('body', context).once('scroll', function () {
        $(window).scroll( function (){
          var scrollTop = $(window).scrollTop();
          // Add/Remove Class at 200px
          if ( scrollTop >= 200 ) {
            $('body').addClass( "js-scroll-down" );
          } else if ( scrollTop < 200 ) {
            $('body').removeClass( "js-scroll-down" );
          }
        });
      });
    }
  };

  Drupal.behaviors.mobileNav = {
    attach: function ( context, settings ) {
      $('#block-mainnavigation').click(function() {
        $('#block-mainnavigation > .menu').toggleClass('js-nav-open');
      });
    }
  };

})(jQuery);