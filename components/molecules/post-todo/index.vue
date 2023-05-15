<script lang="ts" setup>
  import { useList } from '~/stores/todos';

  const text = ref<string | null>("")
  const category = ref("todo")

  const { add } = useList()

  const handleSubmit = () => {
    add({
      id: Math.random() as number,
      title: text.value as string,
      activated: false,
      category: category.value === "all" ? "todo" : category.value
    })
    text.value = ""
    category.value = "todo"
  }

  const handleChange = (e: any) => {
    text.value = e.target.value
  }

  const handleChangeCategory = (e: any) => {
    category.value = e.target.value
  }

</script>

<template>
  <div class="mt-4 p-4 bg-gray-800 rounded-lg">
    <form @submit.prevent="handleSubmit">
      <div>
        <div>
          <input type="radio" id="todo" @change="handleChangeCategory" name="category" value="todo" v-model="category">
          <label for="todo" class="ml-2 text-gray-300">To Do</label><br>
        </div>
        <div>
            <input type="radio" id="inprogress" @change="handleChangeCategory" name="category" value="inprogress" v-model="category">
            <label for="inprogress" class="ml-2 text-gray-300">In Progress</label><br>
        </div>
        <div>
          <input type="radio" id="done" @change="handleChangeCategory" name="category" value="done" v-model="category">
          <label for="done" class="ml-2 text-gray-300">Done</label>
        </div>
      </div>
      <input type="text" v-model="text" @input="handleChange" class="rounded-lg p-2 w-full mt-3" placeholder="Type todo">
      <button type="submit" :disabled="!text" class="bg-green-600 disabled:bg-gray-400 rounded-lg py-3 mt-4 w-full">Create</button>
    </form>
  </div>
</template>