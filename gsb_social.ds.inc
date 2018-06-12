<?php
/**
 * @file
 * gsb_social.ds.inc
 */

/**
 * Implements hook_ds_custom_fields_info().
 */
function gsb_social_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'social_buttons_bottom';
  $ds_field->label = 'Social buttons bottom';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->ui_limit = 'announcement|default
idea_story|default
voices|default
school_story|default';
  $ds_field->properties = array(
    'block' => 'gsb_social|gsb_social_buttons',
    'block_render' => '3',
  );
  $export['social_buttons_bottom'] = $ds_field;

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'social_buttons_top';
  $ds_field->label = 'Social buttons top';
  $ds_field->field_type = 6;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->ui_limit = 'announcement|default
idea_story|default
voices|default
school_story|default';
  $ds_field->properties = array(
    'block' => 'gsb_social|gsb_social_buttons',
    'block_render' => '3',
  );
  $export['social_buttons_top'] = $ds_field;

  return $export;
}
