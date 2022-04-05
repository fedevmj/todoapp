<template>
  <!-- <div v-show="!toggle">true</div>
  <div v-show="toggle">false</div> -->
  <div v-if="!toggle">true</div>
  <div v-else>false</div>
  <button v-on:click="toggleFn">TOGGLE</button>

  <div class="container">
    <h1>TODO LIST</h1>
    <!-- 할일 추가 입력창 -->
    <form action="" class="d-flex" v-on:submit.prevent="onSubmit">
      <!-- button에 form-control 넣으면 자동으로 focus/blur 기능 생긴다. -->
      <div class="flex-grow-1 mr-2">
        <input type="text" placeholder="Type Your New Plan!" class="form-control" v-model="add_todos">
      </div>
      <div>
        <button class="btn btn-primary" type="submit">ADD</button>
      </div>
    </form>
    <!-- 내용 입력 안내창 -->
    <div class="blue" v-show="hasError">내용을 입력하세요.</div>
    <!-- todo 목록창 -->
    <div v-for="(keys, index) in todos" v-bind:key="keys.id" class="card mt-2">

      <div class="card-body pd-2 d-flex">
        <div class="form-check flex-grow-1">
          <input 
          type="checkbox" 
          class="form-check-input" 
          v-model="keys.complete"
          v-bind:id="keys.id"
          >
          <!-- v-bind:style은 스타일 바인딩 -->
          <!-- <label 
          class="form-check-label" 
          v-bind:style="keys.complete? todoStyle : {}">
          {{ keys.subject }}
          </label> -->

          <!-- "{finished:keys.complete}"를 객체로 넣는 것은 문법이다. -->
          <!-- keys.complete 대신 true/false 적어도 okay. -->
          <label 
          class="form-check-label" 
          v-bind:class="{finished:keys.complete}"
          v-bind:for="keys.id"
          >
          {{ keys.subject }}
          </label>
        </div>
        <!-- 삭제버튼 -->
        <div>
          <!-- <button class="btn btn-danger btn-sm">Delete</button> -->
          <button class="btn btn-danger btn-sm" @click="deleteTodo(index)">Delete</button>
        </div>
      </div>

    </div>

    <!-- <div class="card mt-2">
      <div class="card-body pd-2">
        {{ todos[1].subject }}
      </div>
    </div>

    <div class="card mt-2">
      <div class="card-body pd-2">
        {{ todos[2].subject }}
      </div>
    </div>

    <div class="card mt-2">
      <div class="card-body pd-2">
        {{ todos[3].subject }}
      </div>
    </div> -->

  </div>
</template>


<script>
  // 만들어진 js 라이브러리를 가져옴.
  import {
    ref
  } from 'vue';
  //ref는 여기 작성 내용을 실시간으로 반영하려고.
  //ref를 쓰면 전달되는 매개변수를 { key(이 자리에는 무조건 value라고 온다) : value(괄호 안 변수) }로 만들어줌.
  //ref는 '글자' 또는 숫자가 들어갈 수 있다. 
  //배열 또는 객체를 쓰고 싶으면 reactive를 사용함.

  // js 작성
  // 기본이 export, import
  export default {
    setup() {
      const toggle = ref(false);

      const toggleFn = () => {
        toggle.value = !toggle.value;
      }

      // 할일 목록(배열) 저장
      const todos = ref([{
          id: 1,
          subject: '할일1',
          complete: true
        },
        {
          id: 2,
          subject: '할일2',
          complete: false
        },
        {
          id: 3,
          subject: '할일3',
          complete: false
        },
        {
          id: 4,
          subject: '할일4',
          complete: false
        }
      ]);
      // 추가할 할일
      const add_todos = ref('');
      // 버튼 클릭 시 처리
      const onSubmit = () => {
        // 내용이 입력됐는지 아닌지 구분
        if (add_todos.value === '') {
          // 안내창을 보여준다.
          hasError.value = true;
        } else {
          // 안내창을 숨긴다.
          hasError.value = false;
          // 할일의 내용을 배열로 추가.
          todos.value.push({
            id: Date.now(),
            subject: add_todos.value,
            complete: false
          });
          add_todos.value = '';
        }

        console.log(add_todos.value);

      }
      const hasError = ref(false);

      const deleteTodo = (index) => {
        console.log('지우기' + index);
        // 인덱스 번호에 해당하는 것을 지운다는 뜻.
        todos.value.splice(index, 1);
      }

      //todo 스타일시트
      const todoStyle = {
        textDecoration: 'line-through',
        color: 'gray'
      }

      return {
        toggle,
        toggleFn,
        todos,
        hasError,
        deleteTodo,
        todoStyle,
        add_todos,
        onSubmit
      }
    }
  }
</script>

<style>
  /* css작성 */
  .blue {
    color: blue;
  }

  .finished{
    color: gray;
    text-decoration: line-through;
  }
</style>