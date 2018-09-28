//click on X to delete todos
$("ul").on("click","span",function(event) { // we only one this code to run in a span inside of a ul
	$(this).parent().fadeOut(500,function(){ //we put the function inside of fadeOut so the animation can finish
		$(this).remove();
	});
	event.stopPropagation();
});

// $("ul").click(function(){
// 	alert("clicked on ul")
// });


//check off specific todos by clicking
$("ul").on("click","li", function(){
	// //if li is gray 
	// console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	//turn to black 
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else { 
	// //else turn gray
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });
	// }

	$(this).toggleClass("completed");

});

$("input[type='text']").keypress(function(event) {
	if(event.which===13){
		
		//grabbing new todoText from the input
		var todoText = $(this).val();
		//create a new li and add to ul by introducing append
		$("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span>" +todoText+ "</li>" );
		//clear out the input line
		$(this).val("");
}
});

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(200);
});































