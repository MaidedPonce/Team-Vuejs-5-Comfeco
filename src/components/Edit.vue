<template>
  <section style="margin-top: 100px; margin-bottom: 10%;">
      <form class="form">
        <div class="edit">
          <h3>Editar perfil</h3>
          <img src="../assets/images/edit.png" alt="edit-profile">
        </div>
            <div class="form__section">
              <label class="title">Nick
              <input type="text" placeholder="nickname"></label>

              <label class="title">Correo
              <input type="text" placeholder="user@gmail.com"></label>
            </div>

            <div class="form__section">
              <label class="title" for="genero">Genero
                <select size="1">
                  <option value="seleccionar">Seleccionar</option>
                    <option value="m">Mujer</option>
                    <option value="h">Hombre</option>
                    <option value="o">Prefiero no decirlo</option>
                </select></label>

              <label class="title" for="date">Fecha de nacimiento
              <input type="date" value="2021-02-28" min="1900-01-01" max="2021-02-28"></label>
            
              <label class="title" for="pais">Pais
                <select size="1">
                    <option value="seleccionar">Seleccionar</option>
                    <option value="mexico">Mexico</option>
                    <option value="argentina">Argentina</option>
                    <option value="colombia">Colombia</option>
                </select></label>
            </div>

            <div class="form__section--pass">

                <label class="title" for="password">Password
                <input type="password" placeholder="password"></label>

                <label class="title" for="Repeat password">Repeat Password
                <input type="password" placeholder="repeat password"></label>
            </div>

          <div class="form__section--area">
            <label for="area">Area de conocimiento</label>
                <select size="1">
                  <option value="seleccionar">Seleccionar</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="bd">Base de Datos</option>
                </select>
          </div>

            <div class="redes">
             <img src="../assets/images/facebook.png" alt="facebook"><label for="facebook">facebook.com/</label>
              <input type="url">
              <img src="../assets/images/github.png" alt="github"><label for="github">github.com/</label>
              <input type="url">
            </div>

            <div class="redes">
              <img src="../assets/images/linkedin.png" alt="linkedin"><label for="linkedin">linkedin.com/in/</label>
              <input type="url">
              <img src="../assets/images/twitter.png" alt="twitter"><label for="twitter">twitter.com/</label>
              <input type="url">
            </div>
            
            <div class="form__section--text">
              <label for="Biografia">Biografia</label>
              <textarea></textarea>
              <button>Guardar cambios</button>
            </div>
      </form>
    </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
name: 'Edit',
data() {
  return {

  }
},
methods: {
  const : firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var usern = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (usern != null) {
    name = usern.displayName;
    email = usern.email;
    photoUrl = usern.photoURL;
    emailVerified = usern.emailVerified;
    uid = usern.uid;
    console.log(name, email)
  }
  } else {
    console.log('No estás navegando')
  }
})
}}
</script>

<style>

.form {
    display: flex;
    height: 600px;
    width: 600px;
    justify-content: space-around;
    margin: auto;
    flex-direction: column;
}
.form input {
    background: rgb(206, 206, 206);
    color: white;
    border-radius: 5px;
    outline: none;
    width: 290px;
    height: 30px;
}
.form__sub {
    display: flex;
}
.form img {
  height: 20px;
  width: 20px;
}
.form__section {
  display: flex;
}
.title {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.redes {
  align-items: center;
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}
.redes input {
  margin-right: 10px;
  margin-left: 10px;
  width: 160px;
}
.edit {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edit img {
  border: solid 3px rgb(77, 77, 77);
  border-radius: 100%;
  height: 80px;
  width: 80px;
}
.form__section--pass {
  display: flex;
}
.form select {
  height: 30px;
  background: rgb(206, 206, 206);
  color: white;
  border-radius: 5px;
  outline: none;
  flex-direction: row-reverse;
}
.form__section--area select{
  width: 600px;
}
.form textarea {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 600px;
  border: solid 2px rgb(206, 206, 206);
  outline: none;
  border-radius: 5px;
  background: rgb(206, 206, 206);
}
.form__section select {
  width: 135px;
}
.form button {
  width: 130px;
  height: 35px;
  background: rgb(124, 124, 124);
  font-size: 14px;
  border: solid 2px rgb(83, 83, 83);
  border-radius: 10px;
  color: white;
  margin-left: 470px;
  margin-top: 20px;
  outline: none;
}
</style>