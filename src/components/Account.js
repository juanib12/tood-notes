import { useUserContext } from "../context/userContext";
import Title from "./Title";
import "./Account.css";
import { useState } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Account = () => {
  const { addPhotoUser, user } = useUserContext();
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `/users/` + user.uid + `/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          addPhotoUser(downloadURL);
        });
      }
    );
  };
  console.log(imgUrl);

  return (
    <div>
      <Title />
      <div className="container-account">
        <div className="center-account">
          <h1>Mis datos</h1>

          <h4>Datos de cuenta</h4>
          <div className="paper-account">
            <h5>Email</h5>
            <p>{user.email}</p>
          </div>
          <div className="paper-account2">
            <h5>Perfil</h5>
            {!user.photoURL ? (
              <div className="add-avatar">
                <form onSubmit={handleSubmit}>
                  <input type="file" className="item-add" />
                  <button type="submit">Subir</button>
                </form>
              </div>
            ) : (
              <div className="avatar">
                <img src={user.photoURL} width="50" height="50" />
              </div>
            )}
          </div>

          <h4>Datos personales</h4>
          <div className="paper-account">
            <h5>Nombre</h5>
            <p>{user.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
