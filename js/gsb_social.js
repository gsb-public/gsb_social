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
        //newurl = newurl.replace('gsbpublic1.dd:8082', 'gsb.stanford.edu');
        newurl = newurl.replace('public2-stage.', '');

        $('.gsb-social-buttons').hide();
        setTimeout(function() {
          $('.gsb-social-buttons').show();
        }, 1500);
        $('.gsb-social-buttons').each(function() {
          var $buttons = $(this);
          var baseurl = window.location.origin;
          $buttons.find('.sharrre-twitter').sharrre({
            share: {
              twitter: true
            },
            urlCount: true,
            enableCounter: true,
            enableHover: false,
            enableTracking: true,
            buttons: { twitter: { via: 'stanfordgsb', url: '/gsb-social/fake-twitter-count?url=' + newurl, count: true } },
            click: function(api, options){
              api.simulateClick('sharrre-twitter');
              api.openPopup('twitter');
            }
          });
          $buttons.find('.sharrre-facebook').sharrre({
            share: {
              facebook: true
            },
            urlCount: true,
            enableCounter: true,
            enableHover: false,
            enableTracking: true,
            buttons: { facebook: { via: 'stanfordgsb', url: '/gsb-social/fake-twitter-count?url=' + newurl, count: true } },
            click: function(api, options){
              api.simulateClick('sharrre-facebook');
              api.openPopup('facebook');
            }
          });
          $buttons.find('.sharrre-googleplus').sharrre({
            share: {
              googlePlus: true
            },
            url: 'http://sharrre.com',
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
            urlCount: true,
            enableHover: false,
            enableTracking: true,
            buttons: { via: 'stanfordgsb', url: '/gsb-social/fake-twitter-count?url=' + newurl, count: true } },
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
