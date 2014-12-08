$(".upload").on("change", function(){
	var str = $(this).val();
	if (str.lastIndexOf('\\')){
		var i = str.lastIndexOf('\\')+1;
	}
	else{
		var i = str.lastIndexOf('/')+1;
	}						
	var filename = str.slice(i); console.log(filename);
	$(this).parents(".fileform").find(".fileformlabel").text(filename);
});

$(".fileform input").hover(
	function(){
		$(this).prev().css({"background": "#a6a6a6", "color": "#efefef"});
	},
	function(){
		$(this).prev().css({"background": "#efefef", "color": "#a6a6a6"});
	}
);