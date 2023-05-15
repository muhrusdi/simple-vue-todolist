<script lang="ts" setup>
  import { useList } from "~/stores/todos";
  import TodoItem from "@/components/molecules/todo-item/index.vue"

  const storeList= useList()

  const todos = computed(() => storeList.todos)

</script>
<template>
  <ul class="space-y-3 mt-3">
    <li v-for="todo in todos" :key="todo.id">
      <TodoItem :title="todo.title" :id="todo.id" :activated="todo.activated" :category="todo.category"/>
    </li>
  </ul> 
</template>