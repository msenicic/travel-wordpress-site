<?php
/* Template Name: Home */
get_header(); ?>
<div id="content" class="site-content">
    <main id="main" class="page-main site-main" role="main">
        <?php
        get_template_part( 'template-parts/content/home/index'); 
        ?>
    </main>
</div>
<?php
get_footer();