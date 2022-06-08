<?php
$title = get_sub_field('title');
?>

<div class="content-5" id="packages">
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
            $text = get_sub_field('text');
            $price = get_sub_field('price');
            $link = get_sub_field('link');
                $link_url = $link['url'];
                $link_title = $link['title'];
            ?>
            <div class="block">
                <div class="image"><img src="<?= $image['url']?>" alt=""></div>
                <div class="text">
                    <h3><?= $title ?></h3>
                    <p><?= $text ?></p>
                    <p><?= $price ?></p>
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