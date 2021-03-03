<template>
  <section>
      <div>
        <p>Editar perfil</p>
        <img src="" alt="">
      </div>

      <form class="form">

            <div class="form__section">
            <label class="title">Nick
            <input type="text" placeholder="nickname"></label>

            <label class="title">Correo
            <input type="text" placeholder="user@gmail.com"></label>
            </div>


            <div>
            <label for="genero">Genero</label>
                <select>
                    <option value="m">Mujer</option>
                    <option value="h">Hombre</option>
                    <option value="o">Prefiero no decirlo</option>
                </select>
              <label for="date">Fecha de nacimiento</label>
              <input type="date" value="2021-02-28" min="1900-01-01" max="2021-02-28">
                
            </div>

            <div>
                <label for="password">Password</label>
                <input type="password" placeholder="password">
                <label for="Repeat password">Repeat Password</label>
                <input type="password" placeholder="repeat password">
            </div>

            <label for="area">Area de conocimiento</label>
                <select>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="bd">Base de Datos</option>
                </select>

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


              <label for="Biografia">Biografia</label>
              <textarea></textarea>

      </form>
    </section>
</template>

<script>
export default {
name: 'Edit'
}
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
}
.form__sub {
    display: flex;
}
.form img {
  height: 30px;
  width: 30px;
}
.form__section {
  display: flex;
}
.title {
  display: flex;
  flex-direction: column;
  padding-left: 50px;
}
.redes {
  display: flex;
}

</style>