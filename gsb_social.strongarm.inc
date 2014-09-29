<?php
/**
 * @file
 * gsb_social.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function gsb_social_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_codesnippet_create';
  $strongarm->value = array();
  $export['googleanalytics_codesnippet_create'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_custom_dimension';
  $strongarm->value = array(
    'indexes' => array(
      1 => array(
        'index' => 1,
        'value' => '[node:field-key-taxonomy:0]',
      ),
      2 => array(
        'index' => 2,
        'value' => '[node:field-key-taxonomy:1]',
      ),
      3 => array(
        'index' => 3,
        'value' => '[node:field-key-taxonomy:2]',
      ),
      4 => array(
        'index' => 4,
        'value' => '[node:content-type]',
      ),
      5 => array(
        'index' => 5,
        'value' => '',
      ),
      6 => array(
        'index' => 6,
        'value' => '',
      ),
      7 => array(
        'index' => 7,
        'value' => '',
      ),
      8 => array(
        'index' => 8,
        'value' => '',
      ),
      9 => array(
        'index' => 9,
        'value' => '',
      ),
      10 => array(
        'index' => 10,
        'value' => '',
      ),
      11 => array(
        'index' => 11,
        'value' => '',
      ),
      12 => array(
        'index' => 12,
        'value' => '',
      ),
      13 => array(
        'index' => 13,
        'value' => '',
      ),
      14 => array(
        'index' => 14,
        'value' => '',
      ),
      15 => array(
        'index' => 15,
        'value' => '',
      ),
      16 => array(
        'index' => 16,
        'value' => '',
      ),
      17 => array(
        'index' => 17,
        'value' => '',
      ),
      18 => array(
        'index' => 18,
        'value' => '',
      ),
      19 => array(
        'index' => 19,
        'value' => '',
      ),
      20 => array(
        'index' => 20,
        'value' => '',
      ),
    ),
  );
  $export['googleanalytics_custom_dimension'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_custom_metric';
  $strongarm->value = array(
    'indexes' => array(
      1 => array(
        'index' => 1,
        'value' => '',
      ),
      2 => array(
        'index' => 2,
        'value' => '',
      ),
      3 => array(
        'index' => 3,
        'value' => '',
      ),
      4 => array(
        'index' => 4,
        'value' => '',
      ),
      5 => array(
        'index' => 5,
        'value' => '',
      ),
      6 => array(
        'index' => 6,
        'value' => '',
      ),
      7 => array(
        'index' => 7,
        'value' => '',
      ),
      8 => array(
        'index' => 8,
        'value' => '',
      ),
      9 => array(
        'index' => 9,
        'value' => '',
      ),
      10 => array(
        'index' => 10,
        'value' => '',
      ),
      11 => array(
        'index' => 11,
        'value' => '',
      ),
      12 => array(
        'index' => 12,
        'value' => '',
      ),
      13 => array(
        'index' => 13,
        'value' => '',
      ),
      14 => array(
        'index' => 14,
        'value' => '',
      ),
      15 => array(
        'index' => 15,
        'value' => '',
      ),
      16 => array(
        'index' => 16,
        'value' => '',
      ),
      17 => array(
        'index' => 17,
        'value' => '',
      ),
      18 => array(
        'index' => 18,
        'value' => '',
      ),
      19 => array(
        'index' => 19,
        'value' => '',
      ),
      20 => array(
        'index' => 20,
        'value' => '',
      ),
    ),
  );
  $export['googleanalytics_custom_metric'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_debug';
  $strongarm->value = 0;
  $export['googleanalytics_debug'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_tracklinkid';
  $strongarm->value = 0;
  $export['googleanalytics_tracklinkid'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_trackurlfragments';
  $strongarm->value = 0;
  $export['googleanalytics_trackurlfragments'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'googleanalytics_trackuserid';
  $strongarm->value = 0;
  $export['googleanalytics_trackuserid'] = $strongarm;

  return $export;
}
