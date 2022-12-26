import Title from "./Title";
import "../App.css";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import Footer from './Footer'



export const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todosCompleted, setTodosCompleted] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const todosRef = collection(db, "todos");
    const q = query(
      todosRef,
      where("completed", "==", false),
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

  useEffect(() => {
    const todosRef = collection(db, "todos");
    const q = query(
      todosRef,
      where("completed", "==", true),
      where("user", "==", user.email),
      orderBy("timestamp")
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosCompleteArray = [];
      QuerySnapshot.forEach((doc) => {
        todosCompleteArray.push({ ...doc.data(), id: doc.id });
      });
      setTodosCompleted(todosCompleteArray);
    });
    return () => unsubscribe();
  }, []);


  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };


  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
      <div className="container_todos">
        <div className="todosall_container">
          <h2>Tareas en proceso ⌛</h2>
          <scroll-container>
            {todos.length === 0 ? (
              <p>Añade una tarea y aparecerán aquí!</p>
            ) : (
              todos.map((todo) => (
                <scroll-page>
                  <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    className="todos-items"
                  />
                </scroll-page>
              ))
            )}
          </scroll-container>
        </div>
        <div className="todosall_container">
          <h2>Tareas completadas ✅</h2>
          <scroll-container>
            {todosCompleted.length === 0 ? (
              <p>No has completado ninguna tarea...</p>
            ) : (
              todosCompleted.map((todo) => (
                <scroll-page>
                  <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    className="todos-items"
                  />
                </scroll-page>
              ))
            )}
          </scroll-container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
