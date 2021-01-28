var finna = (function finnaModule() {
  return {
    init: function init() {
      var modules = [];

      $.each(modules, function initModule(index, module) {
        if (typeof finna[module] !== 'undefined') {
          finna[module].init();
        }
      });
    }
  };
})();

$(document).ready(function onReady() {
  finna.init();
});

$(document).ready(function onFinnaTabsNavReady() {
  $('.finna-tabs-nav').each(function doFinnaTabsNavLayout() {
    var activeUl = $(this).find(
      '.finna-nav > li.active > ul, .finna-nav > li.active-trail > ul'
    );
    if (activeUl.length > 0 && $(this).height() > 0) {
      $(this).css('height', $(this).children('.finna-nav').height() + activeUl.height());
    }
  });
});

/*global finna */
finna.layout = (function finnaLayout(_holder) {
  var initToolTips = function initToolTips() {
    var $holder = _holder ? _holder : $(document);

    var currentOpenTooltips = [];

    $holder.find('[data-toggle="tooltip"]')
      .on('show.bs.tooltip', function onShowTooltip() {
        var $this = $(this);

        $(currentOpenTooltips).each(function hideOtherTooltips() {
          if ($(this)[0] !== $this[0]) {
            $(this).tooltip('hide');
          }
        });

        currentOpenTooltips = [$this];
      })
      .on('hidden.bs.tooltip', function onHideTooltip(event) {
        $(event.target).data('bs.tooltip').inState.click = false;
      })
      .tooltip({ trigger: 'click', viewport: '.pl-js-pattern-example' });

    $holder.find('[data-toggle="tooltip"] > i').on('click', function onClickTooltip(event) {
      event.preventDefault();
    });

    $('html').on('click', function onClickHtml(event) {
      if (typeof $(event.target).parent().data('original-title') == 'undefined' && typeof $(event.target).data('original-title') == 'undefined') {
        $('[data-toggle="tooltip"]').tooltip('hide');
        currentOpenTooltips = [];
      }
    })
  };

  var isTouchDevice = function isTouchDevice() {
    return (('ontouchstart' in window)
      || (navigator.maxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0)); // IE10, IE11, Edge
  };

  return {
    isTouchDevice: isTouchDevice,
    initToolTips: initToolTips,
    init: function init() {
      initToolTips();
    }
  }
})();

$(document).ready(function onDocumentReady() {
  finna.layout.init();
});
