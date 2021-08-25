<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{todos.length}}</strong>
      items left
    </span>
    <ul class="filters">
      <li><a href="#/" class="selected">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">completed</a></li>
    </ul>
    <button class="clear">Clear completed</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ['todos'],
  
  
};
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
.footer .clear{
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