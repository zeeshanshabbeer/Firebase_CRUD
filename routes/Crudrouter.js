const express = require("express");
const router = express.Router();
const {
  create,
  read,
  update,
  delete_record,
} = require("../controllers/CrudController");

router.post("/Add_Data", create);
router.get("/read", read);
router.put("/update", update);
router.delete("/delete", delete_record);

module.exports = router;
