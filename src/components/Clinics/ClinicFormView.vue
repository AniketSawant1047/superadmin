<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.8/css/intlTelInput.css" />
    </head>
    <body class="register">
  
        <table class="table">
            <tr class="head">
                <td colspan="2" class="headline"> <i class="fa-solid fa-pencil"></i> Clinics Form</td>
                <td > </td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Clinic Name</lable></td>
                <td> <input type="text" v-model="clinicName"  placeholder="Enter Clinic Name" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Clinic Address</lable></td>
                <td> <input type="text" v-model="clinicAddress" placeholder="Enter Clinic Address" ></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Clinic city</lable></td>
                <td><input type="text" v-model="clinicCity" placeholder="Enter Clinic City" required></td>
            </tr>
            <tr> 
                <td class="firsttd"><lable class="lable" for="">State</lable></td>
                <td><input type="text" v-model="clinicState" placeholder="Enter State"  required></td>
            </tr>
            <tr> 
                <td class="firsttd"><lable class="lable" for="">Pincode</lable></td>
                <td><input v-model="clinicPincode" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "6"  placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="clinicPincode" placeholder="Enter Pincode"  required></td> -->
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Affiliate Doctor</lable></td>
                <td><input type="text" v-model="affiliateDoctor" placeholder="Enter Affiliate Doctor Name" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Primary Doctor</lable></td>
                <td><input type="text" v-model="primaryDoctor" placeholder="Enter Primary Doctor Name" required></td>
            </tr>        
            <tr>
                <td class="firsttd"><lable class="lable" for="">Status</lable></td>
                <td> 
                    <select name="" id="status" v-model="selected" v-validate.initial="status" data-rules="required|alpha|min:3">
                        <option value="Enabled" >Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
               </td>
            </tr>
            <tr>
                <td>
                    <button class="button" type="submit" v-on:click="signUp"><router-link class="router-link" to="ClinicListView"><h6><i class="fa-solid fa-floppy-disk"></i>&nbsp; Register</h6></router-link></button>

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
            clinicName:'',
            clinicAddress:'',
            clinicCityName:'',
            clinicState:'',
            clinicPincode:'',
            affiliateDoctor:'',
            primaryDoctor:'',
            selected:'Enabled',
        }
    },
    methods:{
      async  signUp(){
           let result = await axios.post("http://localhost:8080/saveClinic",{
            clinicName:this.clinicName,
            clinicAddress:this.clinicAddress,
            clinicCity:this.clinicCity,
            clinicState:this.clinicState,
            clinicPincode:this.clinicPincode,
            affiliateDoctor:this.affiliateDoctor,
            primaryDoctor:this.primaryDoctor,
            clinicStatus: this.selected,
        
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

  