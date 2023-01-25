<template>
    <body class="register">
        <table class="table">
            <tr class="head">
                <td class="headline"> <i class="fa-solid fa-pencil"></i> Patient Form</td>
                <td> </td>
            </tr>

            <tr>
                <td class="firsttd"><label for="">First Name</label></td>
                <td> <input type="text" v-model="patientName" placeholder="Enter First Name"></td>
            </tr>
            <tr>
                <td class="firsttd"><label for="">Email</label></td>
                <td><input type="text" v-model="PatientEmail" placeholder="Enter Email"></td>
            </tr>
            <tr>
                <td class="firsttd"><label for="">Phone</label></td>
                <td><input v-model="patientPhone"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        type="number" maxlength="10" placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="phone" placeholder="Enter Phone Number"></td> -->
            </tr>
            <tr>
                <td class="firsttd"><label for="">Pin Code</label></td>
                <td><input v-model="patientPincode"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        type="number" maxlength="6" placeholder="Enter Phone Number" /></td>
                <!-- <td><input type="number" v-model="pincode" placeholder="Enter Pincode"></td> -->
            </tr>
            <tr>
                <td class="firsttd"><label for="">Date of Birth</label></td>
                <td><input type="date" v-model="patientDateOfBirth" placeholder="Enter Date of Birth"></td>
            </tr>
            <tr>
                <td class="firsttd"><label for="">Chief Complaint</label></td>
                <td><input type="text" v-model="patientCheifComplaint" placeholder="Enter Complaint"></td>
            </tr>
            <tr class="status">
                <td class="firsttd"><label for="">Status</label></td>
                <td>
                    <select name="status" id="status" v-model="selected">
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                    `
                </td>
            </tr>
            <tr>
                <td>
                    <button class="button" type="submit" @click="signUp()"><router-link class="router-link"
                            to="PatientsListView">
                            <h6><i class="fa-solid fa-floppy-disk"></i>&nbsp; Register</h6>
                        </router-link></button>

                </td>
            </tr>
        </table><br>
    </body>
</template>
<script>
import axios from 'axios'
// const config = {
//     headers: { Authorization: "Bearer ${token}",token: localStorage.getItem("token") }
// };
export default {
    name: 'SignUp',
    data() {
        return {
            patientName: '',
            PatientEmail: '',
            patientPhone: '',
            patientPincode: '',
            patientDateOfBirth: '',
            patientCheifComplaint: '',
            selected: 'Enabled',
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:8080/savepatient", {
                patientName: this.patientName,
                PatientEmail: this.PatientEmail,
                patientPhone: this.patientPhone,
                patientPincode: this.patientPincode,
                patientDateOfBirth: this.patientDateOfBirth,
                patientCheifComplaint: this.patientCheifComplaint,
                cheifComplaint: this.cheifComplaint,
                status: this.selected
            }).then(console.log).catch(console.log);

            console.warn(result);
            if (result.status == 201) {
                alert("Patient Added succesfully");
                localStorage.setItem("user_info", JSON.stringify(result.data));
            }

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