import { defineStore, storeToRefs } from "pinia";
import { reactive, computed } from "vue"
import { useFilter } from "./filter";

export type TodoType = {
  id: number
  title: string
  activated: boolean
  category: string
}

export const useList = defineStore("todos", () => {
  const todos = reactive<TodoType[]>([])
  const filterStore = useFilter()

  const filter = computed(() => filterStore.filter)

  const todosFilter = computed(() => {
    if (filter.value === "all") {
      return todos
    }
  
    return todos.filter((item: TodoType) => {
      return item.category === filter.value
    })
  
  })
  
  const add = (data: TodoType) => {
    todos.push(data)
  }

  const update = (data: TodoType | null) => {
    if (data) {
      const index = todos.findIndex((item: TodoType) => item.id === data.id)
      todos[index] = data
    }
  }

  return {todos: todosFilter, add, update}
})