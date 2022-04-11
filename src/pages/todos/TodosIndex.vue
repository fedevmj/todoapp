<template>

  <!-- 라우터 화면 보여주기 -->
  <router-view />  


<div class="container">

    <AppTitle :apptitle="today" />

    <!-- 할일 검색 입력창 -->
    <input class="form-control" v-model="searchText" type="text" placeholder="Search Todo list"
        @keyup.enter="searchTodo">

    <!-- 에러안내창 -->
    <ErrorBox :errmessage="error" />
    <hr />

    <!-- 할일 추가 입력창 -->
    <TodoSimpleForm @todo-insert="todoInsert" />

    <!-- 목록 없음 안내창 -->
    <div class="blue" v-show="!todos.length">생성된 todo 목록이 없습니다.</div>

    <!-- todo 목록창 -->
    <TodoList :todoList="todos" @toggle-todo="toggleEvent" @delete-todo="deleteTodo" />

    <hr>

    <AppPagination :currentpage="currentPage" :pagenumber="numberfOfpages" @showPage="getTodos" />

</div>
</template>

<script>
    import {
        ref,
        computed,
        watch,
    } from 'vue';

    //src 폴더인 경우에만 @을 통해서 접근이 가능하다.
    import AppTitle from '@/components/AppTitle.vue';
    import ErrorBox from '@/components/ErrorBox.vue';
    import AppPagination from '@/components/AppPagination.vue';
    import TodoSimpleForm from '@/components/TodoSimpleForm.vue';
    import TodoList from '@/components/TodoList.vue';
    import axios from 'axios'

    export default {
        components: {
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
            const totalTodos = ref(0);
            // 한 화면당 보여줄 todos : 변경되지 않을 예정이라 ref로 감싸지 x
            const limit = 5;
            // 현재 보여주는 페이지 번호
            const currentPage = ref(1);
            // 총페이지 숫자
            const numberfOfpages = computed(() => {
                // 총 게시물 / 페이지 당 출력 수 (반올림)
                return Math.ceil(totalTodos.value / limit);
            })

            // 할일 검색 관련 
            const searchText = ref('');

            // 키보드의 Enter 키를 입력하면 검색을 바로 실행
            const searchTodo = () => {
                // 타이머 실행을 지워준다.
                clearTimeout(timeout);
                // 검색을 즉시 실행한다.
                getTodos(1);
            }

            let timeout = null;
            watch(searchText, () => {

                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    getTodos(1)
                }, 2000);
            })

            // DB에서 자료 불러오기
            const getTodos = async (page = currentPage.value) => {
                error.value = '';
                //전달된 값을 현재 페이지로 받아들인다.
                currentPage.value = page;
                try {
                    //서버에 자료 요청 진행 후 결과를 res로 받는다. 
                    // &_ 쓰는 것 잊어버리지 말 것!
                    const res = await axios.get(
                        `http://localhost:3000/todos?subject_like=${searchText.value}&_page=${page}&_limit=${limit}&_sort=id&_order=desc`
                        );

                    totalTodos.value = res.headers['x-total-count'];

                    // 게시물 지우면 현재 페이지에 남아있고 개수 모자라면 페이지수 줄어들게 하는 코드
                    if (numberfOfpages.value < currentPage.value) {
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

                    getTodos(1);

                } catch (err) {
                    console.log(err);
                    error.value = "서버를 확인해 주세요.";
                }

            }

            const toggleEvent = async (index, checked) => {

                error.value = '';
                const id = todos.value[index].id;
                try {
                    // 서버 DB 업데이트
                    await axios.patch('http://localhost:3000/todos/' + id, {
                        // complete: !todos.value[index].complete
                        complete: checked
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

                const id = todos.value[index].id;
                console.log(id);

                try {
                    await axios.delete('http://localhost:3000/todos/' + id);

                    getTodos(currentPage.value);

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
                searchTodo,
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
