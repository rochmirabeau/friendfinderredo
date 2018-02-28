
  $("#findMyFriend").on("submit", function(event) {
	event.preventDefault();
	//make an object out of the name, picture, and scores
	console.log("findMyFriend")  
  	var you = {
		//add name	
		//add photo
		//add scores
		scores: $("[name=question1]").val()
	}
  }	
  $.post("/api/friends", you)
      .then(function(data) {
  	console.log("friend.js " + data)
  })
