<?php

function enqueue_scripts() {
    wp_enqueue_script(
        'react_components',
        get_template_directory_uri() . '/dist/index.js',
        [],
        false,
        true 
    );
}

add_action('wp_enqueue_scripts', 'enqueue_scripts');