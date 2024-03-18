const db = require("../models");

exports.get_todos = (req, res) => {
  res.render("layout");
};

exports.show_todos = (req, res) => {
  db.Todo.findAll().then((todos) => {
    res.render("home", {
      todos,
    });
  });
};

exports.add_todos = (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then(() => res.redirect("/"));
};

exports.find_todo = (req, res) => {
  db.Todo.findOne({
    where: {
      id: req.params.id,
    },
  }).then((todo) => {
    res.render("todo-edit", {
      todo,
    });
  });
};

exports.edit_todos = (req, res) => {
  db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(() => res.redirect("/"));
};
