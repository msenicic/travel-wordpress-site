<?php
$title = get_sub_field('title');
?>

<div class="content-2">
    <div class="container">
        <div class="title">
            <?php if ($title) : ?>
            <h1><?= $title ?></h1>
            <?php endif; ?>
        </div>
        <div class="blocks">
            <?php if( have_rows('block') ):
            while( have_rows('block') ) : the_row();
            $image = get_sub_field('image');
            $title = get_sub_field('title');
            $text  = get_sub_field('text');
            $link  = get_sub_field('link');
                $link_url = $link['url'];
                $link_title = $link['title']; 
            ?>
            <div class="block">
                <div class="image"><img src="<?= $image['url'] ?>" alt=""></div>
                <div class="text">
                    <h4><?= $title ?></h4>
                    <p><?= $text ?></p>
                </div>
                <div class="button">
                    <a href="<?= $link_url ?>"><?= $link_title ?></a>
                </div>
            </div>
            <?php
            endwhile;
            else :
            endif; ?>
        </div>
    </div>
</div>