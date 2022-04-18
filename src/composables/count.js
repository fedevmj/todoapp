import {reactive, toRefs } from 'vue';

export const useCount = () => {
    const state = reactive({
        count: 0
    });
    return toRefs(state);
}
// ref, reactive는 한 곳에서 값이 변하면 다른 곳에서도 반영된다.
// 만약에 이것이 실행이 되지 않으면 toRefs로 감싸주고 Return 할 것.