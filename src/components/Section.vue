<template>
  <section style="
    display: flex;
    justify-content: flex-end;
    align-items: center;"
    >
      <div class="card">
          Talleres
          <div>
                <select class="card__list1">
                    <option value="backend">Talleres por area de conocimiento</option>
                    <option value="frontend">Frontend</option>
                    <option value="bd">Base de Datos</option>
                </select>
            <div class="card__list2">
                <p class="card__list2--today">Hoy</p>
            <ul>
            <li class="card__list2--state">
                <p> State of JavaScript</p>
                <p>By<a>Juan Pablo de la Torre</a></p>
            </li>
            <li class="card__list2--state">
                <p>IA con Python</p>
                <p>By<a>Yesi Days</a></p>
            </li>
            </ul>
            </div>
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
    margin-bottom: -200px;
}
p {
    color: rgb(63, 63, 63);
    font-size: 14px;
}
.card__list1 {
    background: rgb(240, 240, 240);
    margin: 20px;
    outline: none;
}

.card__list2 {
    margin-bottom: 0;
    margin: 20px;
}
.card__list2--today {
    color: white;
    background: gray;
    padding: 0;
}
.card__list2 p {
    padding-top: 0;
}
.card__list2--state {
    padding-bottom: 20px;
}
.card ul {
    list-style: none;
}
</style>