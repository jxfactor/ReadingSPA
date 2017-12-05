// src/App.vue

<template>
  <div id="wrapper">
    <div class="backdiv">
      <nav class="navbar navbar-default backbar">        
        <h3> 阅读体验实验 </h3>        
      </nav>
    </div>
    
    <button v-if="$route.path !== '/'" class="btn btn-primary btnback" @click="back()">返回</button>

    <div class="container">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigator', 
  methods : {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
 
<style>
  .backdiv {
    width:100%;
    height:70px;
    text-align:center;
  }
  .backbar {
    position: fixed;  
    width:100%;
    height:60px;
    margin-bottom: 20px;
  }
  .backbar h3 {
    display:inline-block;
  }
  .btnback {
    position: fixed;
    width: 60px;
    height: 40px;
    top: 10px;
    left: 10px;
  }
</style>












