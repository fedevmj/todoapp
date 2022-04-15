<template>

    <!-- todo 목록창 -->
    <!-- props로 todoList란 이름을 받았기 때문에 원래는 v-for 구문에 in todos 였는데 이제 props니까 in todoList -->
    <!-- 중복 안 되게 id 값도 연결해 준다. -->
    
    <ListView :items="todoList">

        <template #default="{item}">
        <div 
        @click="moveToPage(item.id)"
        class="card-body pd-2 d-flex" 
        style="cursor:pointer">
            <div class="flex-grow-1">
                <input 
                type="checkbox" 
                class="ml-2 mr-2" 
                :checked="item.complete" 
                :id="item.id" 
                @change="toggleTodo(index, $event)" 
                @click.stop>

                <!-- "{finished:keys.complete}"를 객체로 넣는 것은 문법이다. -->
                <!-- keys.complete 대신 true/false 적어도 okay. -->
                <span class="form-check-label" 
                :class="{finished:item.complete}">
                    {{ item.subject }}
                </span>
            </div>
            <!-- 삭제버튼 -->
            <div>
                <button 
                class="btn btn-danger btn-sm" 
                @click.stop="openModal(item.id)"
                >
                Delete
                </button>
            </div>
        </div>
        </template>

    </ListView>

    <teleport to="#modal">
    <!-- 경고창 -->
    <DeleteModal 
        v-if="showModal"
        @close="closeModal"
        @delete="deleteTodo"
        @close-win="closeModal"
    />

    </teleport>

</template>

<script>
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'
    import DeleteModal from '@/components/DeleteModal.vue'
    import ListView from '@/components/ListView.vue'

    export default {
        components: {
            DeleteModal,
            ListView
        },
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

            //실제 삭제될 id를 보관해 둠
            const todoDeleteId = ref(null);

            // 모달창 보여지는 상태
            const showModal = ref(false);
            const openModal = (index) => {
                showModal.value = true;
                console.log(index);
                todoDeleteId.value = index;
                console.log(todoDeleteId.value)
            }

            const closeModal = () => {
                showModal.value = false;
                todoDeleteId.value = null;
            }

            const toggleTodo = (index, event) => {
                // console.log(index);
                context.emit('toggle-todo', index, event.target.checked);
            };

            const deleteTodo = () => {
                console.log(todoDeleteId.value);
                context.emit('delete-todo', todoDeleteId.value);
                // 삭제버튼 클릭 시 저장해 뒀던 todoDeleteId.value를 활용
                // 해당하는 todo의 id 값
                showModal.value = false;
                todoDeleteId.value = null;
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
                moveToPage,
                showModal,
                openModal,
                todoDeleteId,
                closeModal
            }

        }
    }
</script>

<style>

</style>