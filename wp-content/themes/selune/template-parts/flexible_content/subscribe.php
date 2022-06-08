<?php
$title = get_sub_field('title');
$text  = get_sub_field('text');
?>

<div class="content-9">
    <div class="container">
        <div class="text">
            <?php if ($title) : ?>
            <h1><?= $title ?></h1>
            <?php endif; ?>
            <?php if ($text) : ?>
            <p><?= $text ?></p>
            <?php endif; ?>
        </div>
        <form action="" class="input">
            <input type="email" name="" id="" placeholder="enter your email">
            <button type="submit">Subscribe</button>
        </form>
    </div>
</div>