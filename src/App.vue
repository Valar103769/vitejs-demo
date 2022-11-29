<template>
  <va-pagination
    preset="darkPagination"
    :pages="10"
    input
    class="justify-end"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/components/Input.vue';
</script>

<style>
/* .va-button,
.va-input-wrapper__prepend-inner,
.va-input-wrapper__append-inner,
.va-switch__track-label,
.va-checkbox__label {
  white-space: nowrap;
} */
</style>
