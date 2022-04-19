export default {
                // 분류를 한 이후에 접근시 namespaced를 true로 세팅 후 별도의 state, mutation, actions, getter 작성
                namespaced: true,
                // vuex의 데이터 변수 설정
                state: {
                    // 메시지 및 타입 목록
                    toasts: [],
                    //toastBox 관련
                    showToast: false,

                    // toastMessage: '',
                    // toastAlertType: '',
    
                    // 컴포넌트 해제
                    // toastTimeout: null
                },
                mutations: {
                    // 메시지가 추가될 때
                    ADD_TOAST(state, payload){
                        state.toasts.push(payload)
                    },
                    // 메시지가 삭제될 때
                    REMOVE_TOAST(state){
                        state.toasts.shift();
                    },
                    // mutations 에서는 대문자로 작성하기
                    // params state는 위의 객체, payload는 내가 바꾸고 싶은 값
                    UPDATE_TOAST_STATUS(state, payload) {
                        state.showToast = payload;
                    },
                    // UPDATE_TOAST_MESSAGE(state, payload) {
                    //     state.toastMessage = payload;
                    // },
                    // UPDATE_TOAST_ALERT_TYPE(state, payload) {
                    //     state.toastAlertType = payload;
                    // },
                    // UPDATE_TOAST_TIMEOUT(state, payload) {
                    //     state.toastTimeout = payload;
                    // }
                },
                actions: {
                    triggerToast({
                        commit
                    }, {
                        message,
                        type
                    }) {
                        commit('UPDATE_TOAST_STATUS', true);
                        // commit('UPDATE_TOAST_MESSAGE', message);
                        // commit('UPDATE_TOAST_ALERT_TYPE', type);
                        commit('ADD_TOAST', 
                        {   id: Date.now(),
                            message, 
                            type
                        });
                        setTimeout(() => {
                            commit('UPDATE_TOAST_STATUS', false);
                            // commit('UPDATE_TOAST_MESSAGE', '');
                            // commit('UPDATE_TOAST_ALERT_TYPE', '');
                            commit('REMOVE_TOAST')
                        }, 5000);
                        // commit('UPDATE_TOAST_TIMEOUT', timeout);
                    }
                },
                getters: {
                    toastSmileMessage(state) {
                        return state.toastMessage + ':-)';
                    }
                }
            }
    