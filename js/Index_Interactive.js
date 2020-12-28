
"use strict";
var IndexInteractive = {
    
    NewsTab: function ()
    {
        $('.consultation-title').on('mouseenter', 'a', function ()
        {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            var i = $this.index();

            var _left = "-" + i * 100 + "%";
            $('.consultation-viewport > ul').css('left', _left);
        })
    }

}
