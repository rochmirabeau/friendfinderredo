
// me just testing shit...EXPORT TO app/data/friends.js

let test = {
	name: 'test' ,
	photo: '',
	scores: [1,7,3,2,9] 
	}

let rick = {
	name: 'Rick Sanchez',
	photo: 'https://cdn.costumewall.com/wp-content/uploads/2017/01/rick-sanchez.jpg',
	scores: [5,5,1,3,5,1,1,5,1] 
	}

let beth = {
	name: 'Beth Sanchez-Smith',
	photo: 'https://static.comicvine.com/uploads/scale_small/6/66303/4472083-vlcsnap-2015-01-31-18h46m55s179.jpg',
	scores: [3,1,3,5,5,1,5,2,1,1] 
	}

let jerry = {
	name: 'Jerry Smith',
	photo: 'http://www.rickandmortyshow.com/wp-content/uploads/2016/06/jerry1.jpg',
	scores: [1,1,5,3,1,1,5,5,2,5] 
	}

let friends = [rick, beth, jerry]

function difference (you, friend) {
	let arrayDiff = []
	let totalDiff = 0
	let result = friend 
//	console.log("you: " + you.scores)
//	console.log(`friend: ${friend.scores}`)
	for (var i = 0;i<you.scores.length;i++){
	
		arrayDiff.push((Math.abs(you.scores[i]-friend.scores[i])))
		totalDiff += Math.abs(you.scores[i]-friend.scores[i])
	}	
	result.arrayDiff = arrayDiff
	result.totalDiff = totalDiff
	//console.log("difference " + result)

	return(result)
	
	
}



function bestFriend (you, friends) {
//you are an object, friends is an array of objects, loop throught the array and return the object that has the lowest totalDiff
	let bestie = {
		totalDiff: 99
	} 
	for (var i=0;i<friends.length; i++){
		let x = difference(you, friends[i]).totalDiff
		if(x < bestie.totalDiff){
			bestie = friends[i]
		}
//		console.log(x)
	}
//	console.log(bestie)
 	return bestie
 }



module.exports = { 
	difference: difference,
	bestFriend: bestFriend,
	friends: friends
}
