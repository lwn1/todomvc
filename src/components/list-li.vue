<template>
  <li class="todo-li">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="title.done" />
      <label>{{ title.value }}</label>
      <button class="destroy" @click="clearList(title.id)"></button>
    </div>
  </li>
</template>

<script>
export default {
  name: "Li",
  props: ["title", "clearTodos"],
  methods: {
    clearList(id) {
      this.clearTodos(id);
    },
  },
};
</script>

<style>
li {
  position: relative;
  font-size: 24px;
  height: 58px;
  border-bottom: 1px solid #dedede;
}
li:last-child {
  border-bottom: none;
}
li .toggle {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  /* border: none; */
  /* -webkit-appearance:; */
}
li label {
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
}
/* li .toggle + label { */
/* background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E); */
/* background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E); */
/* background-position: center left; */
/* background-repeat: no-repeat; */
/* } */
li .destroy::after {
  content: "×";
}
li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background: none;
  border: none;
}
li:hover button {
  display: inline-block;
}
li button:hover {
  color: #af5b5e;
}
</style>