<template>
    <button :style="`background-color:${color};color:${textColor}`">{{name}}</button>
</template>

<script>
export default {
    name:"Button",
    props:{
        name:String,
        color:{
            default:"pink",
            type:String
        },
        textColor:{
            default:"black",
            type:String
        }
    }    
}
</script>


<style scoped>
button{
    height: 30px;
    border-radius: 15px;
    padding-left:20px ;
    padding-right:20px ;
    border: none;
}
button:hover{
    filter: brightness(0.8);
}
</style>