<?php 

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Admin Class
 * 
 * Handles all the different features and functions
 * for the front end pages.
 * 
 * @package DokanShippingRateByDistance
 * @since 1.0.0
 */
class DSRBD_Shipping{
    // Register and Enqeue Jquery
            
	function dsrbd_shipping_vendor_script() {
        global $wp;

         if ( isset( $wp->query_vars['settings'] ) && $wp->query_vars['settings'] == 'shipping' ) {
            // Vendor Shipping - Dhara
            wp_deregister_script( 'dokan-pro-vue-frontend-shipping' );
            wp_dequeue_script( 'dokan-pro-vue-frontend-shipping' );
            wp_enqueue_script( 'dsrbd-dokan-pro-vue-frontend-shipping', DokanShippingRateByDistance_URL . 'includes/vendor/js/dsrbd-vue-pro-frontend-shipping.js', array('jquery', 'dokan-vue-vendor', 'dokan-vue-bootstrap' ),'20201208', true );
            // echo '<pre>';
            // print_r(get_option("woocommerce_flat_rate_1_settings"));
            // echo '</pre>';
            $localize_array = array(
                    'nonce'             => wp_create_nonce( 'dokan_shipping_nonce' ),
                    'allowed_countries' => WC()->countries->get_allowed_countries(),
                    'continents'        => WC()->countries->get_continents(),
                    'states'            => WC()->countries->get_states(),
                    'shipping_class'    => WC()->shipping->get_shipping_classes(),
                    'i18n'              => array( 'dokan' => dokan_get_jed_locale_data( 'dokan' ) ),
                    'processing_time'   => dokan_get_shipping_processing_times(),
                    'flat_rate_settings' => get_option("woocommerce_flat_rate_1_settings")
            );
            wp_localize_script( 'dsrbd-dokan-pro-vue-frontend-shipping', 'dokanShipping', $localize_array );
            wp_enqueue_script( 'custom-vendor',DokanShippingRateByDistance_URL . 'includes/vendor/js/custom-vendor.js', array('jquery'),'20201208', true );
             wp_enqueue_style( 'custom-vendor',DokanShippingRateByDistance_URL . 'includes/vendor/css/custom-vendor.css', '20201208');
        }
    

	}
	function init_hooks(){
    	add_action( 'wp_enqueue_scripts', array($this, 'dsrbd_shipping_vendor_script'),50 );
	   
    }
}