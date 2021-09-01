<template>
  <section class="title">
    <TodoHeader @addLi="addLi" />
    <TodoList
      :todos="list"
      :clearTodos="clearTodos"
      @checkAll="checkAll"
      @clearTodos='clearTodos'
    />
    <TodoFooter
      :todos="todos"
      @clearTrue="clearTrue"
      @allFalse='allFalse'
      @allTrue='allTrue'
      @allChecked='allChecked'
      :curPage="'all'"
    />

  </section>
</template>

<script>
import TodoFooter from "../components/todo-footer.vue";
import TodoHeader from "../components/todo-header.vue";
import TodoList from "../components/todo-list.vue";


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
      list: JSON.parse(localStorage.getItem("todos")) || [],
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
  mounted () {
    this.$router.to === '/All'
      // this.curPage = 'all'
      this.allChecked()
      console.log('all',this)
  },
};
</script>



