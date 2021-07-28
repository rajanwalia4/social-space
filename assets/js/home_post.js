{
	// Method to submit the form post data using AJAX
	let createPost = function(){
		
		let newPostForm = $('#new-post-form');
		console.log("hah")
		newPostForm.submit(function (e) { 
			e.preventDefault();
			console.log("lsjk");
			$.ajax({
				type: "post",
				url: "/posts/create",
				data: newPostForm.serialize(),
				success: function (response) {
					console.log(response);
				},
				error:function(err){
					console.log(err.responseText);
				}
			});
		});		
	}
	
	createPost();
	
	
}