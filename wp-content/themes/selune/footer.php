<?php
/**
 * @package selune
 */
?>

<?php
    $author        = get_field('author', 'option');
    $footer_image  = get_field('footer_bg', 'option');
?>
<footer id="colophon" class="site-footer" role="contentinfo" <?php if ($footer_image) : ?>
    style="background-image: url(<?= $footer_image['url'] ?>);" <?php endif; ?>>
    <div class="container">
        <div class="links">
            <?php if( have_rows('footer_links', 'option') ):
                    while( have_rows('footer_links', 'option') ) : the_row();
                    $title = get_sub_field('title'); 
                    ?>
            <div class="block">
                <div class="title">
                    <h2><?= $title ?></h2>
                </div>
                <div class="list">
                    <ul>
                        <?php if( have_rows('links') ):
                            while( have_rows('links') ) : the_row();
                            $link = get_sub_field('link'); 
                                $text = $link['title'];
                                $url  = $link['url'];
                            $icons = get_sub_field('icons');
                        ?>
                        <li><a href="<?= $url ?>"><?php if ($icons) : ?>
                                <i class="<?= $icons ?>"></i><?php endif; ?><?= $text ?></a></li>
                        <?php
                        endwhile;
                        else :
                        endif; ?>
                    </ul>
                </div>
            </div>
            <?php
                endwhile;
                else :
                endif; ?>
        </div>
        <div class="text">
            <p>Created by <?php if ($author) : ?><span><?= $author ?></span><?php endif; ?> | All rights reserved!</p>
        </div>
    </div>
</footer>
</div>
<?php wp_footer(); ?>
</body>

</html>