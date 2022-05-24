<template>
  <div class="container-fluid">
    <div class="row my-5 ">
      <div class="col-sm-12 col-lg-6 col-md-6">
        <div class="row d-flex flex-column">
          <div class="col d-flex justify-content-around"> <!--任務標題+番茄鐘數量-->
            <div class="title"> <h2 class="text-dark font-family-task">任務一</h2> </div>
            <div class="tomatobox-success"></div>
          </div>
          <div class="col d-flex justify-content-center"> <!--時間倒數-->
            <h1 class="font-family-clock text-success">25:00</h1>
          </div>
          <div class="col d-flex justify-content-around"><!--按鈕-->
            <button class="btn"><img src="../assets/img/start.svg" alt="start"></button>
             <button class="btn"><img src="../assets/img/loop.svg" alt="start"></button>
          </div>
        </div>
      </div>
      <div class="col-sm-5 border rounded-3 bg-light py-2">
        <h3 class="font-family-today text-dark px-2">Today</h3> <!--今天標題-->
        <ul class="list-group rounded-3">  <!--任務清單-->
          <li class="list-group-item border-bottom border-light border-3 ">
            <button class="btn font-family-list text-dark">任務一</button>
          </li>
          <li class="list-group-item border-bottom border-light border-3 py-2 font-family-list text-dark">
            <button class="btn font-family-list text-dark">任務二</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
