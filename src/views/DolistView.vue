<template>
    <div class="container-fluid">
        <div class="row my-5 justify-content-center align-items-center">
          <div class="col-6 col-sm-5 border rounded-3 bg-light py-2">
            <div class="title">
              <h3 class="font-family-today text-dark px-2">Today</h3>
            </div>
            <ul class="list-group rounded-3" v-for="item in dataArr" :key="item.name + '123123'">  <!--任務清單-->
              <li class="list-group-item border-bottom border-light border-3 ">
                <div class="btn font-family-list text-dark">{{ item.name }}</div> <!--跑不出物件任務名稱-->
              </li>
            </ul>
          </div>
          <div class="col-6 flex-column justify-content-around">
            <div class="text border rounded-3 bg-warning py-2  px-4">
              <div class="questName my-2">
                <input type="text" class="questNameIn form-control font-family-list2 text-dark bg-warning w-50 border-3 border-dark" aria-label="quest name" placeholder="輸入任務名稱">
              </div>
              <div class="contentinput input-group input-group-lg my-3" style="height:200px;">
                <textarea class="taskContentInput form-control bg-white  text-dark font-family-list border-3 border-dark" aria-label="quest content" placeholder="輸入任務內容"></textarea>
              </div>
              <div class="timeinput ">
                <input type="number" class=" taskMinute form-control  text-dark font-family-list2 bg-warning border-3 border-dark  w-25" aria-label="during time" placeholder="時間(分鐘)">
              </div>
              <div class="sent my-2 d-flex justify-content-end">
                <button class="btn btn-outline-dark border-3 border-dark" @click="addEvent">確定</button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dataArr: []
    };
  },
  watch: {
    localStorage: function () { // 如果 localstorage 有改變就把最新資料放上去並放到陣列
      if (localStorage.length !== 0) {
        const key = localStorage.getItem(localStorage.key(localStorage.length - 1));
        this.dataArr.push(JSON.parse(key));
      }
    }
  },
  methods: {
    addEvent () {
      const taskName = document.querySelector('.questNameIn'); // 任務名稱
      const taskContent = document.querySelector('.taskContentInput'); // 任務內容
      const taskMinute = document.querySelector('.taskMinute'); // 任務時間
      const data = { // 將輸入值放成一個物件
        name: taskName.value,
        content: taskContent.value,
        time: taskMinute.value
      };
      this.dataArr.push(data);
      localStorage.setItem(`${data.name}`, JSON.stringify(this.dataArr));
    }
  },
  mounted () {
    for (let i = 0; i < localStorage.length; i++) { // 實體化時將 localstorage 的資料放到陣列
      const key = localStorage.getItem(localStorage.key(i));
      this.dataArr.push(JSON.parse(key)); // 將字串轉換物件再放入陣列
    }
  }
};
</script>
