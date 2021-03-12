<template>
  <div class="contenido">
      <h1 class="letras">Bienvenidxs a Community Fest and Code</h1>
      <h2 class="letras" style="color: gray;">¡Conoce gente, aprende y gana!</h2>
      <h5 class="letras" style="padding-top: 20px;">La próxima edición regresa en 2022, en la cual se planea involucrar a todos los programadores independientemente <br>
      del área de conocimiento que se encuentre, todo con un mismo propósito, aprender en comunidad.
      </h5>
  </div>
</template>

<script>
export default {
    name: 'Bienvenida'
}
</script>
<style>
.contenido {
  margin: auto;
  flex-direction: column;
  display: flex;
  text-align: center;
}
.letras {
  font-size: revert;
  font-weight: bold;
}
</style>