<?php
$title = get_sub_field('title');
?>

<div class="content-6" id="reviews">
    <div class="container">
        <div class="title">
            <?php if ($title) : ?>
            <h1><?= $title ?></h1>
            <?php endif; ?>
        </div>
        <i class="fas fa-chevron-right arrow"></i>
        <i class="fas fa-chevron-left arrow"></i>
        <div class="carousel">
            <div class="slider">
                <?php if( have_rows('block') ):
                while( have_rows('block') ) : the_row();
                    $image = get_sub_field('image');
                    $full_name = get_sub_field('full_name');
                    $text = get_sub_field('text');
                    $profesion = get_sub_field('profesion');
                ?>
                <div class="block">
                    <div class="text">
                        <p><?= $text ?></p>
                    </div>
                    <div class="image">
                        <img src="<?= $image['url']?>" alt="">
                        <div class="actor">
                            <h4><?= $full_name ?></h4>
                            <p><?= $profesion ?></p>
                        </div>
                    </div>
                </div>
                <?php
                endwhile;
                else :
                endif; ?>
            </div>
        </div>
    </div>
</div>