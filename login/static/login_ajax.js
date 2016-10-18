$(document).on('submit', '#login_form', function(e){
	e.preventDefault();
	$.ajax({
		type:'POST',
		url:'/login/',
		data:{
			username:$('#username').val(),
			email:$('#email').val(),
			password:$('#password').val(),
			csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
		},
		sucess:function(){
			alert('Hello');
		}
	});
});
