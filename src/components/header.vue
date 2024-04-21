<template>
    <div>
    <h3>Tasks Tracker</h3>
    <Button v-show="isHomePage" @click="onClick" :color="showForm?'red':'green'" textColor="white" :name="showForm?'Close': 'Add Task'"></Button>
    </div>
</template>


<script>
import Button from "./button.vue"
export default{
    name:"Header",
    props:{
        showForm:Boolean
    },
    components:{
        Button
    },
    methods:{
        onClick(){
            this.$emit('on-header-btn-click')
        }
    },
    computed:{
        isHomePage(){
            return this.$route.path==='/';
        }
    },
    emits:['on-header-btn-click']
}


</script>


<style scoped>
h3{
    display: inline;
}
div{
    justify-content: space-evenly;
    display: flex;
    align-items: center;
}

</style>