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
  })
    .then(() => res.redirect("/"))
    .catch((err) => res.send(err.message));
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
  )
    .then(() => res.redirect("/"))
    .catch((err) => res.send(err.message));
};

exports.delete_todo = (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then((todo) => res.status(204).send(`todo deleted ${todo.id}`));
};
