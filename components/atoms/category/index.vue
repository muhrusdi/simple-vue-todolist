<script lang="ts" setup>
  const props = defineProps(["category"])
  const emit = defineEmits()

  const category = toRef(props, "category")
</script>

<template>
  <div>
    <input type="radio" id="todo" @input="emit('change')" name="category" value="todo" v-model="category">
    <label for="todo" class="ml-2 text-gray-300">To Do</label><br>
  </div>
</template>