var friendsData = require("../app/data/friends.js");



module.exports = function(app) {

    //getting friends route for all the list of available friends data
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//posting routes 
app.post("/api/survey", function(req, res) {

    // user data
    console.log(req.body);

   //need to convert input data from user on survey.html to an [], so it needs to tie into the submit id maybe with jquery or with another identifier that can be called on this page.

    //users score is blank array 
    const currentUserResults = req.body.scores;
  console.log("this is current user results" + currentUserResults);

//     //attempted to make a variable related to friendsLoop that calls only the name and the score from the above object. This will be so that I can compare them below
 var 

 //2 loops one over friends.js data, the other is internal and it will go over the scores and find the value




 
//     //created friendsLoop 
    // function friendsLoop(){
    // for(i=0;i<friends.length; i++){
    // friends.name && friends.score;
    // console.log(friends.name + friends.score);
    // }
    // }
//     console.log("this is prior user results" + priorUsersResults);

//     //trying to loop through users results then comparing it to the prior user/friends
//     for (i=0; i<currentUserResults.length; i++){
//     //find difference using math.abs to ensure possitive number will be returned.
//     if (currentUserResults == priorUsersResults){
//     function totalDifference(currentUserResults, priorUsersResults){
//         //setting variable for logging the results
        // let difference =  math.abs(currentUserResults - friendsData);
        //     // res.send(lowest friend w)
        // console.log("this is the total difference: " + difference);
    
//         //call function
//         totalDifference();
//     } else {
//     console.log("no matches compatable at this time change yourself and see if you will find a fit");
//     }
//     }
    
  });

}
//   //not sure if I needed this but I included it it anyway
//   app.post("/api/clear", function(req, res) {
//     // Empty out the friends arrays of data
//     friendsData.length = [];

//     res.json({ ok: true });
//   });
// };

