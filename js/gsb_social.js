(function ($) {

  Drupal.behaviors.gsb_social = {
    attach: function (context, settings) {
      $(document).ready(function() {
        // Set Google Analytics dimensions - key taxonomies and node type
        if (Drupal.settings.gsb_social.key_tax1 != '') {
          ga('set', 'dimension1', Drupal.settings.gsb_social.key_tax1);
          alert('.key_tax1 = '+ Drupal.settings.gsb_social.key_tax1);
        }
        if (Drupal.settings.gsb_social.key_tax2 != '') {
          ga('set', 'dimension2', Drupal.settings.gsb_social.key_tax2);
          alert('.key_tax2 = '+ Drupal.settings.gsb_social.key_tax2);
        }
        if (Drupal.settings.gsb_social.key_tax3 != '') {
          ga('set', 'dimension3', Drupal.settings.gsb_social.key_tax3);
          alert('.key_tax3 = '+ Drupal.settings.gsb_social.key_tax3);
        }
        if (Drupal.settings.gsb_social.type != '') {
          ga('set', 'dimension4', Drupal.settings.gsb_social.type);
          alert('.type = '+ Drupal.settings.gsb_social.type);
        }
        // config the social sharrre buttons
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
