<?php
/**
 * @file
 * gsb_social.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function gsb_social_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
