<template>
  <div class="overlay" id="overlay">
      <div class="container">
        <div class="header">
            <span class="title">
                <slot name="title"></slot>
            </span>
            <span class="material-icons"  @click="destroy()">close</span>
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

import { actions } from "./store";

export default {
    name: "BaseModal",
    methods: {
        ...actions
    }
}
</script>

<style src="./style.css" scoped></style>