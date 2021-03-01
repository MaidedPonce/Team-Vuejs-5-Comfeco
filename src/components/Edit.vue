<template>
  <section>
      <div><p>Editar perfil</p>
        <img src="" alt="">
      </div>

      <form class="form">
          <div class="form__sub">
            <div>
            <label>Nick</label>
            <input type="text" placeholder="nickname">

            <label>Correo</label>
            <input type="text" placeholder="user@gmail.com">
            </div>
          </div>
          
            <div class="gender">
            <label for="genero">Genero</label>
                <select>
                    <option value="m">Mujer</option>
                    <option value="h">Hombre</option>
                    <option value="o">Prefiero no decirlo</option>
                </select>
                <label for="date">Fecha de nacimiento</label>
                <input type="date" value="2021-02-28" min="1900-01-01" max="2021-02-28">

            <div>
                <label for="password">Password</label>
                <input type="password" placeholder="password">
                <label for="Repeat password">Repeat Password</label>
                <input type="password" placeholder="repeat password">
            </div>
        </div>
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
    justify-content: center;
    margin: auto;
    flex-direction: column;
}
.form input {
    background: rgb(206, 206, 206);
    color: white;
    border-radius: 5px;
}
.form__sub {
    display: flex;
}

</style>