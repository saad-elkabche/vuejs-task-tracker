

<template>
<div class="field">
    <label >Task</label>
    <textarea rows="4" placeholder="enter task here" cols="50"  name="task" v-model="task"/>
    <p>{{errorTask}}</p>
</div>  
<div class="field">
    <label >date</label>
    <input type="text" placeholder="Enter Date" name="date" v-model="date"/>
    <p>{{errorDate}}</p>
</div> 
<div class="checkbox">
    <label >Task</label>
    <input type="checkbox" name="isReminder" v-model="isReminder" />  
</div>
<div class="btn">
    <Button @click="addTask" name="Add Task" color="green" textColor="white"/>
</div>
</template>




<script>
import Button from './button.vue';


export default {
    name:'addTaskForm',
    components:{
        Button
    },
    data(){
        return{
            isReminder:false,
            date:'',
            task:"",
            errorDate:"",
            errorTask:"",
        }
    },
    methods:{
        addTask(){
            let isValidInputs=true;
            
            if(this.task.trim().length==0){
                this.errorTask='required';
                isValidInputs=false;
            }
            if(this.date.trim().length==0){
                this.errorDate='required';
                isValidInputs=false;
            }

            if(isValidInputs){
                this.$emit('add-task',{
                    task:this.task,
                    date:this.date,
                    isReminder:this.isReminder
                })
            }else{
               
            }
        }
    },
    emits:['add-task']
}
</script>




<style scoped>
.field{
    margin: 8px 10px;
}
p{
    color: red;
    font-weight: normal;
    margin-top: 0px;
}
.checkbox{
     margin: 8px 10px;
     align-items: center;
     display: flex;
}
.checkbox input{
    margin-left:40px ;
    
}
.field label{
    display: block;
    margin-bottom: 5px;
}
label{
    font-size: larger;
    color:black;
    font-weight: bold;
}
textarea{
    border: 1px solid black;
    border-radius: 10px;
}
input{
    border: 1px solid black;
    border-radius: 10px;
    height: 27px;
}
.btn{
    justify-content: center;
    display: flex;
    margin-bottom: 30px;
}




</style>