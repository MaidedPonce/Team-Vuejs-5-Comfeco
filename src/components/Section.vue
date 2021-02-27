<template>
  <section style="
    display: flex;
    justify-content: flex-end;"
    >
      <div class="card">
          Talleres
          <div>
            <ul class="card__list1">
                <p>Talleres por areas de conocimiento</p>
                <li></li>
                <li></li>
            </ul>
            <ul>
            <p class="card__list2">Hoy</p>
            <li>
                <div>
                    <p>
                        State of JavaScript
                    </p>
                    <p>By<a>Juan Pablo de la Torre</a></p>
                </div>
            </li>
            <li>
                <div>
                    <p>
                        IA con Python
                    </p>
                    <p>By<a>Yesi Days</a></p>
                </div>
            </li>
            <li></li>
            </ul>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Section'
}
</script>

<style>
.card {
    background: rgb(209, 209, 209);
    width: 290px;
    height: 255px;
}
p {
    color: rgb(63, 63, 63);
    font-size: 14px;
}
.card__list1 {
    background: rgb(240, 240, 240);
    margin: 20px;
}
.card__list2 {
    color: white;
    background: gray;
    padding: 0;
    margin: 20px;
}
</style>