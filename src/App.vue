<template>
  <section class="title">
    <router-view></router-view>
  </section>
</template>

<script>


export default {
  name: "App",
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
