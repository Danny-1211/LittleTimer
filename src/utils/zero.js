export default {
  methods: {
    showAlert () {
      // Use sweetalert2
      this.$swal.fire({
        title: '時間到',
        confirmButtonColor: '#7FC6B2'
      });
    }
  }
};
