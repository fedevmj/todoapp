<template>
    <!-- html 태그 작성 장소 -->
    <!-- 입력창 -->
    <!-- .prevent는 stop().propagation과 같다. -->
    <form action="" v-on:submit.prevent="onSubmit">
        <div class="d-flex">
            <!-- button에 form-control 넣으면 자동으로 focus/blur 기능 생긴다. -->
            <div class="flex-grow-1 mr-2">
                <input type="text" placeholder="Type Your New Plan!" class="form-control" v-model="add_todos">
            </div>
            <div>
                <button class="btn btn-primary" type="submit">ADD</button>
            </div>
        </div>

    </form>

    <!-- 내용 입력 안내창 -->
    <div class="blue" v-show="hasError">내용을 입력하세요.</div>

</template>

<script>
    import {ref} from 'vue';
    // js 코딩 장소
    export default {
        emits: ['todo-insert'],
        // props와 context로 상위 컴포넌트(app.vue)와 연결
        // context는 app.vue 그 자체를 가리킴
        // 이 자료에는 context 중에서도 {emit}만 쓴다고 돼 있고 아래에도 context.emit 아니라 emit만 적혀있음
        setup(props, {emit}) {
            // html에서 사용할 내용들
            // 추가할 할일
            const add_todos = ref('');
            const hasError = ref(false);
            // 버튼 클릭 시 처리$
            const onSubmit = () => {
                // 내용이 입력됐는지 아닌지 구분
                if (add_todos.value === '') {
                    // 안내창을 보여준다.
                    hasError.value = true;
                } else {
                    // 안내창을 숨긴다.
                    hasError.value = false;
                    // 할일의 내용을 배열로 추가.
                    // 이때 상위 컴포넌트로 전달.
                    // context.emit('이벤트', {데이터});
                    emit('todo-insert', {
                        id: Date.now(),
                        subject: add_todos.value,
                        complete: false
                    })

                    // todos.value.push({
                    //     id: Date.now(),
                    //     subject: add_todos.value,
                    //     complete: false
                    // });

                    // 입력창 초기화 코드
                    add_todos.value = '';
                }

                console.log(add_todos.value);

            }

            return {
                add_todos,
                hasError,
                onSubmit
            }

        }
    }
</script>

<style>
    /* css 작성 장소 */
</style>