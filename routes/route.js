const express = require("express");
const router = express.Router();
const {
  get_todos,
  show_todos,
  add_todos,
  find_todo,
  edit_todos,
  delete_todo,
} = require("../controllers/index");

router.get("/", get_todos);
//NOTE: add new todo
router.post("/", add_todos);
//NOTE: find all todos
router.get("/todos", show_todos);

//NOTE: find todo by id
router.get("/todos/:id", find_todo);

//NOTE: update todo

router.post("/todos/:id", edit_todos);
//NOTE: delete todo

router.delete("/todos/:id", delete_todo);

module.exports = router;
