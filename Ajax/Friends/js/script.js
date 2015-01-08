

$(document).ready(function (){

	var $friends = $("#friends");
	var $name = $("#name");
	var $age = $("#age");

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/fisen/friends',
		success: function(friends){
			$.each(friends, function(i, friend){
				$friends.append("<li>name: " 
					+ friend.name 
					+ ", age: " 
					+ friend.age 
					+ "</li>"
					+ "<button data-id="+"'"+friend.id+"'"+" class='remove' type='button'>X</button>"
				);	
			});
		}
	});


	$("#add-friend").on("click", function(){

		var friend = {
			name: $name.val(),
			age: $age.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/fisen/friends',
			data: friend,
			success: function(newFriend){
				$friends.append("<li>name: " 
					+ newFriend.name 
					+ ", age: " 
					+ newFriend.age 
					+ "</li>"
					+ "<button data-id="+"'"+friend.id+"'"+" class='remove' type='button'>X</button>"
				);	
			},
			error: function(){
				alert("error saving order");
			}
		});

	});
	$friends.on("click", ".remove", function(){

		var $li = $(this).closest("li");
		alert($li);


		$.ajax({
			type: 'DELETE',
			url: 'http://rest.learncode.academy/api/fisen/friends/' + $(this).attr('data-id'),
			success: function(){
				$li.remove();

			}
		});

	});


});