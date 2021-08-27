<template>
  <li class="todo-li">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="title.done"/>
      <label>{{title.value}}</label>
      <button class="destroy" @click="clearList(title.id)"></button>
    </div>
  </li>
</template>

<script>
export default {
  name: "fulfill",
  props: ['title','clearTodos'],
  methods: {
    clearList(id) {
      this.clearTodos(id);
    },
  },
};
</script>

<style>
</style>