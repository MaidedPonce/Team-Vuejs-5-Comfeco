<template>
  <div class="carousel">
      <div class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Nombre</p> 
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style>
    .carousel {
    padding-left: 30px;
    width: 100%;
    position: relative;
    }
    .item {
  border: solid 2px rgb(106, 4, 138);
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
}
.item__name {
    background-color: black;
    height: 100%;
    position: relative;
    z-index: 100
}
p {
    color: white;
    text-align: center;
}
.item__img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>