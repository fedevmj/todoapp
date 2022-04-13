// router 기본형
import { createWebHistory, createRouter } from 'vue-router';
import HomeIndex from '../pages/HomeIndex.vue';
import TodosIndex from '../pages/todos/TodosIndex.vue';
import AboutIndex from '../pages/AboutIndex.vue';
import ProfileIndex from '../pages/ProfileIndex.vue';
import Todo from '../pages/todos/_id.vue';
import TodoCreate from '../pages/todos/TodoCreate.vue';
// vue에서 화면을 연결하는 경우 활용
const router = createRouter({
    // 뒤로가기 기능
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeIndex
        },
        {
            path: '/todos',
            name: 'todos',
            component: TodosIndex
        },
        {
            path: '/about',
            name: 'about',
            component: AboutIndex
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileIndex
        },
        {
            path: '/todos/:id',
            name: 'Todo',
            component: Todo
        },
        {
            path: '/todos/create',
            name: 'TodoCreate',
            component: TodoCreate
        }
    ]
});

// router 내보내기
export default router;

// main.js에서 router 파일 import 하기