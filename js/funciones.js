function load_content(element,name){
	$("#content").load("pages/"+name);
	remove_lateral_color();
	$(element).addClass('green-text darken-3');
}

function remove_lateral_color(){
	$.each($('#menu li a'),function(key,value){
		$(value).removeClass('green-text');
		$(value).removeClass('darken-3');
	});
}
