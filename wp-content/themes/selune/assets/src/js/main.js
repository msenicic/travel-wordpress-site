// Import scripts
import {Fancybox} from '@fancyapps/ui'; // eslint-disable-line
import './vendor/slick.min';

// Styles
import '../sass/main.scss';

// Import asset images
import './images';

// Import javascript
// import debounce from './helpers/debounce';

import siteMenu from './partials/siteMenu';

import slickSettings from './partials/slickSettings';

jQuery(document).ready(function () {
    siteMenu(jQuery);

    slickSettings(jQuery);

});

var bar = document.querySelector('.fa-bars');
var close = document.querySelector('.list .fa-times');
var close1 = document.querySelector('.search .fa-times');
var list = document.querySelector('header .list');
var searchbtn = document.querySelector('.icons .fa-search');
var search = document.querySelector('.search');
var searchform = document.querySelector('#search');
var header = document.querySelector('header');

bar.addEventListener("click", function() {
    list.classList.add("active");
});

close.addEventListener("click", function() {
    list.classList.remove("active");
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        list.classList.remove("active");
    }
});

window.addEventListener("scroll", function() {
    list.classList.remove("active");

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});

window.addEventListener("load", function() {
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});

searchbtn.addEventListener("click", function() {
    search.classList.add("active");
    searchform.focus();
});

close1.addEventListener("click", function() {
    search.classList.remove("active");
});


var rightArrow = document.querySelector('.content-1 .fa-chevron-right');
var leftArrow = document.querySelector('.content-1 .fa-chevron-left');
var i;
var direction = 0;
var content = document.querySelector('.content-1');
var slider = document.querySelector('.content-1 .slider');
var pages = document.querySelectorAll('.content-1 .pages');
var container = document.querySelectorAll('.pages .container');

slider.style.width = ''+100*pages.length+'%';
for(i=0;i<pages.length;i++) {
    pages[i].style.flexBasis = ''+ 100/pages.length +'%';
    pages[i].style.width = ''+ 100/pages.length +'%';
}

if (window.innerWidth < 1024) {
    for(i=1;i<pages.length;i=i+2) {
        pages[i].style.backgroundPosition = 'left';
    }
}
if (window.innerWidth > 1024) {
    for(i=1;i<pages.length;i=i+2) {
        container[i].style.justifyContent = 'flex-start';
    }
}

window.addEventListener("resize", function() {
    for(i=1;i<pages.length;i=i+2) {
        if (window.innerWidth > 1024) {
            pages[i].style.removeProperty('background-position');
            container[i].style.justifyContent = 'flex-start';
        }
        else if (window.innerWidth < 1024)
        {
            container[i].style.removeProperty('justify-content');
            pages[i].style.backgroundPosition = 'left';
        }
    }
});

leftArrow.addEventListener("click", function() {
    if (direction === 0) {
        slider.appendChild(slider.firstElementChild); 
    }
    else if (direction === -1) {
        slider.appendChild(slider.firstElementChild); 
    }
    direction = 1;
    content.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate('+ +100/pages.length +'%)';
});

rightArrow.addEventListener("click", function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild); 
    }
    direction = -1;
    content.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate('+ -100/pages.length +'%)';
});

slider.addEventListener("transitionend", function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    }
    else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }
    
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function() {
        slider.style.transition = '1s';
    });
});





var rightArrow1 = document.querySelector('.content-4 .fa-chevron-right');
var leftArrow1 = document.querySelector('.content-4 .fa-chevron-left');
var i1;
var direction1 = 0;
var carousel = document.querySelector('.content-4 .carousel');
var slider1 = document.querySelector('.content-4 .slider');
var block = document.querySelectorAll('.content-4 .block');

slider1.style.width = ''+100*block.length+'%';
for(i=0;i<block.length;i++) {
    if (window.innerWidth > 1024) {
        block[i].style.flexBasis = ''+ 100/4 -2 +'%';
        block[i].style.width = ''+ 100/4 -2 +'%';
    }
    else if (window.innerWidth > 768) {
        block[i].style.flexBasis = ''+ 100/3 -2 +'%';
        block[i].style.width = ''+ 100/3 -2 +'%';
    }
    else if (window.innerWidth > 576) {
        block[i].style.flexBasis = ''+ 100/2 -2 +'%';
        block[i].style.width = ''+ 100/2 -2 +'%';
    }
    else {
        block[i].style.flexBasis = ''+ 100/block.length +'%';
        block[i].style.width = ''+ 100/block.length +'%';
    }
}

 window.addEventListener("resize", function() {
    for(i=0;i<block.length;i++) {
        if (window.innerWidth > 1024) {
            block[i].style.flexBasis = ''+ 100/4 -2 +'%';
            block[i].style.width = ''+ 100/4 -2 +'%';
        }
        else if (window.innerWidth > 768) {
            block[i].style.flexBasis = ''+ 100/3 -2 +'%';
            block[i].style.width = ''+ 100/3 -2 +'%';
        }
        else if (window.innerWidth > 576) {
            block[i].style.flexBasis = ''+ 100/2 -2 +'%';
            block[i].style.width = ''+ 100/2 -2 +'%';
        }
        else {
            block[i].style.flexBasis = ''+ 100/block.length +'%';
            block[i].style.width = ''+ 100/block.length +'%';
        }
    }
});
 
leftArrow1.addEventListener("click", function() {  
    if (window.innerWidth < 576) {
        if (direction1 === 0) {
            slider1.appendChild(slider1.firstElementChild); 
        }
        else if (direction1 === -1) {
            slider1.appendChild(slider1.firstElementChild); 
        }
    }
    direction1 = 1;
    carousel.style.justifyContent = 'flex-end';
    if (window.innerWidth > 1024) {
        slider1.style.transform = 'translate('+ +100/4 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider1.style.transform = 'translate('+ +100/3 +'%)';
    }
    else if (window.innerWidth > 576) {
        slider1.style.transform = 'translate('+ +100/2 +'%)';
    }
    else {
        slider1.style.transform = 'translate('+ +100/block.length +'%)';
    }
});

rightArrow1.addEventListener("click", function() {
    if (window.innerWidth < 576) {
        if (direction1 === 1) {
            slider1.prepend(slider1.lastElementChild); 
        }
    }
    direction1 = -1;
    carousel.style.justifyContent = 'flex-start';
    if (window.innerWidth > 1024) {
        slider1.style.transform = 'translate('+ -100/4 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider1.style.transform = 'translate('+ -100/3 +'%)';
    }
    else if (window.innerWidth > 576) {
        slider1.style.transform = 'translate('+ -100/2 +'%)';
    }
    else {
        slider1.style.transform = 'translate('+ -100/block.length +'%)';
    }
});

slider1.addEventListener("transitionend", function() {
    if (direction1 === -1) {
        slider1.appendChild(slider1.firstElementChild);
    }
    else if (direction1 === 1) {
        slider1.prepend(slider1.lastElementChild);
    }
    
    slider1.style.transition = 'none';
    slider1.style.transform = 'translate(0)';
    setTimeout(function() {
        slider1.style.transition = '0.5s';
    });
});







var rightArrow2 = document.querySelector('.content-6 .fa-chevron-right');
var leftArrow2 = document.querySelector('.content-6 .fa-chevron-left');
var i2;
var direction2 = 0;
var carousel2 = document.querySelector('.content-6 .carousel');
var slider2 = document.querySelector('.content-6 .slider');
var block2 = document.querySelectorAll('.content-6 .block');

slider2.style.width = ''+100*block2.length+'%';
for(i=0;i<block2.length;i++) {
    if (window.innerWidth > 1024) {
        block2[i].style.flexBasis = ''+ 100/3 -2 +'%';
        block2[i].style.width = ''+ 100/3 -2 +'%';
    }
    else if (window.innerWidth > 768) {
        block2[i].style.flexBasis = ''+ 100/2 -2 +'%';
        block2[i].style.width = ''+ 100/2 -2 +'%';
    }
    else {
        block2[i].style.flexBasis = ''+ 100/block2.length -2 +'%';
        block2[i].style.width = ''+ 100/block2.length -2 +'%';
    }
}

 window.addEventListener("resize", function() {
    for(i=0;i<block2.length;i++) {
        if (window.innerWidth > 1024) {
            block2[i].style.flexBasis = ''+ 100/3 -2 +'%';
            block2[i].style.width = ''+ 100/3 -2 +'%';
        }
        else if (window.innerWidth > 768) {
            block2[i].style.flexBasis = ''+ 100/2 -2 +'%';
            block2[i].style.width = ''+ 100/2 -2 +'%';
        }
        else {
            block2[i].style.flexBasis = ''+ 100/block2.length -2 +'%';
            block2[i].style.width = ''+ 100/block2.length -2 +'%';
        }
    }
});
 
leftArrow2.addEventListener("click", function() {  
    if (window.innerWidth < 768) {
        if (direction2 === 0) {
            slider2.appendChild(slider2.firstElementChild); 
        }
        else if (direction2 === -1) {
            slider2.appendChild(slider2.firstElementChild); 
        }
    }
    direction2 = 1;
    carousel2.style.justifyContent = 'flex-end';
    if (window.innerWidth > 1024) {
        slider2.style.transform = 'translate('+ +100/3 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider2.style.transform = 'translate('+ +100/2 +'%)';
    }
    else {
        slider2.style.transform = 'translate('+ +100/block2.length +'%)';
    }
});

rightArrow2.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        if (direction2 === 1) {
            slider2.prepend(slider2.lastElementChild); 
        }
    }
    direction2 = -1;
    carousel2.style.justifyContent = 'flex-start';
    if (window.innerWidth > 1024) {
        slider2.style.transform = 'translate('+ -100/3 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider2.style.transform = 'translate('+ -100/2 +'%)';
    }
    else {
        slider2.style.transform = 'translate('+ -100/block2.length +'%)';
    }
});

slider2.addEventListener("transitionend", function() {
    if (direction2 === -1) {
        slider2.appendChild(slider2.firstElementChild);
    }
    else if (direction2 === 1) {
        slider2.prepend(slider2.lastElementChild);
    }
    
    slider2.style.transition = 'none';
    slider2.style.transform = 'translate(0)';
    setTimeout(function() {
        slider2.style.transition = '0.5s';
    });
});






var rightArrow3 = document.querySelector('.content-8 .fa-chevron-right');
var leftArrow3 = document.querySelector('.content-8 .fa-chevron-left');
var i3;
var direction3 = 0;
var carousel3 = document.querySelector('.content-8 .carousel');
var slider3 = document.querySelector('.content-8 .slider');
var block3 = document.querySelectorAll('.content-8 .block');

slider3.style.width = ''+100*block3.length+'%';
for(i=0;i<block3.length;i++) {
    if (window.innerWidth > 1024) {
        block3[i].style.flexBasis = ''+ 100/3 -2 +'%';
        block3[i].style.width = ''+ 100/3 -2 +'%';
    }
    else if (window.innerWidth > 768) {
        block3[i].style.flexBasis = ''+ 100/2 -2 +'%';
        block3[i].style.width = ''+ 100/2 -2 +'%';
    }
    else {
        block3[i].style.flexBasis = ''+ 100/block3.length -2 +'%';
        block3[i].style.width = ''+ 100/block3.length -2 +'%';
    }
}

 window.addEventListener("resize", function() {
    for(i=0;i<block3.length;i++) {
        if (window.innerWidth > 1024) {
            block3[i].style.flexBasis = ''+ 100/3 -2 +'%';
            block3[i].style.width = ''+ 100/3 -2 +'%';
        }
        else if (window.innerWidth > 768) {
            block3[i].style.flexBasis = ''+ 100/2 -2 +'%';
            block3[i].style.width = ''+ 100/2 -2 +'%';
        }
        else {
            block3[i].style.flexBasis = ''+ 100/block3.length -2 +'%';
            block3[i].style.width = ''+ 100/block3.length -2 +'%';
        }
    }
});
 
leftArrow3.addEventListener("click", function() {  
    if (window.innerWidth < 768) {
        if (direction3 === 0) {
            slider3.appendChild(slider3.firstElementChild); 
        }
        else if (direction3 === -1) {
            slider3.appendChild(slider3.firstElementChild); 
        }
    }
    direction3 = 1;
    carousel3.style.justifyContent = 'flex-end';
    if (window.innerWidth > 1024) {
        slider3.style.transform = 'translate('+ +100/3 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider3.style.transform = 'translate('+ +100/2 +'%)';
    }
    else {
        slider3.style.transform = 'translate('+ +100/block3.length +'%)';
    }
});

rightArrow3.addEventListener("click", function() {
    if (window.innerWidth < 768) {
        if (direction3 === 1) {
            slider3.prepend(slider3.lastElementChild); 
        }
    }
    direction3 = -1;
    carousel3.style.justifyContent = 'flex-start';
    if (window.innerWidth > 1024) {
        slider3.style.transform = 'translate('+ -100/3 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider3.style.transform = 'translate('+ -100/2 +'%)';
    }
    else {
        slider3.style.transform = 'translate('+ -100/block3.length +'%)';
    }
});

slider3.addEventListener("transitionend", function() {
    if (direction3 === -1) {
        slider3.appendChild(slider3.firstElementChild);
    }
    else if (direction3 === 1) {
        slider3.prepend(slider3.lastElementChild);
    }
    
    slider3.style.transition = 'none';
    slider3.style.transform = 'translate(0)';
    setTimeout(function() {
        slider3.style.transition = '0.5s';
    });
});





var rightArrow4 = document.querySelector('.content-10 .fa-chevron-right');
var leftArrow4 = document.querySelector('.content-10 .fa-chevron-left');
var i4;
var direction4 = 0;
var carousel4 = document.querySelector('.content-10 .carousel');
var slider4 = document.querySelector('.content-10 .slider');
var block4 = document.querySelectorAll('.content-10 .block');

slider4.style.width = ''+100*block4.length+'%';
for(i=0;i<block4.length;i++) {
    if (window.innerWidth > 1024) {
        block4[i].style.flexBasis = ''+ 100/4 -2 +'%';
        block4[i].style.width = ''+ 100/4 -2 +'%';
    }
    else if (window.innerWidth > 768) {
        block4[i].style.flexBasis = ''+ 100/3 -2 +'%';
        block4[i].style.width = ''+ 100/3 -2 +'%';
    }
    else if (window.innerWidth > 576) {
        block4[i].style.flexBasis = ''+ 100/2 -2 +'%';
        block4[i].style.width = ''+ 100/2 -2 +'%';
    }
    else {
        block4[i].style.flexBasis = ''+ 100/block4.length +'%';
        block4[i].style.width = ''+ 100/block4.length +'%';
    }
}

 window.addEventListener("resize", function() {
    for(i=0;i<block4.length;i++) {
        if (window.innerWidth > 1024) {
            block4[i].style.flexBasis = ''+ 100/4 -2 +'%';
            block4[i].style.width = ''+ 100/4 -2 +'%';
        }
        else if (window.innerWidth > 768) {
            block4[i].style.flexBasis = ''+ 100/3 -2 +'%';
            block4[i].style.width = ''+ 100/3 -2 +'%';
        }
        else if (window.innerWidth > 576) {
            block4[i].style.flexBasis = ''+ 100/2 -2 +'%';
            block4[i].style.width = ''+ 100/2 -2 +'%';
        }
        else {
            block4[i].style.flexBasis = ''+ 100/block4.length +'%';
            block4[i].style.width = ''+ 100/block4.length +'%';
        }
    }
});
 
leftArrow4.addEventListener("click", function() {  
    if (window.innerWidth < 576) {
        if (direction4 === 0) {
            slider4.appendChild(slider4.firstElementChild); 
        }
        else if (direction4 === -1) {
            slider4.appendChild(slider4.firstElementChild); 
        }
    }
    direction4 = 1;
    carousel4.style.justifyContent = 'flex-end';
    if (window.innerWidth > 1024) {
        slider4.style.transform = 'translate('+ +100/4 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider4.style.transform = 'translate('+ +100/3 +'%)';
    }
    else if (window.innerWidth > 576) {
        slider4.style.transform = 'translate('+ +100/2 +'%)';
    }
    else {
        slider4.style.transform = 'translate('+ +100/block4.length +'%)';
    }
});

rightArrow4.addEventListener("click", function() {
    if (window.innerWidth < 576) {
        if (direction4 === 1) {
            slider4.prepend(slider4.lastElementChild); 
        }
    }
    direction4 = -1;
    carousel4.style.justifyContent = 'flex-start';
    if (window.innerWidth > 1024) {
        slider4.style.transform = 'translate('+ -100/4 +'%)';
    }
    else if (window.innerWidth > 768) {
        slider4.style.transform = 'translate('+ -100/3 +'%)';
    }
    else if (window.innerWidth > 576) {
        slider4.style.transform = 'translate('+ -100/2 +'%)';
    }
    else {
        slider4.style.transform = 'translate('+ -100/block4.length +'%)';
    }
});

slider4.addEventListener("transitionend", function() {
    if (direction4 === -1) {
        slider4.appendChild(slider4.firstElementChild);
    }
    else if (direction4 === 1) {
        slider4.prepend(slider4.lastElementChild);
    }
    
    slider4.style.transition = 'none';
    slider4.style.transform = 'translate(0)';
    setTimeout(function() {
        slider4.style.transition = '0.5s';
    });
}); 