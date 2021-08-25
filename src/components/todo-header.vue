<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="input"
      placeholder="What needs to be done?"
      autofocus
      v-model="index"
      @keyup.enter="addValue"
     
    />
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      count: 0,
      index: "",
    };
  },
  methods: {
    addValue() {
      if(!this.index) return
      const todoObj = { id: this.count++, value: this.index, done: false };
      this.$emit('addLi',todoObj)
      this.index = "";
    },
    
  },
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