<template>
  <div class="modal" tabindex="-1" ref="addModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-warning">
          <h5 class="modal-title font-family-list text-dark">新增事件</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-warning">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 my-2">
                <input type="text" class="questNameIn form-control font-family-list2 text-dark bg-warning w-75 border-3 border-dark"  v-model="addTaskName" aria-label="quest name" placeholder="任務名稱">
              </div>
              <div class="col-lg-12 my-2">
                <textarea class="form-control font-family-list2 text-dark  border-3 border-dark py-3" placeholder="任務內容" v-model="addTaskContent" style="height:150px;"></textarea>
              </div>
              <div class="col-lg-12 my-2">
                <input type="number" class=" taskMinute form-control  text-dark font-family-list2 bg-warning border-3 border-dark  w-50" v-model="addTime" aria-label="during time" placeholder="時間(分鐘)">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-warning">
          <button type="button" class="btn btn-outline-dark border-3 border-dark" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-success text-white" @click="addEvent">新增</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js';
import timeCantZero from '@/utils/timeCantZero.js';
export default {
  mixins: [timeCantZero],
  emits: ['AddEvent'],
  data () {
    return {
      myModal: '',
      addTaskName: '',
      addTaskContent: '',
      addTime: 0
    };
  },
  methods: {
    addEvent () {
      if (this.addTime !== 0) {
        const data = { // 將輸入值放成一個物件
          name: this.addTaskName,
          content: this.addTaskContent,
          time: this.addTime
        };
        this.$emit('add-event', data);
        this.hideModal();
      } else {
        this.invalidAlert();
      }
    },
    showModal () {
      this.myModal.show();
    },
    hideModal () {
      this.myModal.hide();
    }
  },
  mounted () {
    this.myModal = new Modal(this.$refs.addModal);
  }
};
</script>
