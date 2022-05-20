(function(){"use strict";var e={349:function(e,o,t){var n=t(963),a=t(252);const s={class:"container"};function l(e,o,t,n,l,r){const c=(0,a.up)("NavBar"),u=(0,a.up)("router-view"),i=(0,a.up)("ToastBox");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",s,[(0,a.Wm)(u),(0,a.Wm)(i)])],64)}var r=t(577);const c={class:"toast-box"};function u(e,o,t,s,l,u){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(n.W3,{name:"slide"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.toasts,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,r.C_)(["alert",`alert-${e.type}`]),role:"alert"},(0,r.zw)(e.message),3)))),128))])),_:1})])}var i=t(907);const d=()=>{const e=(0,i.oR)(),o=(0,a.Fl)((()=>e.state.toast.toasts)),t=(0,a.Fl)((()=>e.state.toast.showToast)),n=(o="",t="success")=>{e.dispatch("toast/triggerToast",{message:o,type:t})};return{showToast:t,triggerToast:n,toasts:o}};var p={setup(){const{toasts:e}=d();return{toasts:e}}},g=t(744);const v=(0,g.Z)(p,[["render",u],["__scopeId","data-v-21785c20"]]);var m=v;const b={class:"navbar navbar-expand-lg navbar-light bg-light"},f={class:"container-fluid"},T=(0,a.Uk)("Home"),w=(0,a.Uk)("Todos"),h=(0,a.Uk)("About"),_=(0,a.Uk)("Profile");function y(e,o,t,n,s,l){const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",b,[(0,a._)("div",f,[(0,a.Wm)(r,{class:"nav-link",to:{name:"home"}},{default:(0,a.w5)((()=>[T])),_:1}),(0,a.Wm)(r,{class:"nav-link",to:{name:"todos"}},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(r,{class:"nav-link",to:{name:"about"}},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(r,{class:"nav-link",to:{name:"profile"}},{default:(0,a.w5)((()=>[_])),_:1})])])}var k={};const D=(0,g.Z)(k,[["render",y]]);var C=D,j={components:{ToastBox:m,NavBar:C},setup(){return{}}};const x=(0,g.Z)(j,[["render",l],["__scopeId","data-v-53108d83"]]);var S=x,A=t(119);function M(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("h1",null,"HomeIndex")}var W={setup(){return{}}};const O=(0,g.Z)(W,[["render",M]]);var P=O;const H={class:"container"},F={class:"d-flex justify-content-between mt-3 mb-3"},I=(0,a._)("hr",null,null,-1),U={class:"blue"},Z=(0,a._)("hr",null,null,-1);function E(e,o,t,s,l,r){const c=(0,a.up)("AppTitle"),u=(0,a.up)("ErrorBox"),i=(0,a.up)("TodoList"),d=(0,a.up)("AppPagination");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",F,[(0,a.Wm)(c,{apptitle:s.today},null,8,["apptitle"]),(0,a._)("button",{class:"btn btn-primary btn-sm",onClick:o[0]||(o[0]=(...e)=>s.moveToCreate&&s.moveToCreate(...e))},"Todo 등록")]),(0,a.wy)((0,a._)("input",{class:"form-control","onUpdate:modelValue":o[1]||(o[1]=e=>s.searchText=e),type:"text",placeholder:"Search Todo list",onKeyup:o[2]||(o[2]=(0,n.D2)(((...e)=>s.searchTodo&&s.searchTodo(...e)),["enter"]))},null,544),[[n.nr,s.searchText]]),(0,a.Wm)(u,{errmessage:s.error},null,8,["errmessage"]),I,(0,a.wy)((0,a._)("div",U,"생성된 todo 목록이 없습니다.",512),[[n.F8,!s.todos.length]]),(0,a.Wm)(i,{todoList:s.todos,onToggleTodo:s.toggleEvent,onDeleteTodo:s.deleteTodo},null,8,["todoList","onToggleTodo","onDeleteTodo"]),Z,(0,a.Wm)(d,{currentpage:s.currentPage,pagenumber:s.numberfOfpages,onShowPage:s.getTodos},null,8,["currentpage","pagenumber","onShowPage"])])}var L=t(262);function q(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("h1",null,(0,r.zw)(t.apptitle),1)}var B={props:{apptitle:{type:String,required:!0}}};const $=(0,g.Z)(B,[["render",q]]);var z=$;const N={class:"red"};function V(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("div",N,(0,r.zw)(t.errmessage),1)}var Y={props:["errmessage"]};const R=(0,g.Z)(Y,[["render",V]]);var K=R;const G={"aria-label":"Page navigation example"},J={class:"pagination"},Q={class:"page-item"},X=["onClick"],ee={class:"page-item"};function oe(e,o,t,s,l,c){return(0,a.wg)(),(0,a.iD)("nav",G,[(0,a._)("ul",J,[(0,a.wy)((0,a._)("li",Q,[(0,a._)("a",{class:"page-link",onClick:o[0]||(o[0]=e=>s.getTodos(t.currentpage-1)),href:"#",style:{cursor:"pointer"}},"Previous")],512),[[n.F8,1!==t.currentpage]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.pagenumber,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,r.C_)([t.currentpage===e?"active":"","page-item"])},[(0,a._)("a",{class:"page-link",onClick:o=>s.getTodos(e),href:"#",style:{cursor:"pointer"}},(0,r.zw)(e),9,X)],2)))),128)),(0,a.wy)((0,a._)("li",ee,[(0,a._)("a",{class:"page-link",onClick:o[1]||(o[1]=e=>s.getTodos(t.currentpage+1)),href:"#"},"Next")],512),[[n.F8,t.currentpage!==t.pagenumber]])])])}var te={props:["currentpage","pagenumber"],setup(){const{emit:e}=(0,a.FN)(),o=o=>{console.log(o),e("showPage",o)};return{getTodos:o}}};const ne=(0,g.Z)(te,[["render",oe]]);var ae=ne;const se=["onClick"],le={class:"flex-grow-1"},re=["checked","id","onChange"],ce=["onClick"];function ue(e,o,t,s,l,c){const u=(0,a.up)("ListView"),i=(0,a.up)("DeleteModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u,{items:t.todoList},{default:(0,a.w5)((({item:e,index:t})=>[(0,a._)("div",{onClick:o=>s.moveToPage(e.id),class:"card-body pd-2 d-flex",style:{cursor:"pointer"}},[(0,a._)("div",le,[(0,a._)("input",{type:"checkbox",class:"ml-2 mr-2",checked:e.complete,id:e.id,onChange:e=>s.toggleTodo(t,e),onClick:o[0]||(o[0]=(0,n.iM)((()=>{}),["stop"]))},null,40,re),(0,a._)("span",{class:(0,r.C_)(["form-check-label",{finished:e.complete}])},(0,r.zw)(e.subject),3)]),(0,a._)("div",null,[(0,a._)("button",{class:"btn btn-danger btn-sm",onClick:(0,n.iM)((o=>s.openModal(e.id)),["stop"])}," Delete ",8,ce)])],8,se)])),_:1},8,["items"]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"#modal"},[s.showModal?((0,a.wg)(),(0,a.j4)(i,{key:0,onClose:s.closeModal,onDelete:s.deleteTodo,onCloseWin:s.closeModal},null,8,["onClose","onDelete","onCloseWin"])):(0,a.kq)("",!0)]))],64)}const ie=(0,a.Uk)(" 삭제경고창 "),de=(0,a.Uk)(" 정말로 내용을 삭제하시겠습니까? ");function pe(e,o,t,n,s,l){const r=(0,a.up)("ModalWin");return(0,a.wg)(),(0,a.j4)(r,null,{title:(0,a.w5)((()=>[ie])),body:(0,a.w5)((()=>[de])),footer:(0,a.w5)((()=>[(0,a._)("button",{type:"button",class:"btn btn-secondary",onClick:o[0]||(o[0]=(...e)=>n.onClose&&n.onClose(...e))}," Close "),(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:o[1]||(o[1]=(...e)=>n.onDelete&&n.onDelete(...e))}," Delete ")])),_:1})}const ge={class:"modal-wrap"},ve={class:"modal-dialog"},me={class:"modal-content"},be={class:"modal-header"},fe={class:"modal-title",id:"exampleModalLabel"},Te={type:"button",class:"close"},we={class:"modal-body"},he={class:"modal-footer"};function _e(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("div",ge,[(0,a._)("div",ve,[(0,a._)("div",me,[(0,a._)("div",be,[(0,a._)("h5",fe,[(0,a.WI)(e.$slots,"title")]),(0,a._)("button",Te,[(0,a._)("span",{onClick:o[0]||(o[0]=(...e)=>n.onClose&&n.onClose(...e))},"×")])]),(0,a._)("div",we,[(0,a.WI)(e.$slots,"body")]),(0,a._)("div",he,[(0,a.WI)(e.$slots,"footer")])])])])}var ye={emits:["close-win"],setup(){const{emit:e}=(0,a.FN)(),o=()=>{console.log("닫기"),e("close-win")};return{onClose:o}}};const ke=(0,g.Z)(ye,[["render",_e]]);var De=ke,Ce={components:{ModalWin:De},emits:["close","delete"],setup(){const{emit:e}=(0,a.FN)(),o=()=>{console.log("닫기"),e("close")},t=()=>{e("delete")};return{onClose:o,onDelete:t}}};const je=(0,g.Z)(Ce,[["render",pe]]);var xe=je;function Se(e,o,t,n,s,l){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.items,((o,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"card mt-2",key:o.id},[(0,a.WI)(e.$slots,"default",{item:o,index:t})])))),128)}var Ae={props:{items:{type:Array,required:!0}}};const Me=(0,g.Z)(Ae,[["render",Se]]);var We=Me,Oe={components:{DeleteModal:xe,ListView:We},props:{todoList:{type:Array,required:!0}},emits:["toggle-todo","delete-todo"],setup(){const{emit:e}=(0,a.FN)(),o=(0,A.tv)(),t=(0,L.iH)(null),n=(0,L.iH)(!1),s=e=>{n.value=!0,console.log(e),t.value=e,console.log(t.value)},l=()=>{n.value=!1,t.value=null},r=(o,t)=>{console.log(o),console.log(t),e("toggle-todo",o,t.target.checked)},c=()=>{console.log(t.value),e("delete-todo",t.value),n.value=!1,t.value=null},u=e=>{o.push({name:"Todo",params:{id:e}})};return{toggleTodo:r,deleteTodo:c,moveToPage:u,showModal:n,openModal:s,todoDeleteId:t,closeModal:l}}};const Pe=(0,g.Z)(Oe,[["render",ue]]);var He=Pe,Fe=t(669),Ie=t.n(Fe),Ue=Ie().create({baseURL:"http://localhost:3000/"}),Ze={components:{AppTitle:z,ErrorBox:K,AppPagination:ae,TodoList:He},setup(){const e=(0,A.tv)(),o=()=>{e.push({name:"TodoCreate"})},t=(0,L.iH)("Todo List"),n=(0,L.iH)([]);console.log(n);const s=(0,L.iH)(""),l=(0,L.iH)(0),r=5,c=(0,L.iH)(1),u=(0,a.Fl)((()=>Math.ceil(l.value/r))),{showToast:i,toastMessage:p,triggerToast:g,toastAlertType:v}=d(),m=(0,L.iH)(""),b=()=>{clearTimeout(f),T(1)};let f=null;(0,a.YP)(m,(()=>{clearTimeout(f),f=setTimeout((()=>{T(1)}),2e3)}));const T=async(e=c.value)=>{s.value="",c.value=e;try{const o=await Ue.get(`todos?subject_like=${m.value}&_page=${e}&_limit=${r}&_sort=id&_order=desc`);if(l.value=o.headers["x-total-count"],u.value<c.value)return void T(c.value-1);n.value=o.data}catch(o){console.log(o),s.value="자료를 불러오는데 실패했습니다.",g("자료를 불러오는데 실패했습니다.","danger")}};T();const w=async e=>{s.value="";try{await Ue.post("todos",{subject:e.subject,complete:e.complete}),T(1)}catch(o){console.log(o),s.value="서버를 확인해 주세요.",g("서버를 확인해 주세요.","danger")}},h=async(e,o)=>{console.log(e),console.log(o),s.value="";const t=n.value[e].id;try{await Ue.patch("todos/"+t,{complete:o}),n.value[e].complete=o,g("상태를 변경하였습니다.","success")}catch(a){console.log(a),s.value="업데이트에 실패했습니다.",g("업데이트에 실패했습니다.","danger")}},_=async e=>{s.value="";const o=e;try{await Ue["delete"]("todos/"+o),g("목록을 삭제하였습니다.","success"),T(c.value)}catch(t){console.log(t),s.value="삭제에 실패했습니다.",g("삭제에 실패했습니다.","danger")}};return{todos:n,deleteTodo:_,toggleEvent:h,error:s,todoInsert:w,searchText:m,getTodos:T,totalTodos:l,numberfOfpages:u,currentPage:c,searchTodo:b,today:t,showToast:i,toastMessage:p,toastAlertType:v,triggerToast:g,moveToCreate:o}}};const Ee=(0,g.Z)(Ze,[["render",E]]);var Le=Ee;function qe(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("h1",null,"AboutPage")}var Be={};const $e=(0,g.Z)(Be,[["render",qe]]);var ze=$e;function Ne(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("h1",null,"ProfilePage")}var Ve={};const Ye=(0,g.Z)(Ve,[["render",Ne]]);var Re=Ye;const Ke=(0,a._)("h1",null,"Edit Todo ",-1);function Ge(e,o,t,n,s,l){const r=(0,a.up)("TodoForm");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Ke,(0,a.Wm)(r,{editing:!0})],64)}const Je=e=>((0,a.dD)("data-v-eb5ec540"),e=e(),(0,a.Cn)(),e),Qe={key:0},Xe={class:"row"},eo={class:"col-6"},oo={key:0,class:"col-6"},to={class:"form-group"},no=Je((()=>(0,a._)("label",null,"완료여부",-1))),ao={class:"col-12"},so={class:"form-group"},lo=Je((()=>(0,a._)("label",{for:""},"본문",-1))),ro=["disabled"];function co(e,o,t,s,l,c){const u=(0,a.up)("InputView");return s.loading?((0,a.wg)(),(0,a.iD)("div",Qe,"Loading...")):((0,a.wg)(),(0,a.iD)("form",{key:1,onSubmit:o[4]||(o[4]=(0,n.iM)(((...e)=>s.onSave&&s.onSave(...e)),["prevent"]))},[(0,a._)("div",Xe,[(0,a._)("div",eo,[(0,a.Wm)(u,{label:"제목",err:s.subjectError,subject:s.todo.subject,"onUpdate:subject":o[0]||(o[0]=e=>s.todo.subject=e)},null,8,["err","subject"])]),t.editing?((0,a.wg)(),(0,a.iD)("div",oo,[(0,a._)("div",to,[no,(0,a._)("div",null,[(0,a._)("button",{class:(0,r.C_)(["btn",s.todo.complete?"btn-success":"btn-danger"]),onClick:o[1]||(o[1]=(...e)=>s.toggleTodoState&&s.toggleTodoState(...e)),type:"button"},(0,r.zw)(s.todo.complete?"Complete":"Incomplete"),3)])])])):(0,a.kq)("",!0),(0,a._)("div",ao,[(0,a._)("div",so,[lo,(0,a.wy)((0,a._)("textarea",{class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":o[2]||(o[2]=e=>s.todo.body=e)},null,512),[[n.nr,s.todo.body]])])])]),(0,a._)("button",{class:"btn btn-primary",type:"submit",disabled:s.todoUpdate},(0,r.zw)(t.editing?"수정":"생성"),9,ro),(0,a._)("button",{class:"btn btn-outline-dark ml-2",onClick:o[3]||(o[3]=(...e)=>s.moveBack&&s.moveBack(...e)),type:"button"},"취소")],32))}var uo=t(486),io=t.n(uo);const po={class:"form-group"},go=["value"],vo={key:0,class:"red-text bold-text"};function mo(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("div",po,[(0,a._)("label",null,(0,r.zw)(t.label),1),(0,a._)("input",{type:"text",class:"form-control",value:t.subject,onInput:o[0]||(o[0]=(...e)=>n.onInput&&n.onInput(...e))},null,40,go),t.err?((0,a.wg)(),(0,a.iD)("div",vo,(0,r.zw)(t.err),1)):(0,a.kq)("",!0)])}var bo={props:{label:{type:String,required:!0},err:{type:String,required:!0},subject:{type:String,required:!0}},emits:["update-subject"],setup(){const{emit:e}=(0,a.FN)(),o=o=>{e("update:subject",o.target.value)};return{onInput:o}}};const fo=(0,g.Z)(bo,[["render",mo],["__scopeId","data-v-d21446aa"]]);var To=fo,wo={components:{InputView:To},props:{editing:{type:Boolean,default:!1}},setup(e){(0,a.ic)((()=>{console.log(c.value.subject)}));const{showToast:o,toastMessage:t,triggerToast:n,toastAlertType:s}=d(),l=(0,A.yj)(),r=(0,A.tv)(),c=(0,L.iH)({subject:"",complete:!1,body:""}),u=(0,L.iH)(null),i=(0,L.iH)(!1),p=l.params.id,g=async()=>{i.value=!0;try{const e=await Ue.get(`todos/${p}`);c.value={...e.data},u.value={...e.data},i.value=!1}catch(e){console.log(e),n("서버에서 자료를 가지고 오는데 실패하였습니다.","danger"),i.value=!1}},v=(0,a.Fl)((()=>io().isEqual(c.value,u.value)));e.editing&&g();const m=()=>{c.value.complete=!c.value.complete},b=()=>{r.push({name:"todos"})},f=(0,L.iH)(""),T=async()=>{if(f.value="",!c.value.subject)return f.value="제목을 입력해 주세요",void n("제목을 입력해 주세요.","danger");try{let o;const t={subject:c.value.subject,complete:c.value.complete,body:c.value.body};e.editing?(o=await Ue.put(`todos/${p}`,t),u.value={...o.data},n("데이터 업데이트에 성공하였습니다.","success")):(o=await Ue.post("todos",t),c.value.subject="",c.value.body="",n("데이터 저장에 성공하였습니다.","success")),e.editing||r.push({name:"todos"})}catch(o){console.log(o),e.editing?n("데이터 업데이트에 실패하였습니다.","danger"):n("데이터 저장에 실패하였습니다.","danger")}};return{todo:c,loading:i,toggleTodoState:m,moveBack:b,onSave:T,todoUpdate:v,showToast:o,toastMessage:t,toastAlertType:s,triggerToast:n,subjectError:f}}};const ho=(0,g.Z)(wo,[["render",co],["__scopeId","data-v-eb5ec540"]]);var _o=ho,yo={components:{TodoForm:_o},setup(){const{emit:e}=(0,a.FN)(),o=()=>{console.log("내용갱신"),e("update-todo-toast",{})};return{updateTodo:o}}};const ko=(0,g.Z)(yo,[["render",Ge]]);var Do=ko;const Co=(0,a._)("h1",null,"할일 생성",-1);function jo(e,o,t,n,s,l){const r=(0,a.up)("TodoForm");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Co,(0,a.Wm)(r,{editing:!1})],64)}var xo={components:{TodoForm:_o},setup(){return{}}};const So=(0,g.Z)(xo,[["render",jo]]);var Ao=So;const Mo=(0,A.p7)({history:(0,A.PO)(),routes:[{path:"/",name:"home",component:P},{path:"/todos",name:"todos",component:Le},{path:"/about",name:"about",component:ze},{path:"/profile",name:"profile",component:Re},{path:"/todos/:id",name:"Todo",component:Do},{path:"/todos/create",name:"TodoCreate",component:Ao}]});var Wo=Mo,Oo={namespaced:!0,state:{toasts:[],showToast:!1},mutations:{ADD_TOAST(e,o){e.toasts.push(o)},REMOVE_TOAST(e){e.toasts.shift()},UPDATE_TOAST_STATUS(e,o){e.showToast=o}},actions:{triggerToast({commit:e},{message:o,type:t}){e("UPDATE_TOAST_STATUS",!0),e("ADD_TOAST",{id:Date.now(),message:o,type:t}),setTimeout((()=>{e("UPDATE_TOAST_STATUS",!1),e("REMOVE_TOAST")}),5e3)}},getters:{toastSmileMessage(e){return e.toastMessage+":-)"}}},Po={toast:Oo},Ho=(0,i.MT)({modules:Po});(0,n.ri)(S).use(Ho).use(Wo).mount("#app")}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var s=o[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){var e=[];t.O=function(o,n,a,s){if(!n){var l=1/0;for(i=0;i<e.length;i++){n=e[i][0],a=e[i][1],s=e[i][2];for(var r=!0,c=0;c<n.length;c++)(!1&s||l>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(r=!1,s<l&&(l=s));if(r){e.splice(i--,1);var u=a();void 0!==u&&(o=u)}}return o}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[n,a,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var a,s,l=n[0],r=n[1],c=n[2],u=0;if(l.some((function(o){return 0!==e[o]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(c)var i=c(t)}for(o&&o(n);u<l.length;u++)s=l[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(i)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(349)}));n=t.O(n)})();
//# sourceMappingURL=app.44d2f26f.js.map