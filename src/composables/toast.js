import {ref, onUnmounted} from 'vue';

export const useToast = () => {
    // 컴포넌트 해제
    const toastTimeout = ref(null);
    onUnmounted( () => { 
        // 타이머 실행을 막아준다. 메모리 절약  
        clearTimeout(toastTimeout);
    });

    //toastBox 관련
    const showToast = ref(false);
    const toastMessage = ref('');
    const toastAlertType = ref('');
    
    // 메시지가 전달되면 toastBox 보여주기
    const triggerToast = (message = '', type = 'success') => {
        toastMessage.value = message;
        showToast.value = true;
        toastAlertType.value = type;
    
        toastTimeout.value = setTimeout(() => {
        // alert('Timer');
        // console.log('타이머실행');
        toastMessage.value='';
        toastAlertType.value = '';
        showToast.value = false;
        }, 3000)
}

    return{
    showToast,
    toastMessage,
    triggerToast,
    toastAlertType
    }
}