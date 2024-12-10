<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;

$tabladepartaments = $wpdb->prefix . 'ubigeopedacg_departaments';
$wpdb->query("DROP TABLE IF EXISTS $tabladepartaments");

$tablaprovinces = $wpdb->prefix . 'ubigeopedacg_provinces';
$wpdb->query("DROP TABLE IF EXISTS $tablaprovinces");

$tabladistricts = $wpdb->prefix . 'ubigeopedacg_districts';
$wpdb->query("DROP TABLE IF EXISTS $tabladistricts");