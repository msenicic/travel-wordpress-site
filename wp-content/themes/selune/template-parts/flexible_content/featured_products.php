<?php
$title = get_sub_field('title');
?>

<div class="content-4" id="shop">
    <div class="container">
        <div class="title">
            <?php if ($title) : ?>
            <h1><?= $title ?></h1>
            <?php endif; ?>
        </div>
        <div class="carousel">
            <i class="fas fa-chevron-right arrow"></i>
            <i class="fas fa-chevron-left arrow"></i>
            <div class="slider">
                <?php if( have_rows('block') ):
                $br=0;
                if ( is_user_logged_in() ) {
                    while( have_rows('block') ) : the_row();
                    $image = get_sub_field('image');
                    $title = get_sub_field('title');
                    $price = get_sub_field('price');
                    $grade = get_sub_field('grade'); 
                ?>
                <div class="block">
                    <div class="image">
                        <img src="<?= $image['url'] ?>" alt="">
                        <div class="icons">
                            <div class="icon"><i class="fas fa-shopping-cart"></i></div>
                            <div class="icon"><i class="fas fa-eye"></i></div>
                            <div class="icon"><i class="fas fa-share"></i></div>
                        </div>
                    </div>
                    <div class="text">
                        <h3><?= $title ?></h3>
                        <p><?= $price ?></p>
                        <div class="stars">
                            <?php 
                                for($i=0;$i<$grade;$i++)
                                {?>
                            <i class="fas fa-star"></i>
                            <?php
                                }
                            ?>
                            <?php 
                            $icon = 5-$grade;
                                for($i=0;$i<$icon;$i++)
                                {?>
                            <i class="fas fa-star" style="color:#fff"></i>
                            <?php
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <?php
                endwhile;
                }
                else {
                    while($br<5):the_row();
                    $image = get_sub_field('image');
                    $title = get_sub_field('title');
                    $price = get_sub_field('price');
                    $grade = get_sub_field('grade'); 
                ?>
                <div class="block">
                    <div class="image">
                        <img src="<?= $image['url'] ?>" alt="">
                        <div class="icons">
                            <div class="icon"><i class="fas fa-shopping-cart"></i></div>
                            <div class="icon"><i class="fas fa-eye"></i></div>
                            <div class="icon"><i class="fas fa-share"></i></div>
                        </div>
                    </div>
                    <div class="text">
                        <h3><?= $title ?></h3>
                        <p><?= $price ?></p>
                        <div class="stars">
                            <?php 
                                for($i=0;$i<$grade;$i++)
                                {?>
                            <i class="fas fa-star"></i>
                            <?php
                                }
                            ?>
                            <?php 
                            $icon = 5-$grade;
                                for($i=0;$i<$icon;$i++)
                                {?>
                            <i class="fas fa-star" style="color:#fff"></i>
                            <?php
                                }
                            ?>
                        </div>
                    </div>
                </div>
                <?php
                $br++;
                endwhile;
                ?>
                <div class="block message">
                    <p>If you want see more products -> <a href="<?php _e( home_url( '/wp-login.php' ) ); ?>"
                            title="Members Area Login" rel="home">Login</a></p>
                </div>
                <?php
                }   
                else :
                endif; ?>
            </div>
        </div>
    </div>
</div>