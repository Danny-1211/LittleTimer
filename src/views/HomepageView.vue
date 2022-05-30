<template>
  <div class="container-fluid">
    <div class="row my-5 ">
      <div class="col-sm-12 col-lg-6 col-md-6">
        <div class="row d-flex flex-column">
          <div class="col d-flex justify-content-around align-items-center"> <!--任務標題+番茄鐘數量-->
            <div class="title w-50">
              <h2 class="text-dark font-family-task ">{{ currentData.name? currentData.name : '無任務' }}</h2>
            </div>
            <div class="tomatobox-success"></div>
          </div>
          <div class="col d-flex justify-content-center"> <!--時間倒數-->
            <h1 class="font-family-clock text-success">25:00</h1>
          </div>
          <div class="col d-flex justify-content-around"><!--按鈕-->
            <button type="button" class=" border-0 bg-white btn-sm"><img src="../assets/img/start.svg" alt="start"></button>
             <button  type="button" class=" border-0 bg-white btn-sm"><img src="../assets/img/loop.svg" alt="start"></button>
          </div>
        </div>
      </div>
      <div class="col-sm-5 border rounded-3 bg-light py-2">
        <h3 class="font-family-today text-dark px-2">Today</h3> <!--今天標題-->
        <ul class="list-group rounded-3" v-for="item in localData" :key="item.name + '123123'">  <!--任務清單-->
          <li class="list-group-item border-bottom border-light border-3">
            <div class=" font-family-list text-dark p-2" @click="showInfor(item.name)">{{ item.name }}</div> <!--跑不出物件任務名稱-->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      localData: [],
      currentData: {}
    };
  },
  methods: {
    showInfor (name) {
      this.localData.forEach(item => {
        if (item.name === name) {
          this.currentData = item;
        }
      });
      console.log(this.currentData);
    }
  },
  mounted () {
    if (localStorage.length !== 0) {
      const localList = JSON.parse(localStorage.getItem('quest')); // 將 localstorage 儲存的資料抓出來， JSON.parse 轉換成原本格式 陣列包物件
      localList.forEach(element => { // 實體化時把他陣列元素放到 dataArr 陣列
        this.localData.push(element);
      });
    }
  }
};
</script>
