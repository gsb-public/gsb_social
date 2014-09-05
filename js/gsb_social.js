(function ($) {

  Drupal.behaviors.gsb_social = {
    attach: function (context, settings) {
      $(document).ready(function() {
        $('.sharrre-twitter').sharrre({
          share: {
            twitter: true
          },
          enableHover: false,
          enableTracking: true,
          buttons: { twitter: {via: '_JulienH'}},
          click: function(api, options){
            api.simulateClick();
            api.openPopup('twitter');
          }
        });
        $('.sharrre-facebook').sharrre({
          share: {
            facebook: true
          },
          enableHover: false,
          enableTracking: true,
          buttons: { facebook: {action: 'share', title: 'Share'}},  
          click: function(api, options){
            ga('send', 'social', 'facebook', 'share', document.location.href);
            api.simulateClick();
            api.openPopup('facebook');
          }
        });
        $('.sharrre-googleplus').sharrre({
          share: {
            googlePlus: true
          },
          urlCurl: '/gsb-social/sharrre/google-plus-count',
          enableHover: false,
          enableTracking: true,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('googlePlus');
          }
        }); 
        $('.sharrre-linkedin').sharrre({
          share: {
            linkedin: true
          },
          enableHover: false,
          enableTracking: true,
          click: function(api, options){
            api.simulateClick();
            api.openPopup('linkedin');
          }
        }); 

      
      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_social

  Drupal.gsb_social = Drupal.gsb_social || {};

  Drupal.settings.gsb_social = Drupal.settings.gsb_social || {};

}(jQuery));