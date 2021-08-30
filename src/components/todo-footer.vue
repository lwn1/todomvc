<template>
  <footer class="footer" v-if="todos.length">
    <span class="todo-count">
      <strong>{{ todosLength }}</strong>
      items left
    </span>
    <ul class="filters">
      <!-- <li><a @click="allCheck" href="#/" class="selected">All</a></li>
      <li><a @click="activeAll" href="#/active">Active</a></li>
      <li><a @click="finishAll" href="#/completed">completed</a></li> -->

      <!-- <li>
        <router-link @click.native="allCheck" to="/All" class="selected">All</router-link>
      </li>
      <li>
        <router-link @click.native="activeAll" to="/Active">Active</router-link>
      </li>
      <li>
        <router-link @click.native="finishAll" to="/Completed">completed</router-link>
      </li> -->

      <li>
        <router-link to="/All" active-class="selected">All</router-link>
      </li>
      <li>
        <router-link to="/Active" active-class="selected">Active</router-link>
      </li>
      <li>
        <router-link to="/Completed" active-class="selected">completed</router-link>
      </li>
    </ul>
    <button class="clear" @click="clearAll">Clear completed</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      filterState: "all",
    };
  },
  props: ["todos"],
  computed: {
    todosLength() {
      let i = 0;
      this.todos.filter((todo) => {
        if (!todo.done) i++;
      });
      return i;
    },
    // filterItems() {
    //   switch (this.filterState) {
    //     case "active":
    //       this.todos.filter((todo) => !todo.done);
    //       break;
    //     case "completed":
    //       this.todos.filter((todo) => todo.done);
    //       break;
    //     default:
    //       this.todos;
    //       break;
    //   }
    // },
  },
  methods: {
    clearAll() {
      this.$emit("clearTrue");
    },
    activeAll() {
      this.$emit("allFalse");
    },
    finishAll() {
      this.$emit("allTrue");
    },
    allCheck() {
      this.$emit("allChecked");
    },
  },
};
// window.onhashchange = function () {
//   const hash = window.location.hash.substr(2) || "all";
//   this.filterState = hash;
// };
// window.onhashchange()
</script>

<style>
.footer {
  /* display: none; */
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  /* border-top: 1px solid #e6e6e6; */
}
.footer .todo-count {
  float: left;
}
.footer .filters {
  position: absolute;
  float: left;
  right: 0;
  left: 0;
}
.footer .filters li {
  display: inline;
  border-bottom: none;
}
.footer .filters li a {
  color: #777;
  font-size: 14px;
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
}
.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
.footer .clear {
  /* display: none; */
  position: relative;
  float: right;
  line-height: 20px;
  cursor: pointer;
  background: none;
  font-size: 100%;
  border: none;
  color: #777;
}
</style>