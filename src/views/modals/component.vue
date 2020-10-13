<template>
  <div class="overlay">
      <div class="container">
        <div class="header">
            <span class="title">
                <slot name="title"></slot>
            </span>
            <span class="material-icons">close</span>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "BaseModal"
}
</script>

<style src="./style.css" scoped></style>