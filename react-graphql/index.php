<?php

get_header();

$posts = get_posts();

foreach($posts as $post): ?>
    <div data-react="Article" data-props='<?= json_encode($post); ?>'></div>
<? endforeach; 

get_footer();

?>
