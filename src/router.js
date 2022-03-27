import {createRouter,createWebHistory} from 'vue-router';
import SelectMovie from './pages/SelectMovie.vue';
import GetTicket from './pages/GetTicket.vue';
import UserForm from './pages/UserForm.vue';
const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', redirect : '/movies'},
        {path : '/movies', component : SelectMovie},
        {path : '/form', component : UserForm},
        {path : '/ticket', component : GetTicket},
    ],
    
});

export default router;