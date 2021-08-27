<template>
  <section class="title">
    <TodoHeader @addLi="addLi" />
    <TodoList
      :todos="list"
      :clearTodos="clearTodos"
      @checkAll="checkAll"
      
    />
    <TodoFooter
      :todos="todos"
      @clearTrue="clearTrue"
      @allFalse="allFalse"
      @allTrue="allTrue"
      @allChecked="allChecked"
    />

  </section>
</template>

<script>
import TodoFooter from "./components/todo-footer.vue";
import TodoHeader from "./components/todo-header.vue";
import TodoList from "./components/todo-list.vue";


export default {
  name: "App",
  components: {
    TodoFooter,
    TodoHeader,
    TodoList,
    
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      list: JSON.parse(localStorage.getItem("todos")) || []
    };
  },
  methods: {
    // 添加一个todo
    addLi(todoObj) {
      this.todos.push(todoObj);
    },
    clearTodos(id) {
      // 删除掉相同id的对象
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.list = this.list.filter((todo) => todo.id !== id);
    },
    // 点击全选
    checkAll(e) {
      this.todos.forEach((todo) => (todo.done = e));
    },
    // 清除所有已勾选的
    clearTrue() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
      this.list = this.list.filter((todo) => {
        return !todo.done;
      });
    },
    // 显示全部
    allChecked() {
      this.list = this.todos
    },
    // 筛选出没勾选的
    allFalse() {
      this.list = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    // 筛选出勾选的
    allTrue() {
      this.list = this.todos.filter((todo) => {
        return todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
  line-height: 1.4em;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.title {
  position: relative;
  background-color: #fff;
  /* width: 550px; */
  margin: 130px 0 40px 0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%), 0 25px 50px 0 rgb(0 0 0/10%);
}
h1 {
  position: absolute;
  top: -70px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
</style>
