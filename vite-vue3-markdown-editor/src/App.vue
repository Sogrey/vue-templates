<script>
import MarkDownEditor from './components/MarkDownEditor.vue'
export default {
    name: 'HelloWorld',
    components: {
        MarkDownEditor
    },
    data() {
        return {
        }
    }
}
</script>

<template>
 <div id="app">
        <div class="root_container">
            <hello-mark-down>            </hello-mark-down>
        </div>
 </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;  width: 100%;
  height: 100%;
}

.root_container {}
</style>
