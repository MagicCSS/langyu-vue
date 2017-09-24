<template>
  <div id="app">
    <app-head></app-head>
    <router-view></router-view>
    <app-foot></app-foot>
  </div>
</template>

<script>
import AppHead from './components/Head'
import AppFoot from './components/Foot'

export default {
  components: {
    'app-head': AppHead,
    'app-foot': AppFoot,
  }
}
</script>