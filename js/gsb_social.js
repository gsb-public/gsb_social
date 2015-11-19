(function ($) {

  Drupal.behaviors.gsb_social = {
    attach: function (context, settings) {
      $(document).ready(function() {
        // config the social sharrre buttons

        // Get the current url for twitter
        var newurl = document.location.href;
        // Strip paramaters
        newurl = newurl.replace(window.location.search, "");
        // Force protocol to http.
        newurl = newurl.replace(/.*?:\/\//g, "http://");

        $('.gsb-social-buttons').each(function() {
          var $buttons = $(this);

          $buttons.find('.sharrre-twitter').sharrre({
            share: {
              twitter: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            buttons: { twitter: { via: 'stanfordbiz', url: newurl } },
            click: function(api, options){
              api.simulateClick('sharrre-twitter');
              api.openPopup('twitter');
            }
          });
          $buttons.find('.sharrre-facebook').sharrre({
            share: {
              facebook: true
            },
            enableHover: false,
            enableTracking: true,
            buttons: { facebook: {action: 'share', title: 'Share'}},
            click: function(api, options){
              api.simulateClick('sharrre-facebook');
              api.openPopup('facebook');
            }
          });
          $buttons.find('.sharrre-googleplus').sharrre({
            share: {
              googlePlus: true
            },
            urlCurl: '/gsb-social/sharrre/google-plus-count',
            enableHover: false,
            enableTracking: true,
            click: function(api, options){
              api.simulateClick('sharrre-googleplus');
              api.openPopup('googlePlus');
            }
          });
          $buttons.find('.sharrre-linkedin').sharrre({
            share: {
              linkedin: true
            },
            enableHover: false,
            enableTracking: true,
            click: function(api, options){
              api.simulateClick('sharrre-linkedin');
              api.openPopup('linkedin');
            }
          });
        });
      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_social

  Drupal.gsb_social = Drupal.gsb_social || {};

  Drupal.settings.gsb_social = Drupal.settings.gsb_social || {};

}(jQuery));
