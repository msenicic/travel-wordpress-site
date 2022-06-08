<?php
$title = get_sub_field('title');
$link  = get_sub_field('link');
$image = get_sub_field('image');
?>

<div class="content-3" id="about">
    <div class="container">
        <div class="image">
            <?php if ($image) : ?>
            <img src="<?= $image['url'] ?>" alt="">
            <?php endif; ?>
        </div>
        <div class="text">
            <?php if ($title) : ?>
            <h2><?= $title ?></h2>
            <?php endif; ?>
            <?php if( have_rows('texts') ):
            while( have_rows('texts') ) : the_row();
            $text = get_sub_field('text'); 
            ?>
            <p><?= $text ?></p>
            <?php
            endwhile;
            else :
            endif; ?>
            <?php if( $link ): 
                $link_url = $link['url'];
                $link_title = $link['title'];
            ?>
            <div class="button"><a href="<?= $link_url ?>"><?= $link_title ?></a></div>
            <?php endif; ?>
        </div>
    </div>
</div>