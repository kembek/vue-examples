<template>
  <div class="alert-box">
    <strong>Error!</strong>&nbsp;
    <slot></slot>
  </div>
</template>

<style lang="scss">
.alert-box {
  background-color: #f3beb8;
  border: 1px solid #f09898;
  padding: 10px 20px;
}
</style>
