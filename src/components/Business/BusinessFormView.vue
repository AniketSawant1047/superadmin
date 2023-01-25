<template>
    <body class="register">
    <hr>
        <table class="table">
            <tr class="head">
                <td colspan="2" class="headline"> <i class="fa-solid fa-pencil"></i> Bussiness Form</td>
                <td > </td>
            </tr>
            <tr>
                <td class="firsttd"> <lable class="lable" for="">Bussiness Name</lable></td>
                <td> <input type="text" v-model="businessName"  placeholder="Enter Bussiness Name" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Business Description</lable></td>
                <td> <input type="text" v-model="businessDescription" placeholder="Enter Business Description" ></td>
            </tr>
        
            <tr>
                <td class="firsttd"><lable class="lable" for="">Business Owner ID</lable></td>
                <td><input type="number" v-model="businessOwnerId" placeholder="Enter Business Owner ID" required></td>
            </tr>

            <tr> 
                <td class="firsttd"><lable class="lable" for="">Phone</lable></td>
                <td><input v-model="businessPhone" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "10"  placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="phone" placeholder="Enter Phone Number"  required ></td> -->
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Bussiness Email</lable></td>
                <td><input type="text" v-model="businessEmail" placeholder="Enter Email" required></td>
            </tr>
            
            <tr>
                <td class="firsttd"><lable class="lable" for="">Country</lable></td>
                <td><input type="text" v-model="businessCountry" placeholder="Enter Country" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">State</lable></td>
                <td><input type="text"  v-model="businessState" placeholder="Enter State" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Business Address</lable></td>
                <td><input type="email" v-model="businessAddress" placeholder="Enter Business Location" required></td>
            </tr>
            <tr>
                <td class="firsttd"><lable class="lable" for="">Pin Code</lable></td>
                <td><input v-model="businessPincode" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number" maxlength = "6"  placeholder="Enter Pincode"/></td>
                <!-- <td><input type="number" v-model="pincode" required></td> -->
            </tr>
            <tr>
                <td>
                    <button class="button" type="submit" v-on:click="signUp"><h6><i class="fa-solid fa-floppy-disk"></i>&nbsp; Register</h6></button>

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
        }
    },
    methods:{
      async  signUp(){
           let result = await axios.post("http://localhost:8080/saveBusiness",{
            businessName:this.businessName,
            businessDescription:this.businessDescription,
            businessPhone:this.businessPhone,
            businessEmail:this.businessEmail,
            businessCountry:this.businessCountry,
            businessState:this.businessState,
            businessAddress:this.businessAddress,
            businessPincode:this.businessPincode,
            businessOwnerId:this.businessOwnerId,
           });

           console.warn(result);
           if(result.status==201){
            alert("sign_up succesfully");
            localStorage.setItem("user_info",JSON.stringify(result.data));
           }
           this.$router.push({path:`/BusinessListView`})
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
.head{
   
    background-color:#30419b;
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
    color: white;
}
thead, tbody, tr, th{
    font-size: 12px;
    border-style: solid;
    border-width: 1px;
    border: 1px rgba(255, 255, 255, 0.05) solid;
}
.firsttd{
    width: 10%;
}
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
    padding-top: 2px;
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
    font-size: large;
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
hr{
    margin: 0;
}
</style>

  
