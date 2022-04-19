<template>
  <h1>Edit Todo
  </h1>
  <TodoForm :editing="true" />
  <!-- TodoForm 안에 있었음 -->
  <!-- @update-todo="updateTodo" -->

</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import { getCurrentInstance } from 'vue';
export default {
    components: {
        TodoForm
    }, 
    // emits: ['update-todo-toast'],
    setup() {
      const { emit } = getCurrentInstance();
      const updateTodo = () => {
        console.log("내용갱신");
        emit('update-todo-toast', {});
      }
      return {
        updateTodo
      }
    }
}
</script>

<style>

</style>