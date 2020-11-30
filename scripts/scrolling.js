$(document).ready(function(){
    
    function changeHeight(){
        //IF -> match the device size -> Responsible
//        window.alert($(window).width());
        
//        if (window.matchMedia("(max-width: 980px)").matches) {   //mobile phone
//            var $winHeight = $(window).height() * 0.5 - $("nav").height();
//            var $mapHeight = $(window).height() * 0.5 - $("footer").height();
//        }
//        else{
        //desktop
            var $winHeight = $(window).height() - $("nav").height();
            var $mapHeight = $(window).height() - $("footer").height();
//        }
        //set image size
        $("#intro").height($winHeight);
        $("#map_canvas").height($mapHeight);
        $("#mapTitle").css("top", $mapHeight*0.70 );
    }
    
    $(window).resize(function(){
        changeHeight();
    });
    
    $(window).scroll(function(){
        var $winHeight = $(window).height() - $("nav").height();
        var $scrollHeight = $(window).scrollTop();
        var $resumeHeight = $winHeight + $("#works").height() + $("#parallaxBG1").height() * 0.5 -70;
        var $aboutHeight = $winHeight + $("#works").height() + $("#parallaxBG1").height() * 1.5 + $("#resume").height() -70;
        var $footerHeight =  $winHeight + $("#works").height() + $("#parallaxBG1").height() * 2 + $("#resume").height() + $("#about").height()+100;

        //intro -> section1 animation
        if ($scrollHeight >= $winHeight * 0.5) {
            $('#logo_nav_wrapper, #logo_text_nav').fadeIn('slow').css('visibility','visible');
            $('#nav_works').addClass("nav_current");
            $('#nav_resume, #nav_about').removeClass("nav_current");
        }
        else {
            $('#logo_nav_wrapper, #logo_text_nav').fadeOut('slow');
            $('#nav_works').removeClass("nav_current");
        }
        
        if ($scrollHeight >= 5 ){
            $('nav').removeClass().addClass("green green_bg green_border");
        }
        else if($scrollHeight < 5)
            $('nav').removeClass().addClass("white white_bg white_border");
        
        //works
        if ($scrollHeight >= $winHeight && $scrollHeight < $resumeHeight){
            $('nav').removeClass().addClass("fixed green green_bg green_border");
            $("#works").css({"marginTop":"70px"});
        } 
        //intro
        else if ($scrollHeight < ($winHeight) ){
            $("#works").css({"marginTop":"0px"});
            $('nav').removeClass("fixed");
        }
        //resume
        else if ( $scrollHeight >= $resumeHeight && $scrollHeight < $aboutHeight ){
            $('nav').removeClass().addClass("fixed red red_bg red_border");
            $('#nav_resume').addClass("nav_current");
            $('#nav_about, #nav_works').removeClass("nav_current");
        }
        //about
        else if ( $scrollHeight >= $aboutHeight && $scrollHeight < $footerHeight ) {
            $('nav').removeClass().addClass("fixed blue blue_bg blue_border");
            $('#nav_about').addClass("nav_current");
            $('#nav_resume, #nav_works').removeClass("nav_current");
        }
        //footer
        else if ( $scrollHeight >= $footerHeight ) {
            $('nav').removeClass().addClass("fixed yellow yellow_bg yellow_border");
//            $('nav').removeClass().addClass("fixed white white_bg white_border");
            $('#nav_about,#nav_resume, #nav_works').removeClass("nav_current");
        }
    });
    
    changeHeight();
    
});