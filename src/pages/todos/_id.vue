<template>
    <h1>TODO 수정</h1>

    <div v-if="loading">Loading...</div>

    <form v-else @submit.prevent="onSave">

        <div class="row">

            <!-- 제목 수정 창 -->
            <div class="col-6">

                <div class="form-group">
                    <label>제목</label>
                    <input type="text" class="form-control" v-model="todo.subject">
                </div>

            </div>

            <!-- 상태 수정 창 -->
            <div class="col-6">

                <div class="form-group">
                    <label>완료여부</label>
                    <div>
                        <button class="btn" :class="todo.complete ? 'btn-success' : 'btn-danger' "
                            @click="toggleTodoState" type="button">
                            {{ todo.complete ? 'Complete' : 'Incomplete' }}

                        </button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary" type="submit" v-bind:disabled="todoUpdate">
            저장
        </button>
        <button class="btn btn-outline-dark ml-2" @click="moveBack" type="button">취소</button>

    </form>

    <ToastBox v-if="showToast" :message="toastMessage" :type="toastAlertType"/>

</template>

<script>
    import {useRoute,useRouter} from 'vue-router'
    import axios from 'axios';
    import {computed,ref} from 'vue';
    import _ from 'lodash';
    import ToastBox from '@/components/ToastBox.vue'

    export default {
        components: {
            ToastBox
        },

        setup() {
            const route = useRoute();
            const router = useRouter();

            // 현재 진행 및 수정 중인 todo 정보를 저장하고 있는 객체
            const todo = ref(null);
            // 원래 가지고 있었던 todo 저장를 저장하고 있는 객체
            const originalTodo = ref(null);

            const loading = ref(true);

            //id는 get, post할 때 모두 사용
            const todoId = route.params.id;

            //toastBox 관련
            const showToast = ref(false);
            const toastMessage = ref('');
            const toastAlertType = ref('');

            // 메시지가 전달되면 toastBox 보여주기
            const triggerToast = (message='', type='success') => {
                toastMessage.value = message;
                showToast.value = true;
                toastAlertType.value = type;

                setTimeout(() => {
                    toastMessage.value = '';
                    showToast.value = false;
                }, 3000)
            }

            const getTodo = async () => {
                try{
                    const res = await axios.get(`http://localhost:3000/todos/${todoId}`);
                    // console.log(res);
                    // res.data를 그대로 전달하면 주소를 복사한 것이므로 원본도 같이 참조가 되기 때문에 복사본이라고 할 수 없다.
                    // 내용만 복사하기 위해서 spread 연산자 사용
                    // todo.value = {...res.data};
                    // original.value = {...res.data};
                    // loading.value = false;

                // 복사본(내용만 뜯어서 복사) 으로 다시 저장해 준다.
                todo.value = {...res.data}; // spread 연산으로 내용물 만 복사
                originalTodo.value = {...res.data}; // spread 연산으로 내용물 만 복사

                // todo.value.subject;
                // todo.value.complete;
                // todo.value.id;

                loading.value = false;

                }catch(error){
                    console.log(error);
                    triggerToast('서버에서 자료를 가지고 오는데 실패하였습니다.', 'danger');
                }
            }

            // todo 객체와 originalTodo 를 비교.
            // 객체 안의 요소 값을 비교해서 같은지 다른지 비교
            const todoUpdate = computed(() => {
                return _.isEqual(todo.value, originalTodo.value);
            });

            getTodo();

            const toggleTodoState = () => {
                todo.value.complete = !todo.value.complete
            }

            const moveBack = () => {
                // router 개체에 Push 하면 
                // 화면 이동이 된다.
                // 이때 화면 이동의 장소 정보는
                // router 폴더의 index.js 아래에 기재 되어 있다.
                // 아래의 경우는 다음과 같이 기재가 되어 있다.
                // {
                //     path: '/todos',
                //     name: 'Todos',
                //     component: TodosIndex
                // },
                // name 을 통해서 이동을 하므로 
                // 최종적으로 /todos 로 이동을 한다.

                router.push({
                    name: 'todos'
                });
            }

            const onSave = async () => {
                try{
                    const res = await axios.put(`http://localhost:3000/todos/${todoId}`, {
                    subject: todo.value.subject,
                    complete: todo.value.complete
                });
                // console.log(res);
                // 원본이 갱신 되었으므로 이를 반영하여 새로 저장해 줌.
                originalTodo.value = {
                    ...res.data
                };

                triggerToast('데이터 저장에 성공하였습니다.', 'success')

                }catch(error){
                    console.log(error);
                    triggerToast('데이터 저장에 실패하였습니다.' , 'danger' );
                }
            };

            return {
                todo,
                loading,
                toggleTodoState,
                moveBack,
                onSave,
                todoUpdate,
                showToast,
                toastMessage,
                toastAlertType
            }

        }
    }
</script>

<style>
</style>