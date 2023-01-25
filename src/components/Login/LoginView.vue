<template>
    <body>
        <img src="./Images/logo.png" alt="" style="position: relative;">
        <div class="form">
            <img src="./Images/login.png" alt="" style="margin-left: 22%;">
            <br><br>
            <div class="input-group mb-3">
             <span class="input-group-text" id="basic-addon1">@</span>
             <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="username" name="username">
            </div><br>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">#</span>
                <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" v-model="password" name="password">
            </div>
            <small style="color: red;">{{ message }}</small><br><br>
            <div class="d-grid gap-2">
                <button class="login" type="button" @click="login(username, password)"><b>LogIn</b></button>
            </div>
            <br><br><br>
            <hr style="color: white; height:1px;">
            <div class="foot">
              Don't Have an Account? Please 
              <router-link class="router-link"  to="SignUp"> Register</router-link>

              <router-link class="router-link"  to="image"> Register</router-link>              
          </div>
        </div>

  
    </body>
</template>
<script>
    export default{
        data(){
          return{
              message:''
          }
      },
        methods:{
            login(username, password){
                if (username === 'admin' && password === 'admin') {
                    this.$router.push({path:`/HomeView`})
                }
                else{
                    this.message = "Username and Password incorrect"
                }
            }
        }
    }
</script>
<style scoped>
body {
    background-image: url("./Images/AdminBackground.jpg");
    background-size: 100%;
    background-repeat: repeat;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    position: relative;
    padding: 30px;
    overflow-y: hidden;
    /* Hide vertical scrollbar */
    overflow-x: hidden;
    /* Hide horizontal scrollbar */
}

.form {
    box-sizing: border-box;
    width: 600px;
    height: 450px;
    margin: auto;
    margin-top: 50px;
    background-color: #00000080;
    padding: 50px;
    color: white;
    border-radius: 30px;
    /* box-shadow: 0px 0px 27px rgb(109, 109, 109); */
}

.login{
    background-color:  #ffeba7;
    border: 1px #f8dd82 solid;
    border-radius: 7px;
    height: 40px;
    color: rgb(66, 66, 66);
}

.login:hover{
    background-color:  #fce28c;
    box-shadow: #f8dd82 1px 1px 15px;
    font-size: 16px;
}
.form-control{
    background: transparent;
    color: white;
    border-color: white;
}
.input-group-text{
    background: transparent;
    border-color: white;
}

.foot{
    text-align: center;
    font-size: 12px ;
   
}
.router-link{
    text-decoration: none;
    color: rgb(33, 122, 255);

}
</style>