<template>
    <!-- Begin page -->
      <div id="wrapper">
  
          <!-- Top Bar Start -->
          <div class="topbar">
  
              <!-- LOGO -->
              <div class="topbar-left">
                  <a class="logo">
                      <span class="logo-light">
                              <i class="mdi mdi-camera-control"></i> RTS
                          </span>
                      <span class="logo-sm">
                              <i class="mdi mdi-camera-control"></i>
                          </span>
                  </a>
              </div>
  
              <nav class="navbar-custom">
                  <ul class="navbar-right list-inline float-right mb-0">
  
                      <!-- language-->
                      <!-- <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                          <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                              <img src="assets/images/us_flag.jpg" class="mr-2" height="12" alt="" /> English <span class="mdi mdi-chevron-down"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated language-switch">
                              <a class="dropdown-item"><img src="assets/images/french_flag.jpg" alt="" height="16" /><span> French </span></a>
                              <a class="dropdown-item"><img src="assets/images/spain_flag.jpg" alt="" height="16" /><span> Spanish </span></a>
                              <a class="dropdown-item"><img src="assets/images/russia_flag.jpg" alt="" height="16" /><span> Russian </span></a>
                              <a class="dropdown-item"><img src="assets/images/germany_flag.jpg" alt="" height="16" /><span> German </span></a>
                              <a class="dropdown-item"><img src="assets/images/italy_flag.jpg" alt="" height="16" /><span> Italian </span></a>
                          </div>
                      </li> -->
  
                      <!-- full screen -->
                      <li class="dropdown notification-list list-inline-item d-none d-md-inline-block">
                          <a class="nav-link waves-effect" id="btn-fullscreen">
                              <i class="mdi mdi-arrow-expand-all noti-icon"></i>
                          </a>
                      </li>
  
                      <!-- notification -->
                      <li class="dropdown notification-list list-inline-item">
                          <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                              <i class="mdi mdi-bell-outline noti-icon"></i>
                              <span class="badge badge-pill badge-danger noti-icon-badge">3</span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg px-1">
                              <!-- item-->
                              <h6 class="dropdown-item-text">
                                      Notifications
                                  </h6>
                              <div class="slimscroll notification-item-list">
                                  <!-- item-->
                                  <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                      <div class="notify-icon bg-success"><i class="mdi mdi-cart-outline"></i></div>
                                      <p class="notify-details"><b>Your order is placed</b><span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                  </a>
  
                                  <!-- item-->
                                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                                      <div class="notify-icon bg-danger"><i class="mdi mdi-message-text-outline"></i></div>
                                      <p class="notify-details"><b>New Message received</b><span class="text-muted">You have 87 unread messages</span></p>
                                  </a>
  
                                  <!-- item-->
                                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                                      <div class="notify-icon bg-info"><i class="mdi mdi-filter-outline"></i></div>
                                      <p class="notify-details"><b>Your item is shipped</b><span class="text-muted">It is a long established fact that a reader will</span></p>
                                  </a>
  
                                  <!-- item-->
                                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                                      <div class="notify-icon bg-success"><i class="mdi mdi-message-text-outline"></i></div>
                                      <p class="notify-details"><b>New Message received</b><span class="text-muted">You have 87 unread messages</span></p>
                                  </a>
  
                                  <!-- item-->
                                  <a href="javascript:void(0);" class="dropdown-item notify-item">
                                      <div class="notify-icon bg-warning"><i class="mdi mdi-cart-outline"></i></div>
                                      <p class="notify-details"><b>Your order is placed</b><span class="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                  </a>
  
                              </div>
                              <!-- All-->
                              <a href="javascript:void(0);" class="dropdown-item text-center notify-all text-primary">
                                      View all <i class="fi-arrow-right"></i>
                                  </a>
                          </div>
                      </li>
  
                      <li class="dropdown notification-list list-inline-item">
                          <div class="dropdown notification-list nav-pro-img">
                              <a class="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                                  <img src="../assets/user.jpeg" alt="user" class="rounded-circle">
                              </a>
                              <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                  <!-- item-->
                                  <a class="dropdown-item"><i class="mdi mdi-account-circle"></i> Profile</a>
                                  <a class="dropdown-item"><i class="mdi mdi-wallet"></i> Wallet</a>
                                  <a class="dropdown-item d-block"><span class="badge badge-success float-right">11</span><i class="mdi mdi-settings"></i> Settings</a>
                                  <a class="dropdown-item"><i class="mdi mdi-lock-open-outline"></i> Lock screen</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item text-danger"><i class="mdi mdi-power text-danger"></i> Logout</a>
                              </div>
                          </div>
                      </li>
  
                  </ul>
  
                  <ul class="list-inline menu-left mb-0">
                      <li class="float-left">
                          <button class="button-menu-mobile open-left waves-effect">
                              <i class="mdi mdi-menu"></i>
                          </button>
                      </li>
                      <li class="d-none d-md-inline-block">
                          <form role="search" class="app-search">
                              <div class="form-group mb-0">
                                  <input type="text" class="form-control" placeholder="Search..">
                                  <button type="submit"><i class="fa fa-search"></i></button>
                              </div>
                          </form>
                      </li>
                  </ul>
  
              </nav>
  
          </div>
          <!-- Top Bar End -->
  
          <!-- ========== Left Sidebar Start ========== -->
          <div class="left side-menu">
              <div class="slimscroll-menu" id="remove-scroll">
  
                  <!--- Sidemenu -->
                  <div id="sidebar-menu">
                      <!-- Left Menu Start -->
                      <ul class="metismenu" id="side-menu">
                          <li class="menu-title">Menu</li>
                          <li>
                              <a class="waves-effect" @click="$router.push({path : `/DashboardView`})&& rout('Dashboard')">
                                  <i class="icon-accelerator"></i><span class="badge badge-success badge-pill float-right">9+</span> <span><a>Dashboard</a></span>
                              </a>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-user-plus"></i><span> Admins <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Active Admins</a></li>
                                  <li><a>InActive Admins</a></li>
                                  <li>
                                    <a @click="$router.push({path : `/AdminFormView`}) && rout('Admin')">Add Admins </a>
                                  </li>
                                  <li><a @click="$router.push({path : `/AdminListView`}) && rout('Admin')">All Admins</a></li>
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="fa fa-briefcase"></i><span> Business <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Active Bussiness</a></li>
                                  <li><a>Inactive Bussiness</a></li>
                                  <li><a  @click="$router.push({path : `/BusinessFormView`}) && rout('Business')">Add Bussiness</a></li>
                                  <li><a  @click="$router.push({path : `/BusinessListView`})&& rout('Business')">All Bussiness</a></li>
                              </ul>
                          </li>
                          
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="fa-solid fa-house-chimney-medical"></i><span> Clinics <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Active Clinics</a></li>
                                  <li><a>InActive Clinics</a></li>
                                  <li><a @click="$router.push({path : `/ClinicFormView`})&& rout('Clinics')">Add Clinic</a></li>
                                  <li><a @click="$router.push({path : `/ClinicListView`})&& rout('Clinics')">All Clinics</a></li>
                              </ul>
                          </li>

                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="fa-solid fa-user-doctor"></i><span> Doctors <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Active Doctors</a></li>
                                  <li><a>InActive Doctors</a></li>
                                  <li><a>Add Doctor</a></li>
                                  <li><a>All Doctors</a></li>
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="fa-sharp fa-solid fa-hospital-user"></i><span> Patients <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Active Patients</a></li>
                                  <li><a>InActive Patients</a></li>
                                  <li><a>Add Patient</a></li>
                                  <li><a>All Patients</a></li>
                              </ul>
                          </li>
  
                          <li>
                              <a href="calendar.html" class="waves-effect"><i class="icon-calendar"></i><span> Calendar </span></a>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-paper-sheet"></i><span> Pages <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Pricing</a></li>
                                  <li><a>Invoice</a></li>
                                  <li><a>Timeline</a></li>
                                  <li><a>FAQs</a></li>
                                  <li><a>Maintenance</a></li>
                                  <li><a>Coming Soon</a></li>
                                  <li><a>Starter Page</a></li>
                                  <li><a>Login</a></li>
                                  <li><a>Register</a></li>
                                  <li><a>Recover Password</a></li>
                                  <li><a>Lock Screen</a></li>
                                  <li><a>Error 404</a></li>
                                  <li><a>Error 500</a></li>
                              </ul>
                          </li>
  
                          <li class="menu-title">Components</li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-pencil-ruler"></i> <span> UI Elements <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                              <ul class="submenu">
                                  <li><a>Alerts</a></li>
                                  <li><a>Badge</a></li>
                                  
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-diamond"></i> <span> Advanced UI <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span> </a>
                              <ul class="submenu">
                                  <li><a>Alertify</a></li>
                                  <li><a>Rating</a></li>
                                 
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-todolist-check"></i><span> Forms <span class="badge badge-pill badge-danger float-right">8</span> </span></a>
                              <ul class="submenu">
                                  <li><a>Form Elements</a></li>
                                  <li><a>Form Validation</a></li>
                               
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-graph"></i><span> Charts <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Morris Chart</a></li>
                                  <li><a>Chartist Chart</a></li>
                                  <li><a>Chartjs Chart</a></li>
                                  <li><a>Flot Chart</a></li>
                                  <li><a>C3 Chart</a></li>
                                  <li><a>Jquery Knob Chart</a></li>
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-spread"></i><span> Tables <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a>Basic Tables</a></li>
                                  <li><a>Data Table</a></li>
                                  
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-coffee"></i> <span> Icons  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></span> </a>
                              <ul class="submenu">
                                  <li><a>Material Design</a></li>
                                  <li><a>Font Awesome</a></li>
                                  
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-map"></i><span> Maps <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a> Google Map</a></li>
                                  <li><a> Vector Map</a></li>
                              </ul>
                          </li>
  
                          <li>
                              <a href="javascript:void(0);" class="waves-effect"><i class="icon-share"></i><span> Multi Level <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                              <ul class="submenu">
                                  <li><a> Menu 1</a></li>
                                  <li>
                                      <a>Menu 2  <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a>
                                      <ul class="submenu">
                                          <li><a>Menu 2.1</a></li>
                                          <li><a>Menu 2.1</a></li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
  
                      </ul>
  
                  </div>
                  <!-- Sidebar -->
                  <div class="clearfix"></div>
  
              </div>
              <!-- Sidebar -left -->
  
          </div>
          <!-- Left Sidebar End -->
  
          <!-- ============================================================== -->
          <!-- Start right Content here -->
          <!-- ============================================================== -->
          <div class="content-page">
            <div class="content">
                  <div class="container-fluid">
                      <div class="page-title-box">
                          <div class="row align-items-center">
                              <div class="col-sm-6">
                                  <h4 class="page-title">{{pathss}}</h4>
                              </div>
                              <div class="col-sm-6">
                                  <ol class="breadcrumb float-right">
                                      <li class="breadcrumb-item"><a>RTS</a></li>

                                      <li class="breadcrumb-item active">{{pathss}}</li>
                                  </ol>
                              </div>
                          </div>
                          <!-- end row -->
                      </div>
                      <!-- end page-title -->
                      <router-view></router-view>
                      
                  </div>
                  <!-- container-fluid -->
  
              </div>
              <!-- content -->
              <!-- Start content -->
              
              <footer class="footer">
                  ©2021 Jassa <span class="d-none d-sm-inline-block"> - Love <i class="mdi mdi-heart text-danger"></i> by Therichpost.com</span>.
              </footer>
  
          </div>
          <!-- ============================================================== -->
          <!-- End Right content here -->
          <!-- ============================================================== -->
  
      </div>
      <!-- END wrapper -->
  </template>
<script>
    
    export default{
        
        data(){
            return{
                pathss:''
            }
        },
        mounted(){
            this.pathss = localStorage.getItem('item')
            if(this.$route.name == 'HomeView'){
                this.$router.push({path:`/DashboardView`})
            }
        },
        methods:{
            rout(a){
                localStorage.setItem('item', a)
                console.log(localStorage.getItem('item'))
                this.pathss = localStorage.getItem('item')
            }
            
        }
    }
</script>
<style scoped>
 router-link {
    padding: 8px 20px 8px 10px;
    color: #a0a1a7b9;
    display: block;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}


</style>