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
          buttons: { twitter: {}},
          click: function(api, options){
            api.simulateClick('sharrre-twitter');
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
            ga('send', 'social', {
              'socialNetwork': 'facebook',
              'socialAction': 'share',
              'socialTarget': document.location.href
            });
            api.simulateClick('sharrre-facebook');
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
            api.simulateClick('sharrre-googleplus');
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
            api.simulateClick('sharrre-linkedin');
            api.openPopup('linkedin');
          }
        }); 

      
      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_social

  Drupal.gsb_social = Drupal.gsb_social || {};

  Drupal.settings.gsb_social = Drupal.settings.gsb_social || {};

}(jQuery));
