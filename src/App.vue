<template>

<!-- 상단메뉴 -->

  <NavBar />

 <!-- 라우터 화면 보여주기 -->
  <div class="container">
    <router-view />
      <!-- 원래 router-view 안에 있었음 -->
      <!-- @new-todo-toast="newTodo"  -->
      <!-- @update-todo-toast="updateTodo"   -->

    <!-- <transition name="slide"> -->
    <!--안내창 -->
    <!-- <ToastBox v-if="showToast" :message="toastMessage" :type="toastAlertType" /> -->
    <ToastBox />
    <!-- </transition> -->

  </div>

</template>

<script>

  import ToastBox from '@/components/ToastBox.vue';
  import NavBar from '@/components/NavBar.vue';
  // import { useToast } from '@/composables/toast.js';
  // import { useStore } from 'vuex';


  export default {
    components: {
      ToastBox,
      NavBar
    },
    setup() {
      // const store = useStore();

      // console.log(store);
      // console.log(store.state);
      // console.log(store.state.showToast);

      // const updateTodo = () => {
      //   console.log('업데이트');
      //   triggerToast("목록이 업데이트 되었습니다.", 'success');
      // };
      // const newTodo = () => {
      //   console.log('새글등록');
      //   triggerToast("새로운 글이 추가되었습니다.", 'success');
      // };
      // ToastBox 관련
      // const {
      //   showToast,
      //   toastMessage,
      //   triggerToast,
      //   toastAlertType
      // } = useToast();

      return {
        // updateTodo,
        // newTodo,

        // showToast,
        // toastMessage,
        // triggerToast,
        // toastAlertType
      }
    }
  }
</script>

<style scoped>
  /* .slide-enter-active,
  .slide-leave-active{
    transition: all 0.5s ease;
  }

  .slide-enter-from,
  .slide-leave-to{
    opacity: 0;
    transform: translateY(-30px);
  }

  .slide-enter-to,
  .slide-leave-from{
    opacity: 1;
    transform: translateY(0px);
  } */

</style>