import Library from './components/library/Library.vue';
import Editor from './components/editor/Editor.vue';
import Login from './components/Login/Login.vue';
import Signup from './components/Login/Signup.vue';
export const routes = [
    {path: '/', component: Editor},
    {path: '/library', component: Library},
    {path: '/editor', component: Editor},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup}
]