import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useUserContext } from "../context/userContext";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const {user} = useUserContext()


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
        timestamp: serverTimestamp(),
        user: user.email
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Añade una tarea 🚀</h2>
      <div className="input_container">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
};

export default AddTodo;
