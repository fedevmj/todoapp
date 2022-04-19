// import {computed, onUnmounted} from 'vue';
import {computed, } from 'vue';
import { useStore } from 'vuex'

export const useToast = () => {
    const store = useStore();
    const toasts = computed(() => store.state.toast.toasts)

    //toastBox 관련
    // vuex의 state 접근 시 ref로 설정시 즉시 반영이 되지 않는다.
    // 따라서 computed로 접근해서 변경된 값을 참조.
    const showToast = computed(() => store.state.toast.showToast);
    // const toastMessage =computed(() => store.state.toast.toastMessage);
    // const toastAlertType = computed(() => store.state.toast.toastAlertType);
    // getters의 경우 접근방법이 ['경로/이름']
    // const toastMessage = computed(() => store.getters['toast/toastSmileMessage']);

    // 컴포넌트 해제
    // const toastTimeout = computed(() => store.state.toastTimeout);

    // 메시지가 전달되면 toastBox 보여주기
    const triggerToast = (message = '', type = 'success') => {
        
        store.dispatch('toast/triggerToast', {message, type});
        
        // toastMessage.value = message;
        // showToast.value = true;
        // toastAlertType.value = type;
    
        // toastTimeout.value = setTimeout(() => {
        // alert('Timer');
        // console.log('타이머실행');
        // toastMessage.value='';
        // toastAlertType.value = '';
        // showToast.value = false;
        // }, 3000)
    }
    return{
    showToast,
    // toastMessage,
    triggerToast,
    toasts
    // toastAlertType
    }

// onUnmounted( () => { 
//     // 타이머 실행을 막아준다. 메모리 절약  
//     clearTimeout(toastTimeout);
// });
}