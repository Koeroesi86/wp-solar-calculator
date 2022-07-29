<?php
/*
Plugin Name:  Solar Calculator
Description:  Solar calculator for WordPress: [solar_calculator]
Version:      1.0.6
Author:       Kőrösi Krisztián
Author URI:   https://chris.koro.si
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
*/

function wpsolarscripts() {
    wp_register_script(
        'wp-solar-calculator-script',
        esc_url(plugins_url('static/bundle.js', __FILE__)),
        array (),
        '1.0.6',
        false
    );

    wp_enqueue_script('wp-solar-calculator-script');
}
add_action("wp_enqueue_scripts", "wpsolarscripts");

// function that runs when shortcode is called
function wp_solar_calculator($atts, $content = null, $tag = 'solar_calculator') {
    $parsed = shortcode_atts(array(
        'id' => 'solar-calculator-root',
        'config' => esc_url(plugins_url('data.json', __FILE__))
    ), $atts, $tag);

    $html = "
      <div id='".$parsed['id']."'></div>
      <script>window.renderSolarCalculator('#".$parsed['id']."', '".$parsed['config']."', '".plugins_url('', __FILE__)."')</script>
    ";

    return $html;
}

// register shortcode
add_shortcode('solar_calculator', 'wp_solar_calculator');
