<template>
    <body class="register">
        <table class="table">
            <tr class="head">
                <td colspan="2" class="headline"> <i class="fa-solid fa-pencil"></i> Doctor Form</td>
                <td > </td>
            </tr>
            <tr>
                <td class="firsttd"> <lable class="lable" for="">First Name</lable></td>
                <td> <input type="text" v-model="first_name"  placeholder="Enter First Name" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Last Name</lable></td>
                <td> <input type="text" v-model="last" placeholder="Enter Last Name" ></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Email</lable></td>
                <td><input type="email" v-model="email" placeholder="Enter Email" required></td>
            </tr>
            <tr> 
                <td class="firsttd"><lable class="lable" for="">Phone</lable></td>
                <td><input v-model="phone" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "10"  placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="phone" placeholder="Enter Phone Number"  required ></td> -->
            </tr>
            <tr>
                <td  class="firsttd" ><lable class="lable" for="">Doctor Type</lable></td>
                <td> 
                    <select name="" id="status" v-model="selected" v-validate.initial="doctorType" data-rules="required|alpha|min:3" >
                        <option value="Internal">Internal</option>
                        <option value="External">External</option>
                    </select>
    `           </td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Certification No. </lable></td>
                <td><input type="text" v-model="certificatenumber" placeholder="CertificationNumber" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Country</lable></td>
                <td><input type="text" v-model="country" placeholder="Enter Country" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">State</lable></td>
                <td><input type="text"  v-model="state" placeholder="Enter State" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Pin Code</lable></td>
                <td><input v-model="pincode" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "6"  placeholder="Enter Pincode"/></td>
                <!-- <td><input type="number" v-model="pincode" required></td> -->
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Specialization</lable></td>
                <td>
                    <input type="text" v-model="specialization" v-validate.initial="state" data-rules="required|alpha|min:3" placeholder="Enter Specialization" >
                </td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">User Name</lable></td>
                <td> <input type="text" v-model="userName"  placeholder="Enter User Name" required></td>
                
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">password</lable></td>
                <td><input type="password" v-model="password" v-validate.initial="password" data-rules="required|passphrase" placeholder="Enter Password" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Confirm Password</lable></td>
                <td><input type="text" v-model="confirm" v-validate.initial="confirm" data-rules="required|passphrase" placeholder="Confirm Password" required></td>
            </tr>            
            <tr>
                <td class="firsttd"><lable class="lable" for="">Status</lable></td>
                <td> 
                    <select name="status" id="status" v-model="select" v-validate.initial="status" data-rules="required|alpha|min:3">
                        <option  value="Enabled" >Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
               </td>
            </tr>
            <tr>
                <td>
                    <button class="button" type="submit" v-on:click="signUp"><router-link class="router-link" to="DoctorListView"><h6><i class="fa-solid fa-floppy-disk"></i>&nbsp; Register</h6></router-link></button>

                </td>
            </tr>
    </table>
    <br>
    
</body>
</template>

<script >
import axios from 'axios'

export default{
    name:'SignUp',

    data(){
        return{
            username:'',
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            selected:'External',
            certificatenumber:'',
            country:'',
            state:'',
            pincode:'',
            password:'',
            confirm:'',
            select:'Eabled',
            formSubmitted: false
        }
    },
    methods:{
      async  signUp(){
           let result = await axios.post("http://localhost:8080/saveDoctor",{
            email: this.email,
           password: this.password, 
           first_name: this.first_name,
           last_name: this.last_name,
           phone: this.phone,
           doctorType: this.selected,
           certificatenumber: this.certificatenumber,
           country: this.country,
           state: this.state,
           pincode:this.pincode,
           confirm: this.confirm,
           status: this.select,
           formSubmitted: this.formSubmitted,
           });

           console.warn(result);
           if(result.status==201){
            alert("sign_up succesfully");
            localStorage.setItem("user_info",JSON.stringify(result.data));
           }
    },
    validateBeforeSubmit() {
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
    }
  }
}
</script>
<style scoped>

.register{
    width: 100%;
}
.table{
   width:  100%;
}
.firsttd{
    width: 10%;
}
.head{
   
    background-color: #30419b;
    height: 40px;
    color: white;
    text-align: start;
    font-size: 16px;
}
.headline{
    padding-left: 20px;
}
.register input,#status{
    width: 97%;
    height: 31px;
    padding-left: 20px ;
    display: block;
    margin: 10px 10px 10px 20px;
    border: 1px solid skyblue;
    border-radius: 5px;
    background: transparent;
    color: white;
}
thead, tbody, tr, th{
    font-size: 12px;
    border-style: solid;
    border-width: 1px;
    border: 1px rgba(145, 145, 145, 0.418) solid;
}
td{
    border: none}
.lable{
    display: flex;
    justify-content: end;
    padding-left: 30px;
}

.button{
    position: relative;
    left: 350%;
    width: 150px;
    height: 40px;
    margin: 10px;
    text-align: center;
    padding-top: 0px;
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    display: inline-block;
    background-color: rgb(53, 134, 255);
    border: none;
}
button:hover, button:focus{
    background-color: rgb(53, 199, 102);
}
.router-link{
    text-decoration: none;
    color: white;
}

.router-link h6{
    font-size: 14px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.nav span{
    position: relative;
    padding-left: 10px;
    top: 24px;
    font-size: 12px;
}
#nav{
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    top: 10px;
}
#button{
    background-color: white;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px rgb(59, 59, 59) solid;
    margin-left: 5px;
}
#forward{
    color: rgb(59, 59, 59);

}
</style>