<template>
 <div>   
<div class="row">
  
  <div class="col-sm-6 col-xl-3">
      <div class="card">
          <div class="card-heading p-4">
              <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-cube-outline bg-primary  text-white"></i>
              </div>
              <div>
                  <h5 class="font-16"> Admin</h5>
              </div>
              <h3 class="mt-4">43</h3>
              <div class="progress mt-4" style="height: 4px;">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p class="text-muted mt-2 mb-0">Previous period<span class="float-right">75%</span></p>
              <p class="text-muted mt-2 mb-0">Active Admins<span class="float-right">75</span></p>
              <p class="text-muted mt-2 mb-0">Inactive Admins<span class="float-right">15</span></p>
          </div>
      </div>
  </div>

  <div class="col-sm-6 col-xl-3">
      <div class="card">
          <div class="card-heading p-4">
              <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-briefcase-check bg-success text-white"></i>
              </div>
              <div>
                  <h5 class="font-16">Bussiness</h5>
              </div>
              <h3 class="mt-4">73</h3>
              <div class="progress mt-4" style="height: 4px;">
                  <div class="progress-bar bg-success" role="progressbar" style="width: 88%" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p class="text-muted mt-2 mb-0">Previous period<span class="float-right">88%</span></p>
              <p class="text-muted mt-2 mb-0">Active Bussiness<span class="float-right">75</span></p>
              <p class="text-muted mt-2 mb-0">Inactive Bussiness<span class="float-right">15</span></p>
            </div>
      </div>
  </div>

  <div class="col-sm-6 col-xl-3">
      <div class="card">
          <div class="card-heading p-4">
              <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-tag-text-outline bg-warning text-white"></i>
              </div>
              <div>
                  <h5 class="font-16">Doctors</h5>
              </div>
              <h3 class="mt-4">447</h3>
              <div class="progress mt-4" style="height: 4px;">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 68%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p class="text-muted mt-2 mb-0">Previous period<span class="float-right">68%</span></p>
              <p class="text-muted mt-2 mb-0">Active Docotrs<span class="float-right">75</span></p>
              <p class="text-muted mt-2 mb-0">Inactive Doctors<span class="float-right">15</span></p>
            </div>
      </div>
  </div>

  <div class="col-sm-6 col-xl-3">
      <div class="card">
          <div class="card-heading p-4">
              <div class="mini-stat-icon float-right">
                  <i class="mdi mdi-buffer bg-danger text-white"></i>
              </div>
              <div>
                  <h5 class="font-16">Users</h5>
              </div>
              <h3 class="mt-4">86%</h3>
              <div class="progress mt-4" style="height: 4px;">
                  <div class="progress-bar bg-danger" role="progressbar" style="width: 82%" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p class="text-muted mt-2 mb-0">Previous period<span class="float-right">82%</span></p>
              <p class="text-muted mt-2 mb-0">Active Users<span class="float-right">75</span></p>
              <p class="text-muted mt-2 mb-0">Inactive Users<span class="float-right">15</span></p>
            </div>
      </div>
  </div>

</div>

<div class="row">
  <div class="col-xl-8">
      <div class="card m-b-30">
          <div class="card-body">

              <h4 class="mt-0 header-title mb-4">Area Chart</h4>

              <div id="morris-area-example" class="morris-charts morris-chart-height"></div>

          </div>
      </div>
  </div>
  <!-- end col -->

  <div class="col-xl-4">
      <div class="card m-b-30">
          <div class="card-body">
              <h4 class="mt-0 header-title mb-4">Chart</h4>

              <div id="morris-donut-example" class="morris-charts morris-chart-height"></div>

          </div>
      </div>
  </div>
  <!-- end col -->
</div>
<!-- end row -->

<div class="row">
  <div class="col-xl-4">
      <div class="card m-b-30">
          <div class="card-body">
              <h4 class="mt-0 header-title mb-4">Suggestions</h4>
              <div class="friends-suggestions">
                  <a class="friends-suggestions-list">
                      <div class="border-bottom position-relative">
                          <div class="float-left mb-0 mr-3">
                              <img src="src/assets/images/user-2.jpg" alt="" class="rounded-circle thumb-md">
                          </div>
                          <div class="suggestion-icon float-right mt-2 pt-1">
                              <i class="mdi mdi-plus"></i>
                          </div>

                          <div class="desc">
                              <h5 class="font-14 mb-1 pt-2">Ralph Ramirez</h5>
                              <p class="text-muted">3 Friend suggest</p>
                          </div>
                      </div>
                  </a>

                  <a class="friends-suggestions-list">
                      <div class="border-bottom position-relative">
                          <div class="float-left mb-0 mr-3">
                              <img src="src/assets/images/user-3.jpg" alt="" class="rounded-circle thumb-md">
                          </div>
                          <div class="suggestion-icon float-right mt-2 pt-1">
                              <i class="mdi mdi-plus"></i>
                          </div>

                          <div class="desc">
                              <h5 class="font-14 mb-1 pt-2">Patrick Beeler</h5>
                              <p class="text-muted">17 Friend suggest</p>
                          </div>
                      </div>
                  </a>

                  <a class="friends-suggestions-list">
                      <div class="border-bottom position-relative">
                          <div class="float-left mb-0 mr-3">
                              <img src="src/assets/images/user-4.jpg" alt="" class="rounded-circle thumb-md">
                          </div>
                          <div class="suggestion-icon float-right mt-2 pt-1">
                              <i class="mdi mdi-plus"></i>
                          </div>

                          <div class="desc">
                              <h5 class="font-14 mb-1 pt-2">Victor Zamora</h5>
                              <p class="text-muted">12 Friend suggest</p>
                          </div>
                      </div>
                  </a>

                  <a class="friends-suggestions-list">
                      <div class="border-bottom position-relative">
                          <div class="float-left mb-0 mr-3">
                              <img src="src/assets/images/user-5.jpg" alt="" class="rounded-circle thumb-md">
                          </div>
                          <div class="suggestion-icon float-right mt-2 pt-1">
                              <i class="mdi mdi-plus"></i>
                          </div>

                          <div class="desc">
                              <h5 class="font-14 mb-1 pt-2">Bryan Lacy</h5>
                              <p class="text-muted">18 Friend suggest</p>
                          </div>
                      </div>
                  </a>

                  <a class="friends-suggestions-list">
                      <div class="position-relative">
                          <div class="float-left mb-0 mr-3">
                              <img src="src/assets/images/user-6.jpg" alt="" class="rounded-circle thumb-md">
                          </div>
                          <div class="suggestion-icon float-right mt-2 pt-1">
                              <i class="mdi mdi-plus"></i>
                          </div>

                          <div class="desc">
                              <h5 class="font-14 mb-1 pt-2">James Sorrells</h5>
                              <p class="text-muted mb-1">6 Friend suggest</p>
                          </div>
                      </div>
                  </a>

              </div>
          </div>
      </div>
  </div>

  <div class="col-xl-4">
      <div class="card m-b-30">
          <div class="card-body">
              <h4 class="mt-0 header-title mb-4">Sales Analytics</h4>
              <div id="morris-line-example" class="morris-chart" style="height: 360px"></div>

          </div>
      </div>

  </div>

  <div class="col-xl-4">
      <div class="card m-b-30">
          <div class="card-body">

              <h4 class="mt-0 header-title mb-4">Recent Activity</h4>
              <ol class="activity-feed mb-0">
                  <li class="feed-item">
                      <div class="feed-item-list">
                          <p class="text-muted mb-1">Now</p>
                          <p class="font-15 mt-0 mb-0">Jassa magna Jassa, risus posted a new article: <b class="text-primary">Forget UX Rowland</b></p>
                      </div>
                  </li>
                  <li class="feed-item">
                      <p class="text-muted mb-1">Yesterday</p>
                      <p class="font-15 mt-0 mb-0">Jassa posted a new article: <b class="text-primary">Designer Alex</b></p>
                  </li>
                  <li class="feed-item">
                      <p class="text-muted mb-1">2:30PM</p>
                      <p class="font-15 mt-0 mb-0">Jassa, Jassa, Jassa Commented <b class="text-primary"> Developer Moreno</b></p>
                  </li>
                  <li class="feed-item pb-1">
                      <p class="text-muted mb-1">12:48 PM</p>
                      <p class="font-15 mt-0 mb-2">Jassa, Jassa Commented <b class="text-primary">UX Murphy</b></p>
                  </li>

              </ol>

          </div>
      </div>
  </div>
</div>

<!-- START ROW -->
<div class="row">
  <div class="col-xl-12">
      <div class="card m-b-30">
          <div class="card-body">
              <h4 class="mt-0 header-title mb-4">Active Deals</h4>
              <div class="table-responsive">
                  <table class="table table-hover">
                      <thead>
                          <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Contact</th>
                              <th scope="col">Location</th>
                              <th scope="col" colspan="2">Date</th>

                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Jassa</td>
                              <td><span class="badge badge-success">Delivered</span></td>
                              <td>$9,420,000</td>
                              <td>
                                  <div>
                                      <img src="src/assets/images/user-2.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa
                                  </div>
                              </td>
                              <td>Ludhiana</td>
                              <td>15/1/2021</td>

                              <td>
                                  <div>
                                      <a class="btn btn-primary btn-sm">Edit</a>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>Jassa</td>
                              <td><span class="badge badge-warning">Pending</span></td>
                              <td>$3,120,000</td>
                              <td>
                                  <div>
                                      <img src="src/assets/images/user-3.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa
                                  </div>
                              </td>
                              <td>Ludhiana</td>
                              <td>16/1/2021</td>

                              <td>
                                  <div>
                                      <a class="btn btn-primary btn-sm">Edit</a>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>Jassa</td>
                              <td><span class="badge badge-success">Delivered</span></td>
                              <td>$6,360,000</td>
                              <td>
                                  <div>
                                      <img src="src/assets/images/user-4.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa
                                  </div>
                              </td>
                              <td>Ludhiana</td>
                              <td>17/1/2021</td>

                              <td>
                                  <div>
                                      <a class="btn btn-primary btn-sm">Edit</a>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>Jassa</td>
                              <td><span class="badge badge-danger">Cancel</span></td>
                              <td>$5,200,000</td>
                              <td>
                                  <div>
                                      <img src="src/assets/images/user-5.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa
                                  </div>
                              </td>
                              <td>Ludhiana</td>
                              <td>18/1/2021</td>

                              <td>
                                  <div>
                                      <a class="btn btn-primary btn-sm">Edit</a>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td>Jassa</td>
                              <td><span class="badge badge-success">Delivered</span></td>
                              <td>$7,250,000</td>
                              <td>
                                  <div>
                                      <img src="src/assets/images/user-6.jpg" alt="" class="thumb-md rounded-circle mr-2"> Jassa
                                  </div>
                              </td>
                              <td>Ludhiana</td>
                              <td>19/1/2021</td>

                              <td>
                                  <div>
                                      <a class="btn btn-primary btn-sm">Edit</a>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>

          </div>
      </div>
  </div>

</div>
<!-- END ROW -->
</div>
</template>