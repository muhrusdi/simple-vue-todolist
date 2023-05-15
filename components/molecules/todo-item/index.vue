<script lang="ts" setup>
  import { useList } from '../../../stores/todos';
  import { toRef } from "vue"

  const props = defineProps(["title", "activated", "id", "category"])
  const title = toRef(props, "title")
  const category = toRef(props, "category")
  const id = toRef(props, "id")
  const activated = toRef(props, "activated")
  const { update } = useList()

  const handleChange = (e: any) => {
    update({
      id: id.value, title: title.value, activated: e.target.checked, category: category.value
    })
  } 

</script>

<template>
  <div class="todo-item flex border-gray-700 bg-gray-900 p-4 rounded-lg text-white gap-3 items-center">
    <div class="flex gap-3">
      <input :id="id" type="checkbox" @input="handleChange" :activated="activated" v-model="activated">
      <label :for="id">{{ title }}</label>
    </div>
    <div>
      <span class="text-xs uppercase rounded-md bg-gray-600 p-2">{{ category }}</span>
    </div>
  </div>
</template>

<style scoped>
.todo-item input[activated=true] + label {
  text-decoration: line-through;
  @apply text-red-600;
}
</style>