<template>
<section style="
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
">
  <div class="carousel">
    <ul>
      <li class="item">
          <img class="item__img" src="../assets/images/bazaelperez.png" alt="bazaelperez">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>Bazael Perez</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/images/nicolasschurmann.png" alt="nicolasschurmann">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>Nicolas Schurmann</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/images/diegomontoya.png" alt="diegomontoya">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>Diego Montoya</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/images/sachalifszyc.png" alt="sachalifszyc">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>Sacha Lifszyc</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/images/User.png" alt="user">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>user</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/images/User.png" alt="user">
          <div class="logo">
              <img src="../assets/images/javascript.png" alt="javascript">
            </div>
            <div class="item__name">
            <p>user</p> 
            </div>
      </li>
    </ul> 
  </div>
</section>
</template>

<script>
export default {
    name: 'Carousel',
}
</script>

<style>
    .carousel {
    align-items: center;
    display: flex;
    height: 200px;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    overflow-y: auto;
    width: 600px;
    }
    .carousel ul {
      display: flex;
      top: 0;
    }
    
    @keyframes change {
      0% { left: 300px}
      100% {left: -300px;}
}
    .item {
    animation: change 10s linear infinite;
    cursor: pointer;
    display: inline-block;
    height: 200px;
    list-style: none;
    margin-right: 1px;
    overflow: hidden;
    position: relative;
    width: 200px;
}

.item__name {
    background-color: rgba(0, 0, 0, 0.514);
    bottom: 30px;
    height: 25%;
    position: relative;
}
.logo img {
  border: 1px solid white;
  border-radius: 100%;
  bottom: 15px;
  height: 30px;
  margin-left: 41%;
  position: relative;
  z-index: 100;
}
p {
    color: white;
    padding-top: 20px;
}
.item__img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}
</style>