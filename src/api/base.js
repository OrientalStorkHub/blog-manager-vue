export default {
  goBack: function (urlName) {
    this.$router.push({ name: urlName });
  },
}
