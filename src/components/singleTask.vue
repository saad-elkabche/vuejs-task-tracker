<template>
    <div @click="onDblClick(task)" :class="task.isReminder?'reminder':''">
      <h3>{{task.task}}
        <i @click="onDelete(task.id)" class="fa fa-close"  ></i>
        </h3>  
      <p>{{task.date}}</p>
      
    </div>    
</template>

<script>
export default {
    name:'singleTask',
    props:{
        task:Object,
        onDelete:Function
    },
    methods:{
        onDblClick(task){
            task.isReminder=!task.isReminder;
        }
    }
}
</script>

<style scoped>
div{
    margin: 5px;
    cursor: pointer;
    padding: 10px 10px;
}
.reminder{
    border-left:3px solid green ;
}
.fa-close{
    color:red;
    font-size:25px;
}
h3{
    display: flex;
    justify-content: space-between;
    align-items: center;
}


</style>