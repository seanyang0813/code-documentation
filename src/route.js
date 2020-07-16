import Library from './components/library/Library.vue';
import Editor from './components/editor/Editor.vue';
export const routes = [
    {path: '/', component: Editor},
    {path: '/library', component: Library},
    {path: '/editor', component: Editor}
]