<template>
  <va-input label="default" class="mb-4">
    <template #appendInner>
      <span>Hello, World!</span>
    </template>
  </va-input>
</template>

<style>
.va-input-wrapper__prepend-inner,
.va-input-wrapper__append-inner {
  white-space: nowrap;
}
</style>
