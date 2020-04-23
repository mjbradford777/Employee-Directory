const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/books"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

router.get('/test', function(req, res) {
    res.json({title: 'I\'m working'});
})
module.exports = router;