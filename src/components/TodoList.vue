<template>

    <!-- todo 목록창 -->
    <!-- props로 todoList란 이름을 받았기 때문에 원래는 v-for 구문에 in todos 였는데 이제 props니까 in todoList -->
    <!-- 중복 안 되게 id 값도 연결해 준다. -->
    <div v-for="(keys, index) in todoList" :key="keys.id" class="card mt-3">

        <div 
        @click="moveToPage(keys.id)"
        class="card-body pd-2 d-flex">
            <div class="form-check flex-grow-1">
                <input type="checkbox" class="form-check-input" :checked="keys.complete" :id="keys.id" @change="toggleTodo(index, $event)" @click.stop>

                <!-- "{finished:keys.complete}"를 객체로 넣는 것은 문법이다. -->
                <!-- keys.complete 대신 true/false 적어도 okay. -->
                <label class="form-check-label" :class="{finished:keys.complete}" :for="keys.id">
                    {{ keys.subject }}
                </label>
            </div>
            <!-- 삭제버튼 -->
            <div>
                <button 
                class="btn btn-danger btn-sm" 
                @click.stop="deleteTodo(index)"
                >
                Delete
                </button>
            </div>
        </div>

    </div>

</template>

<script>
    import {useRouter} from 'vue-router'

    export default {
        // 아래처럼 배열로 받아도 되고 (유형 number, string 등을 포함해서) 객체로 불러올 수도 있음.
        // props: ['todoList'],
        props: {
            todoList: {
                type: Array,
                required: true,
            }
        },

        emits: ['toggle-todo', 'delete-todo'],

        setup(props, context) {
            const router = useRouter();

            const toggleTodo = (index, event) => {
                // console.log(index);
                context.emit('toggle-todo', index, event.target.checked);
            };

            const deleteTodo = (index) => {
                context.emit('delete-todo', index)
            };

            // 클릭된 id를 전달한다.
            const moveToPage = (todoId) => {
                // console.log(todoId);
                // router.push('/todos/' + 'todosId');
                router.push({
                    name: 'Todo',
                    params: {
                        id: todoId
                    }
                });
            }

            return {
                toggleTodo,
                deleteTodo,
                moveToPage
            }

        }
    }
</script>

<style>

</style>