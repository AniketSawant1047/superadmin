<template> 
     <body id="app">
        <table table table-striped table-dark class="table" id="element-to-convert">
            <thead>
               <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>External Doctor</th>
                <th>Treatment Days</th>
                <th>Milestone</th>
                <th>Days to next milestone</th>
                <th>Aligner #</th>
                <th>Days to next aligner</th>
                <th>status</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                <tr v-for="PatientList in list" :key="PatientList">
                    <td > {{(PatientList.patientName)}}</td>
                    <td> {{(PatientList.patientPhone)}}</td>
                    <td> {{(PatientList.patientEmail)}}</td>
                    <td>{{ (PatientList.patientId) }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{{(PatientList.status)}}</td>
                    <td>
                        <router-link class="icon" to=""><i id="icon"  class="fa-solid fa-pen-nib"></i></router-link>
                        <router-link class="icon" to="" @click="sendId(PatientList.patientId)"><i id="icon"  class="fa-solid fa-eye"></i></router-link>
                    </td>
                </tr>
            </tbody>
             
    </table>
       
    </body>
</template>
<script>

import axios from 'axios';

export default{
    
    name: "PatientListView",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        // let result = await axios.get("http://localhost:8080/findAllD");
        // this.list = result.data

        axios.get('http://localhost:8080/findAllP',{
     
}).then(response => {
            this.list = response.data;
            console.log(response.data);
        })
        .catch(error =>{
            this.errors.push(error);
            console.log(error);
        })
    },
    methods:{
        sendId(event){
            this.$router.push({path:`/getPatient`})
            console.log(event);
            localStorage.setItem("id",event)
            this.pid = localStorage.getItem("id");
        
       
        },
        
    }
   
   
    
}

</script>

<style scoped>

#app{
   width: 100%;
}
.tables{
   width: 100%;
   color: white;
   background: transparent;
}
.router-link{
   text-decoration: none;
   background-color: rgb(10, 116, 255);
   color: rgb(255, 255, 255);
   font-size: 10px;
   margin: 5px;
   padding: 5px;
   box-sizing: border-box;
}
.router-link:hover{
   position: relative;
   top: 2px;
   background-color: rgb(65, 147, 255);
}
table {
 font-family: arial, sans-serif;
 font-size: 12px;
 border-collapse: collapse;
 text-align: center;
}

td, th {
 border: 1px solid #dddddd;
 text-align: left;
 padding: 8px;
 text-align: center;
}

thead th{
   background-color: #30419b;
   color: rgb(194, 194, 194);
   border: rgb(124, 124, 124) 1px solid;
   font-size: 14px;
}


tbody td,tr{
   border: rgb(124, 124, 124) 1px solid;
}
</style>