/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */

!function($){
  
  var defaults = {
		animation: "dissolve",
		separator: ",",
		speed: 2000
	};
	
	$.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
	
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];
      $.each(el.text().split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      el.text(array[0]);
      
      // animation option
      var rotate = function() {
        switch (settings.animation) { 
          case 'dissolve':
            setTimeout(function(){el.animate({
              textShadowBlur:2,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1
              el.text(array[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500);
            })},5000);
          break;
        }
      };
      setInterval(rotate, settings.speed);
    });
  }
  
}(window.jQuery);


