/*var carousel = (function() {

	var $container = $(".carousel-wrap"),
		elem = $container.find(".carousel-item"),
		length = elem.length;

	var options = {
		animSpeed: 100
	}
    
    return {

    	next: function(){
    		$container.prepend(elem[length-1].css({"marginLeft": "-200px"}));
    	},

    	prev: function(){
    		$container.append(elem[0]);
    	}

    }

}());

$(".prev").on("click", function(){
	carousel.prev();
	return false;
});

$(".next").on("click", function(){
	carousel.next();
	return false;
});*/

$(function(){
	$(".carousel-nav .prev").on("click", function(){
		$(".carousel-item:first").animate({"marginLeft" : "-200px"}, 500, function(){
			$(".carousel-wrap").append($(this).css({"marginLeft" : 0}));
		});

		return false;
	});

	$(".carousel-nav .next").on("click", function(){
		$(".carousel-wrap").prepend($(".carousel-item:last").css({"marginLeft" : "-200px"}));
		$(".carousel-item:first").animate({"marginLeft" : 0}, 500);

		return false;
	});
});