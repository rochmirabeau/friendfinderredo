
//get friends
var friends = require("../data/friends.js")

module.exports = function(app) {

//apiRoutes
app.get("/api/friends", (req, res) => {
	res.json(friends.friends);
})
	
app.post("/api/friends", (req, res) => {
	var you = {}	
	you.name = req.body.name
	you.photo = req.body.pic
	you.scores = [
		req.body.question1,
		req.body.question2,
		req.body.question3,
		req.body.question4,
		req.body.question5,
		req.body.question6,
		req.body.question7,
		req.body.question8,
		req.body.question9,
		req.body.question10,
	]
//	console.log(you)
//	console.log(friends)
	
	var yourFriend = friends.bestFriend(you, friends.friends)
	console.log(yourFriend)
//TODO, CREATE GLOBAL EVENT AND PUSH THE FRIEND STUFF TO THE FRIEND DIV
	//
	//
//	console.log(document)
//	friendName = window.document.getElementById("bestFriendName")
//	friendPic = window.document.getElementById("bestFriendPic")
//	friendName.html(yourFriend.name)
//	friendPic.attr("src", yourFriend.photo)
		
		res.json(yourFriend)
})

}
