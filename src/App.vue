<template>
    <div class="container">
        <Header @on-header-btn-click="addCloseForm" :showForm="showForm"></Header>
        <router-view :showAddForm="showForm"/>
        <Footer/>
        
    </div>
</template>

<script>

import Header from './components/header.vue';
import Footer from './components/footer.vue';



export default {
    name:"app",
    components:{
        Header,
        Footer
    },
    data(){
       return{
            tasks:[],
            showForm:false
        }
    },
    created(){
         this.tasks = [
            { id: 1, task: "Complete project", date: "2024-04-15", isReminder: true },
            { id: 2, task: "Prepare presentation", date: "2024-04-16", isReminder: false },
            { id: 3, task: "Attend meeting", date: "2024-04-17", isReminder: true },
            { id: 4, task: "Send report", date: "2024-04-18", isReminder: false },
            { id: 5, task: "Review code", date: "2024-04-19", isReminder: true },
            { id: 6, task: "Call client", date: "2024-04-20", isReminder: false },
            { id: 7, task: "Follow up email", date: "2024-04-21", isReminder: true },
            { id: 8, task: "Schedule meeting", date: "2024-04-22", isReminder: false },
            { id: 9, task: "Brainstorm ideas", date: "2024-04-23", isReminder: true }
         ];
    },
    methods:{
        onDelete(id){
            if(confirm('are you sure ??')){
               this.tasks= this.tasks.filter((task)=>task.id!=id)
            }
        },
        addTask(task){
            this.tasks=[
                {
                    ...task,
                    id:this.tasks.length+1
                },
                ...this.tasks
            ],
            this.showForm=false;
            console.log(this.tasks);
        },
        addCloseForm(){
            this.showForm=!this.showForm;
        }
    }

}
</script>

<style>
#app{
    justify-content: center;
    align-items: center;
    display: flex;
}
.container{
    width: 50%;
    margin-top: 50px;
    background-color: white;
    box-shadow:2px 3px 15px gray ;
    border-radius: 20px;
}
</style>