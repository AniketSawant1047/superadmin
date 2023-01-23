<template>
     <body id="app">
        <table class="tables">
            <thead>
               <tr>
                <th> Name</th>                
                <th> Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>&nbsp;&nbsp;&nbsp; Action &nbsp;&nbsp;&nbsp;</th>
               </tr>
            </thead>
            <tbody>
                <tr v-for="admin in list" :key="admin">
                    <td > {{(admin.adminName)}}</td>
                    <td>{{(admin.adminEmail)}}</td>
                    <td>{{(admin.adminPhone)}}</td>
                    <td>{{(admin.adminAddress)}}</td>
                    <td>
                        <router-link class="router-link"  to="WebsocketView"><i class="fa-solid fa-comment"></i></router-link>
                        <router-link class="router-link"  to="GmailSenderView"> <i class="fa-solid fa-envelope"></i></router-link>
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
    name: "AdminListView",
    data(){
        return{
            list:[]
        }
    },
    async mounted(){
        axios.get('http://localhost:8080/alladmins',{
        headers:{
        Authorization: 'Bearer' +localStorage.getItem('token')
 
  }
}).then(response => {
            this.list = response.data;
            console.log(response.data);
        })
        .catch(error =>{
            this.errors.push(error);
            
        })
    },

    
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