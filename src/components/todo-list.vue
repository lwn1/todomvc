<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      @click="checkedAll"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <ListLi
        v-for="todo in todos"
        :key="todo.id"
        :title="todo"
        :clearTodos="clearTodos"
      />
      <TodoUnfinished
        v-for="list in unfinished"
        :key="list.id"
        :title="list"
        :clearTodos="clearTodos"
      />
      <TodoFulfill
        v-for="listing in fulfill"
        :key="listing.id"
        :title="listing"
        :clearTodos="clearTodos"
      />
    </ul>
  </section>
</template>

<script>
import ListLi from "./list-li.vue";
import TodoUnfinished from "./unfinished-list.vue";
import TodoFulfill from "./fulfill-list.vue";

export default {
  name: "List",
  components: {
    ListLi,
    TodoUnfinished,
    TodoFulfill,
  },
  props: ["todos", "clearTodos", "unfinished",'fulfill'],
  methods: {
    checkedAll(e) {
      this.$emit("checkAll", e.target.checked);
    },
  },
};
</script>

<style>
.main {
  position: relative;
  border: 1px solid #e6e6e6;
  /* display: none; */
}
.toggle-all {
  width: 1px;
  height: 1px;
  border: none;
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
}
.toggle-all + label {
  width: 60px;
  height: 34px;
  position: absolute;
  top: -52px;
  left: -13px;
  transform: rotate(90deg);
}
.main > label::before {
  content: "❯";
  font-size: 22px;
  color: #e6e6e6;
  padding: 10px 27px 10px 27px;
}
</style>