<template>
  <div class="container-fluid">
    <div class="row bg-light">
      <div class="col-8 d-flex justify-content-between align-items-center border-end border-dark border-5 py-2">
        <div class="icon">
          <img src="../assets/img/clock.png" class="w-25" alt="clockIcons">
        </div>
        <div class="button">
          <router-link to="/" class="text-dark font-family-button">Pomotoro</router-link>
        </div>
      </div>
      <div class="col d-flex justify-content-between align-items-center border-end border-dark border-5 py-2">
        <div class="icon">
          <img src="../assets/img/list.png" class="w-25" alt="clockIcons">
        </div>
        <div class="button">
          <router-link to="/list" class="text-dark font-family-button">To-Do list</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
