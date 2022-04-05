<template>
  <div class="container">
    <h1>TODO LIST</h1>
    <!-- 할일 추가 입력창 -->
    <!-- 3번)) 태그 이름으로 입력 -->
    <!-- TodoSimpelForm에서 발생한 이벤트는 이렇게 받고 props는 TodoList.Vue참고 -->
    <TodoSimpleForm v-on:todo-insert="todoInsert" />
    <!-- 원래 아래처럼 쓰는 것이 기본이지만 줄여서 <컴포넌트이름/> 이렇게만 써도 됨. -->
    <!-- <TodoSimpleForm></TodoSimpleForm> -->

    <!-- 목록 없음 안내창 -->
    <div class="blue" v-show="!todos.length">생성된 todo 목록이 없습니다.</div>

    <!-- todo 목록창 -->
    <!-- 여기 todoList라는 이름이 todoList.vue 파일 props의 이름과 같음 -->
    <TodoList v-bind:todoList="todos" v-on:toggle-todo="toggleEvent" v-on:delete-todo="deleteTodo"/>

  </div>
</template>


<script>
  // 만들어진 js 라이브러리를 가져옴.
  import {ref} from 'vue';
  //ref는 여기 작성 내용을 실시간으로 반영하려고.
  //ref를 쓰면 전달되는 매개변수를 { key(이 자리에는 무조건 value라고 온다) : value(괄호 안 변수) }로 만들어줌.
  //ref는 '글자' 또는 숫자가 들어갈 수 있다. 
  //배열 또는 객체를 쓰고 싶으면 reactive를 사용함.

  // 1번)) 컴포넌트를 import 한다.
  // 0번)) TodoSimpleForm(통상적으로 대문자로 시작)을 component폴더에 만듦.
  import TodoSimpleForm from './components/TodoSimpleForm.vue';
  import TodoList from './components/TodoList.vue';

  // js 작성
  // 기본이 export, import
  export default {
    // 2번)) components에 객체로 import한 vue 파일 이름을 넣는다.
    components: {
      // 컴포넌트 이름은 html 태그처럼 사용
      TodoSimpleForm,
      TodoList
    },

    setup() {

      // 할일 목록(배열) 저장
      const todos = ref([
        {id:1, subject: 'Playing with my cats', complete: false}
      ]);

      // TodoSimpleForm에서 todo-insert로 전달된 객체를 처리해주는 콜백함수
      const todoInsert = (add_todos) => {
        console.log(add_todos);
        todos.value.push(add_todos);
        // todos.value.push({
        //     id: Date.now(),
        //     subject: add_todos.value,
        //     complete: false
        // });
      }

      const toggleEvent = (index) => {
        todos.value[index].complete = !todos.value[index].complete;
      }

      const deleteTodo = (index) => {
        console.log('지우기' + index);
        // 인덱스 번호에 해당하는 것을 지운다는 뜻.
        todos.value.splice(index, 1);
      }

      //todo 스타일시트
      // const todoStyle = {
      //   textDecoration: 'line-through',
      //   color: 'gray'
      // }

      return {
        todos,
        deleteTodo,
        toggleEvent,
        // todoStyle,
        todoInsert
      }
    }
  }
</script>

<style>
  /* css작성 */
  .blue {
    color: blue;
  }

  .finished {
    color: gray;
    text-decoration: line-through;
  }
</style>