<?php
$title = get_sub_field('title');
?>

<div class="content-8" id="blogs">
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
                    $title = get_sub_field('title');
                    $text = get_sub_field('text');
                    $link = get_sub_field('link'); 
                        $link_url = $link['url'];
                        $link_title = $link['title'];
                ?>
                <div class="block">
                    <div class="image">
                        <img src="<?= $image['url'] ?>" alt="">
                        <div class="box">
                            <?php if( have_rows('post') ):
                            while( have_rows('post') ) : the_row();
                                $date = get_sub_field('date'); 
                                $user = get_sub_field('user');
                                    $name = $user['display_name']; 
                            ?>
                            <div class="icon">
                                <i class="fas fa-calendar"></i>
                                <p><?= $date ?></p>
                            </div>
                            <div class="icon">
                                <i class="fas fa-user"></i>
                                <p>By <?= $name ?></p>
                            </div>
                            <?php
                            endwhile;
                            else :
                            endif; ?>
                        </div>
                    </div>
                    <div class="text">
                        <h3><?= $title ?></h3>
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
</div>