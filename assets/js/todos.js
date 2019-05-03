// Check off Specific Todos By Clicking

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");	
});



//Click on X to Delete Todo

$("ul").on("click", "span", function(event){
// $(this).parent().remove();
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
event.stopPropagation();
});




// Click on + key to create New Todo

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); 
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-heart-broken'></i></span> " + todoText + "</li>")
	}


});



// add a t

$(".fa-pen").click(function(){
	$("input[type='text']").fadeToggle();
});