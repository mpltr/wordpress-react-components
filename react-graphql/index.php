<?php

get_header();

$posts = get_posts(['fields' => 'ids']); ?>

<div data-react-page="home">
    <h1>We're putting posts here</h1>
   <div data-react-component="articles"></div>

</div>


<? get_footer();

?>
