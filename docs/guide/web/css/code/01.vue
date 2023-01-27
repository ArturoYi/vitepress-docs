<template>
  <div>
    <button @click="isSelect = !isSelect" class="button">
      切换样式，当前文字颜色：{{isSelect?"red":"greed" }}
    </button>
    <div>
      <p :class="{'select':isSelect,'noSelect':!isSelect}">我是p标签，可以通过css添加样式</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelect: false,
      value: "",
    };
  },
};
</script>
<style scoped>
.button {
  background: rgb(172, 172, 172);
  margin: 20px 60px;
  padding: 10px;
  border-radius: 50px;
  position: relative;
  color: aliceblue;
}
.select{
  color: red;
}
.noSelect{
  color: green;
}
</style>
