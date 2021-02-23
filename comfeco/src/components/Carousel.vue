<template>
  <div class="carousel">
    <ul>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
      <li class="item">
          <img class="item__img" src="../assets/User.png" alt="user">
            <div class="item__name">
            <img src="" alt="" srcset="">
            <p>Name</p> 
            </div>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
    name: 'Carousel'
}
</script>

<style>
    .carousel {
     align-items: center;
     display: flex;
     flex-direction: center;
     justify-content: center;
     text-align: center;
     min-height: calc(100vh - 200px);
     margin: auto;
     width: 250px;
     height: 200px;
     overflow: hidden;
    }
    .carousel ul {
      display: flex;
      animation: change 5s infinite
      alternate linear;
    }
    .carousel li {
      list-style: none;
      margin-right: 1px;
}
    
    @keyframes change {
      0%{margin-left: 0px;}
      20%{margin-left: 0px;}

      25%{margin-left: -700px;}
      45%{margin-left: -700px;}

      50%{margin-left: -1000px;}
      70%{margin-left: -1000px;}

      75%{margin-left: -550px;}
      100%{margin-left: -550px;}
}
    .item {
  border: solid 0px rgb(106, 4, 138);
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 190px;
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
.item__img img {
  width: 700px;
}
</style>