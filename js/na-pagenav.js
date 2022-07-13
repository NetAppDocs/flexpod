$(document).ready(function() {
  const MASTHEAD_OFFSET = 216;
  const SECTIONS = $("main h2, main h3");
  // PAGE NAV - Init
  if(SECTIONS.length == 0) {
    $(".page-nav-container").remove();
    $("#pagenav-css").attr("disabled", "disabled");
  } else {
    $(".page-nav-title").css('display','block');
    for (var i = 0; i < SECTIONS.length; i++) {
      var sectionId = $(SECTIONS[i]).attr('id');
      var sectionName = $(SECTIONS[i]).text();
      var subClass = $(SECTIONS[i]).is("h3") ? ' page-nav__sublink' : '';
      $("#page-menu").append('<li class="page-nav-item"><a href="#'+sectionId+'" class="page-nav__link'+subClass+'">'+sectionName+'</a></li>');
    }
    $(".page-nav__link").first().addClass('page-nav__link--active');
  }

  // PAGE NAV - Click
  $(".page-nav__link").click(function(event) {
    $(".page-nav__link").removeClass('page-nav__link--active');
    var target = $(event.target);
    target.addClass('page-nav__link--active');
    location.hash = event.target.hash;
  });

  // PAGE NAV - Scroll
  $(window).on('resize scroll', function() {
    var activeSection = getActiveSection(SECTIONS, MASTHEAD_OFFSET);
    if(activeSection) {
      var activeHref = $(activeSection).attr('id');
      if(location.hash != "#"+activeHref) {
        $(".page-nav__link").removeClass('page-nav__link--active');
        $("#page-menu a[href=#"+activeHref+"]").addClass('page-nav__link--active');
        if(history.replaceState) {
          history.replaceState(null, null, "#"+activeHref);
        }
      }
    }
  });

  $(".n-pdf-button").click(function(){
    $(this).toggleClass("active");
  });

  $.fn.isVisibleAndInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom && $(this).is(":visible");
  };

  $(window).on('resize scroll', function() {

    var h = 50;

    // header 1
    if ($('.n-top-hat').length && $('.n-top-hat').isVisibleAndInViewport()) {
      h += $('.n-top-hat').outerHeight(true);
    }
    // header 2
    if ($('.n-property-bar').length && $('.n-property-bar').isVisibleAndInViewport()) {
      h += $('.n-property-bar').outerHeight(true);
    }
    
    // request + edit + learn
    if ($('.page-nav-contribute').length && $('.page-nav-contribute').isVisibleAndInViewport()) {
      h += $('.page-nav-contribute').outerHeight(true);
    }

    if ($('#flavor-dropdown').length && $('#flavor-dropdown').isVisibleAndInViewport()) {
      h += $('#flavor-dropdown').outerHeight(true);
    }

    if ($('#version-dropdown-new').length && $('#version-dropdown-new').isVisibleAndInViewport()) {
      h += $('#version-dropdown-new').outerHeight(true);
    }

    if ($('.n-footer').length && $('.n-footer').isVisibleAndInViewport()) {
      h += $('.n-footer').outerHeight(true);
    }
    
    if ($('.page-nav-links').length) {
      $('.page-nav-links').css( { height: `calc(100vh - ${h}px)` } );
    }
    
  });

  $(window).trigger('resize');

});

function getActiveSection(sections, offset) {
  var scrollPosition = $(window).scrollTop()+offset+5;
  var activeSection;
  for (var i = 0; i < sections.length; i++) {
    var el = $(sections[i]);
    var activePosition = el.offset().top ;
    if(activePosition > scrollPosition) {
      break;
    }

    activeSection = sections[i];
  }

  return activeSection;
}
