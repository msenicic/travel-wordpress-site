<div class="content-1" id="home">
    <i class="fas fa-chevron-right"></i>
    <i class="fas fa-chevron-left"></i>
    <div class="slider">
        <?php if( have_rows('page') ):
        while( have_rows('page') ) : the_row();
        $image = get_sub_field('bg_image');
        $text  = get_sub_field('text');
        $link  = get_sub_field('link');
            $link_url = $link['url'];
            $link_title = $link['title'];
        ?>
        <div class="pages" style="background-image: url(<?= $image['url'] ?>);">
            <div class="container">
                <div class="text">
                    <?php if( have_rows('title') ):
                    while( have_rows('title') ) : the_row();
                    $title1 = get_sub_field('title_one');
                    $title2 = get_sub_field('title_two'); 
                    ?>
                    <p><?= $title1 ?></p>
                    <h1><?= $title2 ?></h1>
                    <?php
                    endwhile;
                    else :
                    endif; ?>
                    <p><?= $text ?></p>
                    <div class="button">
                        <a href="<?= $link_url ?>"><?= $link_title ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php
        endwhile;
        else :
        endif; ?>
    </div>
</div>