(function($){

$(document).ready(function(){
    var tablist = $("#tab_head li");
    var tabbody = $("#tab_body li");

    tablist.click(function(){
		var idx = tablist.index($(this));
		tablist.removeClass("on").eq(idx).addClass("on");
		tabbody.removeClass("on").eq(idx).addClass("on");
    });

});

})(jQuery);