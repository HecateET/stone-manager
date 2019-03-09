<template>
  <div id="app">
    <ManagerHeader></ManagerHeader>
    <router-view/>
  </div>
</template>

<script>
  import ManagerHeader from "@/views/managerHeader.vue"
export default {
  name: 'App',
  components:{
    ManagerHeader,
  },
}
</script>

<style>
#app {

}
</style>
