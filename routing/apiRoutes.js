var friendsData = require("../app/data/friends.js");



module.exports = function(app) {

    //getting friends route for all the list of available friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//posting routes 
app.post("/api/survey", function(req, res) {

    //capturing data 
    let data = req.body; 
    // capturing score
    let scores = data.scores; 
    //setting this var to descend from friends data
    let index = -1; 
    //lowest score 
    let lowestScore=100;

    //users score is blank array NOT SURE IF I NEED THIS BELOW PART GIVEN MY ABOVE VARIABLES
    const currentUserResults = req.body.scores;
  console.log("this is current user results" + currentUserResults);
 
//==========the loops======================
 //2 loops one over friends.js data, the other is internal and it will go over the scores and find the value

 for (var i =0; i<friends.length; i++){
     let friend = friends[i];
     let friendsScores = friend.scores;
     let sum = 0;

     //nested loop 
     for( var j = 0; j< friendsScores.length; j++){
         let currnetFriendScore = friendScores[j];
         let currentUserScore = scores[j];
         let differnece = parseInt(currnetFriendScore) - parseInt(currentUserScore);
         var absDifference = Math.abs(differnece);
         //adding up sum of the difference
         sum += absDifference;
     }
     if(sum < lowestScore) {
         lowestScore = sum;
         index = i;
     }
 }
   //loop through current user results (score)
//    for (var i=0; i<currentUserResults.scores.length; i++) {
//        currentUserResults.scores[i] = parseInt(user.scores[i]);
//    }
   res.json(friends[index])
});
}
