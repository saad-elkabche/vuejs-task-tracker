<template>
   <div :key="task.id" v-for="task in tasks">
        <single-task :task="task" :onDelete="onDelete"/>
   </div>
</template>

<script>

import singleTask from './singleTask.vue'

export default {
    name:"tasks",
    components:{
        singleTask
    },
    props:{
        onDelete:Function,
        tasks:{
            type:Array,
            default:[]
        }
    },
}
</script>

<style scoped>

</style>