<template>
  <section style="
    display: flex;
    justify-content: flex-end;
    align-items: center;"
    >
      <div class="card">
          Talleres
          <div>
              <div class="card__list1">
                <p>Talleres por areas de conocimiento</p>
                <ul>
                    <li>taller 1</li>
                    <li>taller 2</li>
                    <li>taller 3</li>
                </ul>
              </div>
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
}
p {
    color: rgb(63, 63, 63);
    font-size: 14px;
}
.card__list1 {
    background: rgb(240, 240, 240);
    margin: 20px;
}
.card__list1 ul {
    display: none;
}
.card__list1:hover ul, ul:hover {
	display: block;
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