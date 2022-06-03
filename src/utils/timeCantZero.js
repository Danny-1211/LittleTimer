export default {
  methods: {
    invalidAlert () {
      // Use sweetalert2
      this.$swal.fire({
        title: '時間不能為0',
        confirmButtonColor: '#E43F6F'
      });
    }
  }
};
