<template>
  <div class="container">

    <!-- Title.vue로 이동 -->
    <!-- <h1>TODO LIST</h1> -->
    <AppTitle :apptitle="today" />

    <!-- 할일 검색 입력창 -->
    <input class="form-control" v-model="searchText" type="text" placeholder="Search Todo list">
    
    <!-- 에러안내창 -->
    <ErrorBox :errmessage="error"/>
    <!-- <div class="red">{{error}}</div> -->

    <!-- <input class="form-control" v-bind:todos="filteredTodo" type="text" placeholder="Search Todo List"> -->
    <hr />

    <!-- 할일 추가 입력창 -->
    <!-- 3번)) 태그 이름으로 입력 -->
    <!-- TodoSimpelForm에서 발생한 이벤트는 이렇게 받고 props는 TodoList.Vue참고 -->
    <TodoSimpleForm @todo-insert="todoInsert" />
    <!-- 원래 아래처럼 쓰는 것이 기본이지만 줄여서 <컴포넌트이름/> 이렇게만 써도 됨. -->
    <!-- <TodoSimpleForm></TodoSimpleForm> -->

    <!-- 목록 없음 안내창 -->
    <div class="blue" v-show="!todos.length">생성된 todo 목록이 없습니다.</div>

    <!-- todo 목록창 -->
    <!-- 여기 todoList라는 이름이 todoList.vue 파일 props의 이름과 같음 -->
    <!-- [4/8] 원래 v-bind:todoList="filteredTodo"있었는데 이렇게 만들어서 쓸 필요 x API 쓰면 되기 때문에 다시 v-bind:todoList="todos"로 변경 -->
    <TodoList :todoList="todos" @toggle-todo="toggleEvent" @delete-todo="deleteTodo" />
    <!-- v-bind:는 : / v-on:은 @ -->

  <hr>

    <!-- pagination from bootstrap -->
    <!-- AppPagination.vue로 이동 -->
    <AppPagination :currentpage="currentPage" :pagenumber="numberfOfpages" @showPage="getTodos"/>

  </div>
</template>


<script>
  // 만들어진 js 라이브러리를 가져옴.
  import {
    ref,
    computed,
    watch,
    // reactive
    // watchEffect
  } from 'vue';
  //ref는 여기 작성 내용을 실시간으로 반영하려고.
  //ref를 쓰면 전달되는 매개변수를 { key(이 자리에는 무조건 value라고 온다) : value(괄호 안 변수) }로 만들어줌.
  //ref는 '글자' 또는 숫자가 들어갈 수 있다. 
  //배열 또는 객체를 쓰고 싶으면 reactive를 사용함.

  // 1번)) 컴포넌트를 import 한다.
  // 0번)) TodoSimpleForm(통상적으로 대문자로 시작)을 component폴더에 만듦.
  import AppTitle from './components/AppTitle.vue';
  import ErrorBox from './components/ErrorBox.vue';
  import AppPagination from './components/AppPagination.vue';
  import TodoSimpleForm from './components/TodoSimpleForm.vue';
  import TodoList from './components/TodoList.vue';
  import axios from 'axios'

  // js 작성
  // 기본이 export, import
  export default {
    // 2번)) components에 객체로 import한 vue 파일 이름을 넣는다.
    components: {
      // 컴포넌트 이름은 html 태그처럼 사용
      AppTitle,
      ErrorBox,
      AppPagination,
      TodoSimpleForm,
      TodoList,
    },

    setup() {

      // 타이틀
      const today = ref('Todo List');

      // 할일 목록(배열) 저장
      const todos = ref([]);

      // 에러메시지
      const error = ref('');

      // pagination 관련
      // 전체 todos 개수 필요
      const totalTodos = ref(0);
      // 한 화면당 보여줄 todos : 변경되지 않을 예정이라 ref로 감싸지 x
      const limit = 5;
      // 현재 보여주는 페이지 번호
      const currentPage = ref(1);
      // 총페이지 숫자
      const numberfOfpages =computed( () => {
        // 총 게시물 / 페이지 당 출력 수 (반올림)
        return Math.ceil(totalTodos.value / limit);
      })

      //ref, reactive, computed, props 등 변경될 때마다 실행돼 값의 변화를 체크
      // watchEffect( () => {
      //   console.log('currentPage', currentPage.value);
      //   console.log('totalTodos', totalTodos.value);
      //   console.log('numberfOfpages', numberfOfpages.value);
      //   console.log('================')
      // });

      // watch([currentPage, numberfOfpages], (present, previous) => {
      //   console.log(present, previous);
      //   실행하면 객체가 가로로 두 개가 나오는데 이때 오른쪽이 watch 실행 전 / 왼쪽값이 watch 실행된 값
      // });

      // const obj = reactive({
      //   age: 20
      // })

      // watch( () => obj.age, (present, previous) => {
      //   console.log(present, previous)
      // } );

      // obj.age = 30;

            // 할일 검색 관련 
      const searchText = ref('');
      // 검색에 따른 목록을 갱신해 주는 기능을 생성
      // const filteredTodo = computed(() => {
      //   만약에 searchText 와 동일한 todos 목록에 있는지를 검사해서
      //   화면에 출력을 할 예정임.
      //   searchTxt.value = ''
      //   if (searchText.value) {

      //     return todos.value.filter((todokeyword) => {
      //       // aaa 객체의 제목에 포함이 되어 있는가? 검사
      //       return todokeyword.subject.includes(searchText.value);
      //     });

      //   }
      //   return todos.value;
      // });

      watch(searchText, () => {
        getTodos(1)
      })

      // DB에서 자료 불러오기
      const getTodos = async (page = currentPage.value) => {
        error.value = '';
        //전달된 값을 현재 페이지로 받아들인다.
        currentPage.value = page;
        try {
          //서버에 자료 요청 진행 후 결과를 res로 받는다. 
          // &_ 쓰는 것 잊어버리지 말 것!
          const res = await axios.get(`http://localhost:3000/todos?subject_like=${searchText.value}&_page=${page}&_limit=${limit}&_sort=id&_order=desc`);
          // response가 될 때 res라는 객체의 .data를 화면에 보여줄 목록으로 출력.
          //todos뒤에 ?부터는 json server API에 정해져있다.
          // console.log(res.headers);
          // 총 todos 개수 파악
          // x-total-count는 console.log(res.headers)찍었을 때 웹브라우저f12 network / fetch/xhr 에 들어가면 나온다.
          totalTodos.value = res.headers['x-total-count'];

          // 게시물 지우면 현재 페이지에 남아있고 개수 모자라면 페이지수 줄어들게 하는 코드
          if(numberfOfpages.value < currentPage.value) {
            getTodos(currentPage.value - 1);
            return;
          }

          todos.value = res.data;
        } catch (err) {
          console.log(err);
          error.value = "자료를 불러오는데 실패했습니다."

        }
      }

      //최초(기존에 존재하던) 데이터를 호출한다.
      getTodos();


      // TodoSimpleForm에서 todo-insert로 전달된 객체를 처리해주는 콜백함수
      const todoInsert = async (add_todos) => {

        error.value = '';

        try {
          // const res = 
          await axios.post('http://localhost:3000/todos', {
            // id는 자동으로 생성
            // id: ,
            subject: add_todos.subject,
            complete: add_todos.complete
          })

          // axios.get과 같은 이유
          // todos.value.push(res.data)
          getTodos(1);

        } catch (err) {
          console.log(err);
          error.value = "서버를 확인해 주세요.";
        }

        // 데이터베이스에 저장돼야 하는 내용
        //   axios.post('http://localhost:3000/todos', {
        //   // id는 자동으로 생성
        //   // id: ,
        //   subject: add_todos.subject,
        //   complete: add_todos.complete
        // })

        // .then( (res) => {
        //   console.log(res);
        //res.data는 서버에서 가지고 온 데이터.
        //   todos.value.push(res.data)
        // }
        //   데이터가 제대로 들어갔을 때 (서버관련)
        // ).catch( (err) => {
        //   console.log(err)
        //   error.value="서버 상태를 확인하세요.";
        // }
        //   //데이터가 안 들어갔을 때 (서버관련)
        // )

      }

      const toggleEvent = async (index) => {
        // todos.value[index].complete = !todos.value[index].complete;

        //complete 상태(true or false) 업데이트하기
        // id를 통해서 업데이트
        error.value = '';
        const id = todos.value[index].id;
        try {
          // 서버 DB 업데이트
          await axios.patch('http://localhost:3000/todos/' + id, {
            complete: !todos.value[index].complete
          });
          // 웹브라우저상의 todo 화면 표현
          todos.value[index].complete = !todos.value[index].complete

        } catch (err) {
          console.log(err);
          error.value = "업데이트에 실패했습니다.";
        }
      }

      const deleteTodo = async (index) => {

        error.value = '';

        // console.log('지우기' + index);
        // 인덱스 번호에 해당하는 것을 지운다는 뜻.
        // todos.value.splice(index, 1);

        //삭제하는 경우에는 중복되어서 삭제가 되면 안된다.
        //그래서 유일한 값(id)을 참조해서 해당 하는 요소를 삭제.
        const id = todos.value[index].id;
        console.log(id);

        try {
          await axios.delete('http://localhost:3000/todos/' + id);
          // 뒤에 id 안 적으면 todos 전체가 삭제돼 버리니 주의할 것.
          // todos 뒤에 슬래시(/) 안 넣으면 404 에러 발생.

          // getTodos(1)은 데이터 호출.
          getTodos(currentPage.value);
          // todos.value.splice(index, 1);
          // slice는 직접 목록 관리하는 것. 
        } catch (err) {
          console.log(err);
          error.value = "삭제에 실패했습니다."
        }
      }

      return {
        // html에 쓰기 위해서 return함.
        todos,
        deleteTodo,
        toggleEvent,
        error,
        todoInsert,
        searchText,
        // filteredTodo,
        getTodos,
        totalTodos,
        numberfOfpages,
        currentPage,
        
        today,
      }
    }
  }
</script>

<style>
  /* css작성 */
  .blue {
    color: blue;
  }

  .red {
    color: red;
  }

  .finished {
    color: gray;
    text-decoration: line-through;
  }
</style>