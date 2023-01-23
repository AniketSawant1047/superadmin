<template> 
   <home-view></home-view>
     <body id="app">
        <table class="table">
            <thead>
               <tr>
                <th>Clinic ID</th>                
                <th>Clinic Name</th>
                <th>Clinic Address</th>
                <th>Clinic City</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Date Added</th>
                <th>Status</th>
                <th>Last Modified By</th>
                <th>Action</th>
               </tr>
            </thead>
            <tbody>
                <tr v-for="clinicList in list" :key="clinicList">
                    <td > {{(clinicList.clinicId)}}</td>
                    <td>{{(clinicList.clinicName)}}</td>
                    <td>{{(clinicList.clinicAddress)}}</td>
                    <td>{{(clinicList.clinicCity)}}</td>
                    <td>{{(clinicList.clinicState)}}</td>                   
                    <td>{{(clinicList.clinicPincode)}}</td>
                    <td>{{(clinicList.dateAdded)}}</td>
                    <td>{{(clinicList.status)}}</td>
                    <td>{{(clinicList.lastModifedBy)}}</td>
                    <td>
                        <router-link class="router-link"  to="DoctorRegisterView"><i class="fa-solid fa-pencil"></i></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
       
    </body>
</template>
<script>
import axios from 'axios';
export default{
    name: "ClinicListView",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        axios.get('http://localhost:8080/clinicList',{})
        .then(response => {
            this.list = response.data;
            console.log(response.data);
        })
        .catch(error =>{
            this.errors.push(error);
            console.log(error);
        })
    },

    
}

</script>

<style scoped>
#app{
    width: 100%;
}
.table{
    width: 100%;
    font-family: arial, sans-serif;
  font-size: 12px;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
.router-link{
    text-decoration: none;
    background-color: rgb(10, 116, 255);
    color: rgb(255, 255, 255);
    font-size: 16px;
    margin: 5px;
    padding: 5px;
    box-sizing: border-box;
}
.router-link:hover{
    position: relative;
    top: 2px;
    background-color: rgb(65, 147, 255);
}

 

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}

thead{
    background-color: rgb(26, 25, 25);
    color: white;
    border: rgb(124, 124, 124) 1px solid;
  
}

tr:nth-child(even) {
  background-color: #dddddd;
}
tbody td,tr{
    border: rgb(124, 124, 124) 1px solid;
}

</style>