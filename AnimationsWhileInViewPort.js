$(document).ready(function() {

  var $animationElements = $('.animation-element');
  var $window = $(window);

  // Disable triggering on small devices
  var isMobile = window.matchMedia("only screen and (max-width: 768px)");
  if (isMobile.matches) {
      $animationElements.removeClass('animation-element');
  }

  function checkIfInView() {

      var windowHeight = $window.height();
      var windowTopPosition = $window.scrollTop();
      var windowBottomPosition = (windowTopPosition + windowHeight);

      $.each($animationElements, function () {
          var $element = $(this);
          var elementHeight = $element.outerHeight();
          var elementTopPosition = $element.offset().top;
          var elementBottomPosition = (elementTopPosition + elementHeight);

          // Check if the current element is within viewport
          if ((elementBottomPosition >= windowTopPosition) &&
              (elementTopPosition <= windowBottomPosition)) {
              $element.removeClass('hidden').addClass('in-view');
          } else {
              $element.removeClass('in-view').addClass('hidden');
          }
      });
  }

  $window.on('scroll resize', checkIfInView);
  $window.trigger('scroll');
});