<script setup lang="ts">
  import PostTodo from "@/components/molecules/post-todo/index.vue"
  import Filter from "@/components/atoms/filter/index.vue"
  import List from "@/components/molecules/list/index.vue"
</script>

<template>
  <div class="w-[400px] mx-auto bg-gray-700 p-7 rounded-lg">
    <Filter/>
    <List/>
    <PostTodo/>
  </div>
</template>