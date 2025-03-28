$(document).ready(function(){
    // Enhanced scroll handler
    let lastScrollTop = 0;
    $(window).scroll(function(){
        const st = $(this).scrollTop();
        
        // sticky navbar
        if(st > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button
        if(st > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        // Direction detection
        if (st > lastScrollTop){
            $('.scroll-up-btn').removeClass('highlight');
        } else if(st < $(document).height() - $(window).height() - 100) {
            $('.scroll-up-btn').addClass('highlight');
        }
        lastScrollTop = st;
    });

    // Smooth scroll for all anchor links
    $('a[href*="#"]').not('[href="#"]').click(function(e) {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') 
            && location.hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 350, 'linear');
                return false;
            }
        }
    });

    // Active nav link highlighting
    const sections = $('section');
    const navItems = $('.navbar .menu li a');
    
    $(window).on('scroll', function(){
        const scrollPos = $(window).scrollTop() + 200;
        
        sections.each(function(){
            const top = $(this).offset().top;
            const bottom = top + $(this).outerHeight();
            
            if(scrollPos >= top && scrollPos <= bottom){
                const id = $(this).attr('id');
                navItems.removeClass('active');
                $(`.navbar .menu li a[href="#${id}"]`).addClass('active');
            }
        });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing",{
		strings: ["Aspiring Developer ", "Coding Enthusiast", " Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Aspiring Developer", "Coding Enthusiast", "Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
