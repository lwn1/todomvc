<template>
  <header class="header">
    <h1>todos</h1>
    <input class="input" placeholder="What needs to be done?" v-model="value"/>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header .input {
  padding: 16px 16px 16px 60px;
  border: none;
  width: 474px;
  height: 33px;
  font-size: 24px;
  outline: none;
}
.input::-webkit-input-placeholder {
  font-style: italic;
  color: #e6e6e6;
}
</style>