<?php

get_header();

$posts = get_posts(['fields' => 'ids']);

foreach($posts as $post_id): ?>
    <div data-react="Article" data-props='<?= json_encode(['id' => $post_id]); ?>'></div>
<? endforeach; 

get_footer();

?>
