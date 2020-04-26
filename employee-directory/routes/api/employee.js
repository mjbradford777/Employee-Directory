const router = require("express").Router();
const employeeController = require("../../controllers/employeeController");

// Matches with "/api/books"
router.route("/")
  .get(employeeController.findAll)
  .post(employeeController.create);

router.route('/:id')
    .put(employeeController.update)
    .delete(employeeController.remove);

module.exports = router;