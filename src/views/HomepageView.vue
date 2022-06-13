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
            <h1 class=" time font-family-clock text-success">{{ showInitTime ? showInitTime : '00:00' }}</h1>
          </div>
          <div class="col d-flex justify-content-around"><!--按鈕-->
            <button type="button" class=" border-0 bg-white btn-sm" @click="toggleTimeRunning"><img src="../assets/img/start.svg" alt="start"></button>
            <button  type="button" class=" border-0 bg-white btn-sm" @click="toggleTimeStop"><img src="../assets/img/pause.svg" alt="stop"></button>
          </div>
        </div>
      </div>
      <div class="col-sm-5 border rounded-3 bg-light py-2">
        <h3 class="font-family-today text-dark px-2">Today</h3> <!--今天標題-->
        <template v-if="localData.length !== 0">
          <ul class="list-group rounded-3" v-for="item in localData" :key="item.name + '123123'">  <!--任務清單-->
            <li class="list-group-item border-bottom border-light border-3 d-flex justify-content-between">
              <div class=" font-family-list text-dark p-2" @click="showInfor(item.name)">{{ item.name }}</div> <!--跑不出物件任務名稱-->
              <div class=" btn btn-warning text-dark p-2" @click="toggleTaskInfor(item.name)">任務內容</div>
            </li>
          </ul>
        </template>
        <div v-else class="d-flex justify-content-center align-items-center py-5 mt-5">
          <p class="font-family-task text-dark">今天無任務</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zero from '@/utils/zero.js';
export default {
  mixins: [zero],
  data () {
    return {
      localData: [],
      currentData: {},
      isClockRunning: true,
      showInitTime: '', // 用來渲染時間
      timer: 0, // 計時用的
      content: '',
      remainTime: 0
    };
  },
  methods: {
    showInfor (name) {
      this.localData.forEach(item => {
        if (item.name === name) {
          this.currentData = { ...item };
        }
      });
      this.timer = this.currentData.time;
      this.showInitTime = parseInt((this.timer * 60) / 60) + ':' + (parseInt((this.timer * 60) % 60) < 10 ? `0${parseInt((this.timer * 60) % 60)}` : parseInt((this.timer * 60) % 60));
      clearInterval(this.content);
    },
    toggleTimeRunning () {
      if (this.timer !== 0) {
        this.isClockRunning = true;
        let b = 0;
        let deleteArr = []; // 用來記錄跑完行程的資料還有多少
        if (this.remainTime === 0) {
          b = this.timer * 60;// 轉換成秒
        } else {
          b = this.remainTime;
        }
        if (this.isClockRunning) { // 如果是 true
          this.content = window.setInterval(() => {
            b--;
            const minutes = parseInt(b / 60); // 秒轉換成分鐘
            let seconds = parseInt(b % 60); // 抓剩餘秒數
            if (seconds < 10) {
              seconds = `0${seconds}`; // 如果秒數是個位數就前面多放一個 0
            }
            this.remainTime = b;
            this.timer = minutes + ':' + seconds; // 分鐘+秒數
            this.showInitTime = this.timer; // 將這個值給予 showInitTime 渲染
            if (b <= 0) { // 當倒數時間為 0
              this.timer = 0;
              this.showInitTime = '00:00'; // 渲染回到 00:00
              deleteArr = this.localData.filter((item, index) => {
                return item.name !== this.currentData.name;
              });
              this.localData = deleteArr;
              localStorage.setItem('quest', JSON.stringify(this.localData));
              this.showAlert();
              this.currentData.name = '無任務';
              clearInterval(this.content);
            }
          }, 1000);
        }
      }
    },
    toggleTimeStop () {
      this.isClockRunning = false;
      this.timer = this.remainTime;
      clearInterval(this.content);
    },
    toggleTaskInfor (name) {
      let infor = '';
      this.localData.forEach(item => {
        if (item.name === name) {
          infor = item.content;
        }
      });
      this.$swal.fire({
        title: `${infor}`,
        confirmButtonColor: '#E43F6F'
      });
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
