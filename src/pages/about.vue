<template >
    <div>
        <Button @click="onClick" name="Back" />
    </div>
</template>

<script>
import Button from '../components/button.vue';



export default {
    name:'about',
    components:{
        Button
    },
    methods:{
        onClick(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
div{
    justify-content: center;
    display: flex;
    margin: 30px;
}
</style>