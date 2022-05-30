<template>
    <div class="container-fluid">
        <div class="row my-5 justify-content-center align-items-center">
          <div class="col-6 col-sm-5 border rounded-3 bg-light py-2">
            <div class="title d-flex justify-content-around align-items-center">
              <h3 class="font-family-today text-dark px-2">Today</h3>
              <button type="button" class=" border-0 bg-light btn-sm" @click="openModal"><img src="../assets/img/add.svg" alt="add"></button>
            </div>
              <ul class="list-group rounded-3" v-for="item in dataArr" :key="item.name + '123123'">  <!--任務清單-->
                <li class="list-group-item border-bottom border-light border-3" @click="showEvent(item.name)">
                  <div class=" font-family-list text-dark p-2">{{ item.name }}</div> <!--跑不出物件任務名稱-->
                </li>
              </ul>
          </div>
          <div class="col-6 flex-column justify-content-around">
            <div class="text border rounded-3 bg-warning py-2  px-4">
              <div class="questName my-2">
                <input type="text" class="questNameIn form-control font-family-list2 text-dark bg-warning w-50 border-3 border-dark" v-model="taskName" aria-label="quest name" placeholder="點選左邊任務可修改名稱">
              </div>
              <div class="contentinput input-group input-group-lg my-3" style="height:200px;">
                <textarea class="taskContentInput form-control bg-white  text-dark font-family-list border-3 border-dark" v-model="taskContent" aria-label="quest content" placeholder="點選左邊任務可修改內容"></textarea>
              </div>
              <div class="timeinput ">
                <input type="number" class=" taskMinute form-control  text-dark font-family-list2 bg-warning border-3 border-dark  w-25" v-model="time" aria-label="during time" placeholder="時間(分鐘)">
              </div>
              <div class="sent my-2 d-flex justify-content-end">
                <button class="btn btn-outline-dark border-3 border-dark" @click="editEvent(tempTaskName)">確定</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <AddEventModal ref="addModal" v-on:add-event="addEvent"/>
</template>

<script>
import AddEventModal from '@/components/AddEventModal';
export default {
  components: {
    AddEventModal
  },
  data () {
    return {
      dataArr: [],
      taskName: '',
      taskContent: '',
      time: 0,
      tempTaskName: '' // tempTaskName <= taskName 有可能會被修改，所以我們設一個變數讓我們可以找到陣列中原本的位置
      /* taskName 任務名稱 taskContent 任務內容 time 任務時間 */
    };
  },
  methods: {
    addEvent (data) {
      this.dataArr.push(data); // 把物件放到陣列
      localStorage.setItem('quest', JSON.stringify(this.dataArr)); // 放到 localstorage 'quest' ， 記得轉成字串 localstorage 只存字串
    },
    showEvent (taskName) { // 當點選了某個事件，將值賦予給 v-model 的各項參數
      this.dataArr.forEach(item => {
        if (item.name === taskName) {
          this.taskName = item.name;
          this.taskContent = item.content;
          this.time = item.time;
        }
      });
      this.tempTaskName = this.taskName;
    },
    editEvent (tempTaskName) { // 修改事件內容
      this.dataArr.forEach(item => {
        if (item.name === tempTaskName) {
          item.name = this.taskName;
          item.content = this.taskContent;
          item.time = this.time;
        }
      });
      localStorage.removeItem('quest');
      localStorage.setItem('quest', JSON.stringify(this.dataArr));
    },
    openModal () {
      this.$refs.addModal.showModal();
    }
  },
  mounted () {
    if (localStorage.length !== 0) {
      const localList = JSON.parse(localStorage.getItem('quest')); // 將 localstorage 儲存的資料抓出來， JSON.parse 轉換成原本格式 陣列包物件
      localList.forEach(element => { // 實體化時把他陣列元素放到 dataArr 陣列
        this.dataArr.push(element);
      });
    }
  }
};
</script>
