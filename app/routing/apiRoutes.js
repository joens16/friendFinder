var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });


  // Create New Characters - takes in JSON input
  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    // var newFriend = req.body;

    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newFriend);

    friends.push(req.body);
    var match = calcMatch(friends);
    res.json(match);
  });

  function calcMatch(answersArray) {
    var addDifferences = 0;
    var bestMatch = 40;
    var positionFriend = 0;
    var index = answersArray.length - 1;

    for (let i = 0; i < answersArray.length - 1; i++) {
      for (let x = 0; x < answersArray[i].scores.length; x++) {
        var num1 = parseInt(answersArray[i].scores[x]);
        var num2 = parseInt(answersArray[index].scores[x]);
        var substract = Math.abs(num1 - num2);
        addDifferences = addDifferences + substract;
      }
      if (bestMatch > addDifferences) {
        bestMatch = addDifferences;
        addDifferences = 0;
        positionFriend = i;
      }
    }
    return answersArray[positionFriend];
  }

  console.log("dentro de apiroutes");

};
