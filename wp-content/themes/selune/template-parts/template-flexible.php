<?php
/* Template Name: Flexible */
get_header(); ?>
<div id="content" class="site-content">
    <main id="main" class="page-main site-main" role="main">
        <?php
        if ( have_rows('page_content') ) : ?>

        <div class="page-content">
            <?php
            while (have_rows('page_content')) : the_row();
                $layout = get_row_layout();
                get_template_part('template-parts/flexible_content/' . $layout);
            endwhile; ?>
        </div>
        <?php
        endif; ?>
    </main>
</div>
<?php
get_footer();