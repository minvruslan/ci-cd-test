<script setup lang="ts">
const inputModel = defineModel<string>({ default: '' })

const emit = defineEmits<{
  (e: 'save', fullName: string): void
}>()

const onSaveClick = () => {
  emit('save', inputModel.value)
}
</script>

<template>
  <div class="my-component">
    <span>Your full name: </span>
    <input
      v-model="inputModel"
      type="text"
      class="my-component__input"
    />
    <button
      class="my-component__button"
      @click="onSaveClick"
    >
      Save
    </button>
  </div>
</template>

<style lang="css" scoped>
.my-component {
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
}
</style>
