<template>

    <div class="form-group">
    <label>{{label}}</label>
        <input 
        type="text" 
        class="form-control" 
        :value="subject"
        @input="onInput">
        
        <div v-if="err" 
        class="red-text bold-text">
        {{err}}
        </div>
    </div>


</template>

<script>
    import { getCurrentInstance } from 'vue';
    export default {
        props: {
            label: {
                type: String,
                required: true
            },
            err: {
                type: String,
                required: true
            },
            subject: {
                type: String,
                required: true
            },
        },
        emits: ['update-subject'],
            setup(){
                const { emit } = getCurrentInstance();
                const onInput = (event) => {
                    emit('update:subject', event.target.value);
                }
                return{
                    onInput
                }
            }  

    }
</script>

<style scoped>

    .red-text{
        /* 다른데서도 적용 가능 */
        color: red;
    }

    .bold-text{
            /* 해당 component에서만 사용 가능 */
            /* .bold-text[data-v-09eb515a] 대괄호 안은 vue에서 생성된 속성 선택자 */
            /* stylesheet보다 강력하기 때문에 충돌이 날 때 사용하면 좋음 */
            font-weight: 900;
        }

</style>