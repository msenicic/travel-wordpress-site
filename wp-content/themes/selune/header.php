<?php
/**
 * @package selune
 */
global $globalSite;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="icon" href="<?= SELUNE_BUILD_IMG_URI . '/favicon.ico'; ?>" type="image/x-icon" />

    <?php wp_head(); ?>

    <script src="https://kit.fontawesome.com/8a391c339d.js" crossorigin="anonymous"></script>
</head>

<body <?php body_class(); ?>>
    <?php
include (locate_template('template-parts/globals/svg-icons/index.php', false, true)); ?>
    <div id="page" class="site">
        <div class="m-overlay"></div>
        <header>
            <div class="container">
                <div class="logo">
                    <a href="<?php _e( home_url( '/' ) ); ?>"><i class="fas fa-hiking"></i><span>Travel.</span></a>
                </div>
                <div class="menu">
                    <div class="list">
                        <i class="fas fa-times"></i>
                        <?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
                    </div>
                    <div class="list1">
                        <?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
                    </div>
                    <div class="icons">
                        <div class="log">
                            <?php if ( is_user_logged_in() ) { ?>
                            <a href="<?php echo wp_logout_url(home_url( '/' )); ?>">Logout</a>
                            <?php } else { ?>
                            <a href="<?php _e( home_url( '/wp-login.php' ) ); ?>" title="Members Area Login"
                                rel="home">Login</a>
                            <?php } ?>
                        </div>
                        <i class="fas fa-bars"></i>
                        <i class="fas fa-shopping-cart"></i>
                        <i class="fas fa-search"></i>
                    </div>
                    <div class="search">
                        <i class="fas fa-times"></i>
                        <form action="">
                            <input type="search" id="search" placeholder="search here...">
                            <label for="search"><i class="fas fa-search"></i></label>
                        </form>
                    </div>
                </div>
            </div>
        </header>