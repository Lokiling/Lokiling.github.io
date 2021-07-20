$(document).ready(function(){
//Parallax Scrolling Effect
//    $('#intro').parallax("50%", -0.5);
    $('#parallaxBG1').parallax("50%", 0.1);
    $('#parallaxBG2').parallax("50%", 0.2);
    $('#works').parallax("50%", 0.3);

    //textRotator
    $(".rotate").textrotator({
        animation: "dissolve",
        speed: 3000
    });
    
    //logoAnimation    
    setTimeout(function(){
        $("#logo_intro").fadeIn(1500);
        $("#cpM").animate({ opacity: 0 },1500);    
    },2500);
    
    function worksSelect(sort){
        $("ul.grid li").hide();
        $(sort).show();
        $(".ele_works").removeClass("actived");
    }
    $(function(){
        $('#projectGrids').mixitup({
            easing: 'snap',
            effects: ['fade','grayscale'],
        });
    });
    
    // makes sure the whole site is loaded
    jQuery(window).load(function() {
        // will first fade out the loading animation
        jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
        jQuery("#preloader").delay(1000).fadeOut("slow");
    })
});