import { CheckCircle, Edit, Delete } from "@mui/icons-material";
import { useState } from "react";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through", cursor: "text" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <div className="buttons">
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircle id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <Edit id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <Delete id="i" />
        </button>
      </div>
    </div>
  );
}
