<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" v-show="currentpage !== 1">
                <a class="page-link" @click="getTodos(currentpage - 1)" href="#" style="cursor:pointer">Previous</a>
            </li>

            <li v-for="keys in pagenumber" :key="keys" :class="currentpage === keys ? 'active': '' "
                class="page-item">
                <a class="page-link" @click="getTodos(keys)" href="#" style="cursor:pointer">{{keys}}</a>
            </li>

            <li class="page-item" v-show="currentpage !== pagenumber">
                <a class="page-link" @click="getTodos(currentpage + 1)" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { getCurrentInstance } from 'vue';
    export default {
        props: ['currentpage', 'pagenumber'],
        setup(){
            const { emit } = getCurrentInstance();
            const getTodos = (index) => {
                console.log(index);
                emit('showPage', index);
            }
            return{
                getTodos
            }
        }
    }
</script>

<style>

</style>