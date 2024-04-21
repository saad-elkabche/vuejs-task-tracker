<template>
    <div v-if="showAddForm">
        <add-task @add-task="addTask"/>
    </div>
    <tasks-body :tasks="tasks"/>
    
</template>

<script>
import addTask from '../components/addTaskForm.vue';
import tasksBody from '../components/tasksBody.vue';
export default {
    name:'home',
    data(){
        return{
            tasks:[]
        }
    },
    props:{
        showAddForm:Boolean
    },
    components:{
        addTask,
        tasksBody
    },
    methods:{
        async fetchData(){
            const res=await fetch("http://localhost:3000/tasks");
            const data=await res.json();
            return data;
        },
        async addTask(task){
            const res=await fetch(
                "http://localhost:3000/tasks",
                {
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(task)
                }
            );
            
            if(res.status===201){
                const newTask=await res.json();
                this.tasks=[newTask,...this.tasks];
            }else{
                alert('error');
            }
        }
    },
    async created(){
        this.tasks=await this.fetchData();
    }
}
</script>