import { Link } from "react-router-dom";

export default function TodoNotes({ todo }) {
  return (
    <div className="todo-notes">
      <input
        style={{
          cursor: "text",
        }}
        type="text"
        value={todo.title}
        className="list"
      />
      <div className="buttons-notes">
        <Link to="/tood-notes/home">Editar</Link>
      </div>
    </div>
  );
}
