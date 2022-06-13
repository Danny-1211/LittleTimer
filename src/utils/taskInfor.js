export default {
  methods: {
    showInformationAlert (information) {
      this.$swal.fire({
        title: `${information}`,
        confirmButtonColor: '#E43F6F'
      });
    }
  }
};
