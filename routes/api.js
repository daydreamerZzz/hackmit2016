var express = require('express');
var router = express.Router();

/* GET users listing. */
/* test with http://localhost:3000/api/users/kelly */
router.get('/users/:username', function(req, res, next) {
  var username = req.params.username;
  // TODO: fetch username data from firebase, with all recipes belonging to that user
  // var json = some firebase function
  var json =
  {
    username: "kelly",
    recipes: [
      "134ef2",
      "682034"
    ]
  };
  res.send(json);
});

/* test with http://localhost:3000/api/nodes/3 */
router.get('/nodes/:nodeid', function(req, res, next) {
  var nodeid = req.params.nodeid;
  // TODO: fetch node info
  // var json = some firebase function
  var json =
  {
    root_node: 0,
    node_id: 0,
    user_name: "Mrs. Smith",
    user_id: "13442ld",
    ingredients: [
      {
        name: 'cheese',
        unit: 'oz',
        amount: '4'
      }
    ],
    instructions: [
      "heat oven to 350 deg"
    ],
    servings: 8,
    children: [4,5,6],
    categories: ["dinner"]
  }

  res.send(json);
})

module.exports = router;