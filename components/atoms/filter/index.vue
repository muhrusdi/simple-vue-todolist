<script lang="ts" setup>
  import { useFilter } from '~/stores/filter';

  const { filter, change } = useFilter()

</script>

<template>
  <div>
    <select @input="change" v-model="filter" class="rounded-md p-2">
      <option value="all">All</option>
      <option value="todo">To Do</option>
      <option value="inprogress">In Progress</option>
      <option value="done">Done</option>
    </select>
  </div>
</template>