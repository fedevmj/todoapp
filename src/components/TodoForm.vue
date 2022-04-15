<template>

    <div v-if="loading">Loading...</div>

    <form v-else @submit.prevent="onSave">

        <div class="row">

            <!-- 제목 입력 및 수정창 -->
            <div class="col-6">

                <InputView
                    label="제목"
                    :err="subjectError"
                    v-model:subject="todo.subject"
                />
                <!-- v-model:props명='값' -->
                <!-- Inputview 파일에서 update:라고 적어주면 자동으로 emit이 된다. -->
                <!-- @update-subject="updateTodoSubject" -->
                <!-- v-model:subject="todo.subject" -->

                <!-- :props명="변수전달" / props명="그냥 값" -->

            </div>

            <!-- 상태 수정 창 -->
            <div class="col-6" v-if="editing">

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

            <!-- 본문내용 입력 및 수정창 -->
            <div class="col-12">
                <div class="form-group">
                    <label for="">본문</label>
                    <textarea class="form-control" cols="30" rows="10" v-model="todo.body"></textarea>
                </div>
            </div>

        </div>

        <button class="btn btn-primary" type="submit" v-bind:disabled="todoUpdate">
            {{editing ? '수정' : '생성'}}
        </button>
        <button class="btn btn-outline-dark ml-2" @click="moveBack" type="button">취소</button>

    </form>

    <!-- vue에서 제공하는 태그(컴포넌트) -->
    <Transition name="fade">
        <!-- 안내창 -->
        <ToastBox v-if="showToast" :message="toastMessage" :type="toastAlertType"/>

    </Transition>

    <!-- 생명주기 알아보기 -->
    <!-- <div id="test">Hello</div> -->

</template>

<script>
    import {useRoute,useRouter} from 'vue-router'
    import axios from 'axios';
    // import {computed,ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
    import {computed,ref, onUpdated} from 'vue';
    import _ from 'lodash';
    import ToastBox from '@/components/ToastBox.vue'
    import {useToast} from '@/composables/toast.js';
    import InputView from '@/components/InputView.vue'


    export default {
        components: {
            ToastBox,
            InputView
        },
        props: {
            editing: {
                type: Boolean,
                default: false
            }
        },
        emits: ['update-todo', 'new-todo'],
        setup(props, {emit}) {

            onUpdated( () => {
                console.log(todo.value.subject);
            })
            // 생명주기코드(lifecycle hooks)
            // 화면에 보여지기 전 단계 (등록 전 단계)
            // onBeforeMount( () => {
            // console.log('onBeforeMount');
            // 화면이 보여지기 전이므로 #test를 찾을 수 없어서 #null 이라고 뜬다. 
            // console.log( document.querySelector('#test') );
            // });
            // 화면에 보여지는 단계 
            // onMounted( () => {
            //     console.log('onMounted');
            //     console.log( document.querySelector('#test') );
            // });
            // 화면이 갱신되기전(업데이트 전) 단계
            // onBeforeUpdate( () => {
            //     console.log('onBeforeUpdate');
            // });
            // 화면이 갱신되고 난 후 단계
            // onUpdated( () => {
            //     console.log('onUpdate');
            // })
            // 컴포넌트 해제 준비
            // onBeforeUnmount( () => {
            //     // 화면을 제거하기 전 여러가지 처리를 하는 자리
            //     console.log(onBeforeUnmount);
            // })

            //ToastBox 관련
            const {
                showToast,
                toastMessage,
                triggerToast,
                toastAlertType
            } = useToast();

            // 컴포넌트 해제
            // const toastTimeout = ref(null);
            // onUnmounted( () => { 
                // 타이머 실행을 막아준다. 메모리 절약  
            //     clearTimeout(toastTimeout);
            // });

            const route = useRoute();
            const router = useRouter();

            // 현재 진행 및 수정 중인 todo 정보를 저장하고 있는 객체
            const todo = ref({
                subject: '',
                complete: false,
                body: ''
            });
            // 원래 가지고 있었던 todo 저장를 저장하고 있는 객체
            const originalTodo = ref(null);
            // 내용을 가지고 올 때 (편집 시) 활용
            const loading = ref(false);

            //id는 get, post할 때 모두 사용
            const todoId = route.params.id;

            //toastBox 관련
            // const showToast = ref(false);
            // const toastMessage = ref('');
            // const toastAlertType = ref('');

            // 메시지가 전달되면 toastBox 보여주기
        //     const triggerToast = (message = '', type = 'success') => {
        //     toastMessage.value = message;
        //     showToast.value = true;
        //     toastAlertType.value = type;

        //     toastTimeout.value = setTimeout(() => {
        //         // alert('Timer');
        //         // console.log('타이머실행');
        //         toastMessage.value='';
        //         toastAlertType.value = '';
        //         showToast.value = false;
        //     }, 3000)
        // }

            // const updateTodoSubject = (txt) => {
            //     todo.value.subject = txt;
            // }

            const getTodo = async () => {
                loading.value = true;
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
                    loading.value = false;

                }
            }

            // todo 객체와 originalTodo 를 비교.
            // 객체 안의 요소 값을 비교해서 같은지 다른지 비교
            const todoUpdate = computed(() => {
                return _.isEqual(todo.value, originalTodo.value);
            });

            //편집이라면 아래 구문을 실행한다.
            if(props.editing){
                // 여기서 props 접근이 안 돼서 (바깥에 있으니까) setup에 params로 받음
                getTodo();
            }

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

            // 제목 미 입력 시 경고 내용
            const subjectError = ref('');

            const onSave = async () => {

                subjectError.value = '';

                // 만약에 제목이 없으면 등록 및 편집 불가
                if(!todo.value.subject){
                    subjectError.value = '제목을 입력해 주세요';
                    triggerToast('제목을 입력해 주세요.', 'danger')

                    return;
                }

                try{
                let res;
                const data = {
                            subject: todo.value.subject,
                            complete: todo.value.complete,
                            body: todo.value.body
                        }

                    if(props.editing){
                        // 편집으로 진입한 경우
                        res = await axios.put(`http://localhost:3000/todos/${todoId}`, data );

                    // console.log(res);
                    // 원본이 갱신 되었으므로 이를 반영하여 새로 저장해 줌.
                    originalTodo.value = {
                        ...res.data
                    };
                    emit('update-todo', {})
                    triggerToast('데이터 업데이트에 성공하였습니다.', 'success')

                    
                    }else{
                        //신규 등록인 경우
                        res = await axios.post(`http://localhost:3000/todos`, data);
                        emit('new-todo', {})
                        triggerToast('데이터 저장에 성공하였습니다.', 'success');

                    }

                        //  제목, 내용을 비운다.
                        todo.value.subject = '';
                        todo.value.body = '';
                        // 목록으로 돌아간다.
                        router.push({
                            name: 'todos'
                        });

                }catch(error){
                    console.log(error);
                    if(props.editing){
                        triggerToast('데이터 업데이트에 실패하였습니다.' , 'danger' );
                    }else{
                        triggerToast('데이터 저장에 실패하였습니다.' , 'danger' );
                    }
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
                toastAlertType,
                triggerToast,
                subjectError,
                // updateTodoSubject
            }

        }
    }
</script>

<style>

</style>

<style scoped>
    
    .fade-enter-active,
    .fade-leave-active{
        transition: all 0.5s ease;
    }
    
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
        transform: translateY(-50px);
    }

    .fade-enter-to,
    .fade-leave-from{
        opacity: 1;
        transform: translateY(0);
    }
</style>