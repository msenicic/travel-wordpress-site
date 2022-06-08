<div class="content-10">
    <div class="container">
        <i class="fas fa-chevron-right arrow"></i>
        <i class="fas fa-chevron-left arrow"></i>
        <div class="carousel">
            <div class="slider">
                <?php if( have_rows('images') ):
                while( have_rows('images') ) : the_row();
                    $image = get_sub_field('image'); 
                ?>
                <div class="block"><img src="<?= $image['url'] ?>" alt=""></div>
                <?php
                endwhile;
                else :
                endif; ?>
                <?php if( have_rows('images') ):
                while( have_rows('images') ) : the_row();
                    $image = get_sub_field('image'); 
                ?>
                <div class="block"><img src="<?= $image['url'] ?>" alt=""></div>
                <?php
                endwhile;
                else :
                endif; ?>
            </div>
        </div>
    </div>
</div>