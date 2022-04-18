<template>
    <!-- Modal -->
    <div class="modal-wrap">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <!-- Todo Delete -->
                        <!-- 타이틀 slot -->
                        <slot name="title"></slot>
                        </h5>
                    <button type="button" class="close">
                        <span @click="onClose">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <!-- 경고창 본문 slot -->
                    <slot name="body"></slot>
                    <!-- 내용을 삭제하시겠습니까?  -->
                </div>
                <div class="modal-footer">
                    <!-- 하단버튼slot -->
                    <slot name="footer"></slot>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getCurrentInstance } from 'vue';
    export default {
        // 여기 close는 상단 X 표시에 사용되기 때문에 이동시키지 X
        emits: ['close-win'],
        setup(){
            const { emit } = getCurrentInstance();
            const onClose = () => {
                console.log('닫기');
                emit('close-win');
            };
            return {
                onClose,
            }
        }
    }   
</script>

<style>

    .modal-wrap{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 9;
    }

</style>