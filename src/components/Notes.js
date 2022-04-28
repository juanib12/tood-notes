import Title from "./Title";
import "../App.css";
import "./Notes.css";
import TodoNotes from "./TodoNotes";
import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";

const Notes = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const todosRef = collection(db, "todos");
    const q = query(
      todosRef,
      where("user", "==", user.email),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosCompleteArray = [];
      QuerySnapshot.forEach((doc) => {
        todosCompleteArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosCompleteArray);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div>
        <Title />
      </div>
      <div className="container_todos_notes">
        <div className="todosall_container_notes">
          <h2>Mis tareas 📙</h2>
          <scroll-container>
            {todos.length === 0 ? (
              <p>Añade una tarea y aparecerán aquí!</p>
            ) : (
              todos.map((todo) => (
                <scroll-page>
                  <TodoNotes key={todo.id} todo={todo} className="todos-items" />
                </scroll-page>
              ))
            )}
          </scroll-container>
        </div>
      </div>
    </div>
  );
};

export default Notes;
