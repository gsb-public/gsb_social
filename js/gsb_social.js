(function ($) {

  Drupal.behaviors.gsb_social = {
    attach: function (context, settings) {
      $(document).ready(function() {
        
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
        
        // config scroll depth 

        if ($.scrollDepth) {
          $.scrollDepth({
            minHeight: 2000,
          });
        }

        // config riveted (time tracking)

        if (riveted) {
          riveted.init({
            reportInterval: 10,  // Default: 5
            idleTimeout: 20,      // Default: 30
            nonInteraction: true  // Default: true
          });
        }        

        // config event clicks

        // Top Stories
        $(".content .node-idea-story .group-right .top-stories-wrapper a").click(function() {
          alert('click top story');
        });        

        // Explore More
        $(".content .node-idea-story .group-left .explore-more-content .field-name-title a").click(function() {
          alert('click explore more');
        });        

        // Related Content
        $(".content .node-idea-story .group-right .field-name-field-related-faculty a").click(function() {
          alert('click related content faculty');
        });        

        $(".content .node-idea-story .group-right .field-name-field-related-idea-story a").click(function() {
          alert('click related content idea story');
        });        

        $(".content .node-idea-story .group-right .field-collection-item-field-related-other-unlimited a").click(function() {
          alert('click related content other');
        });        

        // Top Key Taxonomy Terms
        $(".content .node-idea-story .group-left .group_wrapper_header .field-name-field-key-taxonomy a").click(function() {
          alert('click top key taxonomy');
        });        

        // Bottom Taxonomy
        $(".content .node-idea-story .group-left .group_wrapper_taxonomy a").click(function() {
          alert('click bottom key taxonomy');
        });        

      }); // end document.ready 
    } // end attach
  }; // end Drupal.behaviors.gsb_social

  Drupal.gsb_social = Drupal.gsb_social || {};

  Drupal.settings.gsb_social = Drupal.settings.gsb_social || {};

}(jQuery));
