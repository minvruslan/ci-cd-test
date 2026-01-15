<script setup lang="ts">
import { ref, watch } from 'vue';
import MyComponent from './components/MyComponent.vue'

const fullName = ref("")

watch(
  () => fullName.value,
  (newVal: string) => {
    console.log(newVal)
  }
)

const onSave = (fullName: string) => {
  console.log(fullName)
}
</script>

<template>
  <MyComponent v-model="fullName" @save="onSave" />
</template>
