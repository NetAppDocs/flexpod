$(document).ready(function() {
  $("#version-dropdown-ie-i18n-menu").on('click', function() {
    $('#version-dropdown-n-property-navigation-bar__menu--language-selector').toggle();
  });

  $("#version-dropdown-ie-i18n-menu").click(function () {
    $("#version-dropdown-ie-i18n-menu").toggleClass('active');
  });

  $(document).on('click', function(event) {
    if(!$(event.target).closest('#version-dropdown-ie-i18n-menu').length
      && $('#version-dropdown-n-property-navigation-bar__menu--language-selector').is(":visible")) {
        $("#version-dropdown-ie-i18n-menu").toggleClass('active');
        $('#version-dropdown-n-property-navigation-bar__menu--language-selector').hide();     
    }
    if($("#page").hasClass("n-off-canvas-menu--open")) {    
      $('#search-demo-container').hide();
    } else {
      $('#search-demo-container').show();
    }
  });

  $(document).on('click','#version-dropdown a', function(){
    var version = $(this).find('.version').text();
    var version_name = $(this).find('.notranslate span').eq(0).text();
    $('#version-dropdown a').parent('li').removeClass('hide');
    $(this).parent('li').addClass('hide');
    $('#version-dropdown .ie-i18n-lang .version-title').text(version_name);
    if(version && version != " ") {
      $('#version-dropdown .ie-i18n-lang .version').text(version);
    }
    else {
      $('#version-dropdown .ie-i18n-lang .version').text('');
    } 
  });
  $('#version-dropdown a').eq(0).parent('li').addClass('hide');
});