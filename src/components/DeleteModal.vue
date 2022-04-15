<template>

    <ModalWin>
        <!-- title -->
        <template v-slot:title>
            삭제경고창
        </template>
        <!-- body -->
        <template v-slot:body>
            정말로 내용을 삭제하시겠습니까?
        </template>
        <!-- footer -->
        <template v-slot:footer>
            <button type="button" 
                class="btn btn-secondary"
                @click="onClose"
            >
                Close
            </button>

            <button type="button" 
                class="btn btn-danger"
                @click="onDelete"
            >
                Delete
            </button>
        </template>
    </ModalWin>

</template>

<script>
    import ModalWin from '@/components/ModalWin.vue'
    export default {
        components: {
            ModalWin
        },
        emits: ['close', 'delete'],
        setup(props, {emit}){
            const onClose = () => {
                console.log('닫기');
                emit('close');
            };
            const onDelete = () => {
                emit('delete');
            }
            return {
                onClose,
                onDelete
            }
        }

    }
</script>

<style>

</style>