
import { defineStore } from "pinia"
import { ref } from "vue"

export const useFilter = defineStore("filters", () => {
  const filter = ref("all")

  const change = (e: any) => {
    filter.value = e.target.value
  }

  return {filter, change}
})